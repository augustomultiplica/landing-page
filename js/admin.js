// Admin: login con Supabase Auth. La seguridad real la da RLS (SELECT solo para authenticated).
const { url: SUPABASE_URL, key: SUPABASE_KEY } = window.SUPABASE_CONFIG || {};
const client = window.supabase && SUPABASE_URL && SUPABASE_KEY
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
  : null;

const $ = (id) => document.getElementById(id);
const loginView = $('login-view');
const panelView = $('panel-view');
const loginForm = $('login-form');
const loginStatus = loginForm.querySelector('.form-status');
const panelStatus = $('panel-status');

let signups = [];
let loadedFor = null; // id de usuario con datos ya cargados

const fmtDate = (iso) => new Date(iso).toLocaleString('es');

function renderRows(body, emptyEl, countEl, rows, cells) {
  body.replaceChildren();
  rows.forEach((row) => {
    const tr = document.createElement('tr');
    cells(row).forEach(([text, cls]) => {
      const td = document.createElement('td');
      td.textContent = text;
      if (cls) td.className = cls;
      tr.appendChild(td);
    });
    body.appendChild(tr);
  });
  emptyEl.hidden = rows.length > 0;
  countEl.textContent = rows.length ? `(${rows.length})` : '';
}

function clearData() {
  signups = [];
  loadedFor = null;
  renderRows($('signups-body'), $('signups-empty'), $('signups-count'), [], () => []);
  renderRows($('feedback-body'), $('feedback-empty'), $('feedback-count'), [], () => []);
  $('signups-empty').hidden = true;
  $('feedback-empty').hidden = true;
  panelStatus.textContent = '';
}

async function loadData() {
  panelStatus.textContent = '';
  const [s, f] = await Promise.all([
    client.from('signups').select('email, created_at').order('created_at', { ascending: false }),
    client.from('feedback').select('message, email, created_at').order('created_at', { ascending: false }),
  ]);
  if (s.error || f.error) {
    panelStatus.textContent = 'No pudimos cargar los datos.';
    return;
  }
  signups = s.data;
  renderRows($('signups-body'), $('signups-empty'), $('signups-count'), s.data,
    (r) => [[r.email], [fmtDate(r.created_at)]]);
  renderRows($('feedback-body'), $('feedback-empty'), $('feedback-count'), f.data,
    (r) => [[fmtDate(r.created_at)], [r.email || '—'], [r.message, 'msg']]);
}

function showSession(session) {
  if (session) {
    loginView.hidden = true;
    panelView.hidden = false;
    $('session-email').textContent = session.user.email;
    if (loadedFor !== session.user.id) {
      loadedFor = session.user.id;
      loadData();
    }
  } else {
    panelView.hidden = true;
    loginView.hidden = false;
    clearData();
  }
}

function csvCell(value) {
  let s = String(value ?? '');
  if (/^[=+\-@\t\r]/.test(s)) s = `'${s}`; // evita inyección de fórmulas en Excel
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

$('download-csv').addEventListener('click', () => {
  const lines = ['email,created_at', ...signups.map((r) => `${csvCell(r.email)},${csvCell(r.created_at)}`)];
  const blob = new Blob(['﻿' + lines.join('\r\n') + '\r\n'], { type: 'text/csv;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `signups-${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(a.href);
});

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const button = loginForm.querySelector('button[type="submit"]');
  const { email, password } = Object.fromEntries(new FormData(loginForm));
  loginStatus.classList.add('is-error');
  if (!client) { loginStatus.textContent = 'Configuración de Supabase no disponible.'; return; }
  if (!email.trim() || !password) { loginStatus.textContent = 'Ingresa email y contraseña.'; return; }
  button.disabled = true;
  loginStatus.textContent = 'Entrando…';
  const { error } = await client.auth.signInWithPassword({ email: email.trim(), password });
  button.disabled = false;
  if (error) {
    loginStatus.textContent = 'Email o contraseña incorrectos.';
  } else {
    loginStatus.textContent = '';
    loginForm.reset();
  }
});

$('logout').addEventListener('click', () => client.auth.signOut());

if (client) {
  client.auth.onAuthStateChange((_event, session) => showSession(session));
  client.auth.getSession().then(({ data }) => showSession(data.session));
} else {
  loginView.hidden = false;
}
