// Mobile nav toggle
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.getElementById('mobile-nav');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('is-open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// FAQ accordion (single-open)
const accordion = document.querySelector('[data-accordion]');

if (accordion) {
  const items = Array.from(accordion.querySelectorAll('[data-accordion-item]'));

  items.forEach((item) => {
    const trigger = item.querySelector('.accordion-trigger');

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      items.forEach((other) => {
        other.classList.remove('is-open');
        other.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// Forms -> Supabase (supabase-js por CDN). Solo INSERT; RLS bloquea lectura anónima.
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const FORM_MESSAGES = {
  signups: { ok: '¡Listo! Te avisaremos pronto.', duplicate: 'Ya estás en la lista.' },
  feedback: { ok: '¡Gracias por tu comentario!' },
};

const { url: SUPABASE_URL, key: SUPABASE_KEY } = window.SUPABASE_CONFIG || {};
const supabaseClient = window.supabase && SUPABASE_URL && SUPABASE_KEY
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
  : null;

document.querySelectorAll('form[data-supabase-table]').forEach((form) => {
  const table = form.dataset.supabaseTable;
  const status = form.querySelector('.form-status');
  const button = form.querySelector('button[type="submit"]');
  const setStatus = (text, isError) => {
    status.textContent = text;
    status.classList.toggle('is-error', Boolean(isError));
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    if (data.website) return; // honeypot

    const payload = {};
    ['email', 'message'].forEach((field) => {
      if (field in data) payload[field] = data[field].trim() || null;
    });

    if (table === 'signups' && !EMAIL_RE.test(payload.email || '')) {
      return setStatus('Ingresa un email válido.', true);
    }
    if (table === 'feedback') {
      if (!payload.message) return setStatus('Escribe un comentario.', true);
      if (payload.email && !EMAIL_RE.test(payload.email)) return setStatus('El email no es válido.', true);
    }

    button.disabled = true;
    setStatus('Enviando…');
    try {
      if (!supabaseClient) throw new Error('config');
      const { error } = await supabaseClient.from(table).insert(payload);
      if (!error) {
        form.reset();
        setStatus(FORM_MESSAGES[table].ok);
      } else if (error.code === '23505') {
        setStatus(FORM_MESSAGES[table].duplicate || 'Ya fue registrado.');
      } else {
        throw error;
      }
    } catch {
      setStatus('No pudimos enviarlo. Inténtalo de nuevo.', true);
    } finally {
      button.disabled = false;
    }
  });
});
