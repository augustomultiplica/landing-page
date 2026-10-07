"use client";

import { useEffect, useState, type FormEvent } from "react";
import type { Session } from "@supabase/supabase-js";
import { getBrowserSupabase } from "@/lib/supabase-browser";
import { signupsToCsv } from "@/lib/csv";

type Signup = { email: string; created_at: string };
type Feedback = { message: string; email: string | null; created_at: string };

const fmtDate = (iso: string) => new Date(iso).toLocaleString("es");

// Admin: login con Supabase Auth. La seguridad real la da RLS (SELECT solo para authenticated).
export default function AdminPage() {
  const client = getBrowserSupabase();
  const [ready, setReady] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const [signups, setSignups] = useState<Signup[]>([]);
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [panelStatus, setPanelStatus] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);

  useEffect(() => {
    if (!client) {
      setReady(true);
      return;
    }
    const { data } = client.auth.onAuthStateChange((_event, s) => setSession(s));
    client.auth.getSession().then(({ data: d }) => {
      setSession(d.session);
      setReady(true);
    });
    return () => data.subscription.unsubscribe();
  }, [client]);

  const userId = session?.user.id;
  useEffect(() => {
    if (!client || !userId) {
      setSignups([]);
      setFeedback([]);
      setPanelStatus("");
      return;
    }
    let cancelled = false;
    setPanelStatus("");
    Promise.all([
      client.from("signups").select("email, created_at").order("created_at", { ascending: false }),
      client.from("feedback").select("message, email, created_at").order("created_at", { ascending: false }),
    ]).then(([s, f]) => {
      if (cancelled) return;
      if (s.error || f.error) return setPanelStatus("No pudimos cargar los datos.");
      setSignups(s.data as Signup[]);
      setFeedback(f.data as Feedback[]);
    });
    return () => {
      cancelled = true;
    };
  }, [client, userId]);

  async function onLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const { email, password } = Object.fromEntries(new FormData(form)) as Record<string, string>;
    if (!client) return setLoginStatus("Configuración de Supabase no disponible.");
    if (!email.trim() || !password) return setLoginStatus("Ingresa email y contraseña.");
    setLoggingIn(true);
    setLoginStatus("Entrando…");
    const { error } = await client.auth.signInWithPassword({ email: email.trim(), password });
    setLoggingIn(false);
    if (error) {
      setLoginStatus("Email o contraseña incorrectos.");
    } else {
      setLoginStatus("");
      form.reset();
    }
  }

  function downloadCsv() {
    const blob = new Blob([signupsToCsv(signups)], { type: "text/csv;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `signups-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(a.href);
  }

  return (
    <main className="admin">
      <div className="container container--narrow" style={{ maxWidth: 960 }}>
        <h1>Panel de administración</h1>

        {ready && !session && (
          <section className="admin-card admin-login">
            <form className="form" noValidate onSubmit={onLogin}>
              <label className="field">
                <span className="field-label">Email</span>
                <input className="input" type="email" name="email" autoComplete="username" required />
              </label>
              <label className="field">
                <span className="field-label">Contraseña</span>
                <input className="input" type="password" name="password" autoComplete="current-password" required />
              </label>
              <button type="submit" className="btn btn-primary" disabled={loggingIn}>Entrar</button>
              <p className={`form-status${loginStatus ? " is-error" : ""}`} role="status" aria-live="polite">{loginStatus}</p>
            </form>
          </section>
        )}

        {session && (
          <div>
            <div className="admin-bar">
              <p className="field-label" style={{ margin: 0 }}>{session.user.email}</p>
              <button type="button" className="btn btn-secondary" onClick={() => client?.auth.signOut()}>Cerrar sesión</button>
            </div>

            <section className="admin-card">
              <div className="admin-bar">
                <h2>Signups <span className="field-label">{signups.length ? `(${signups.length})` : ""}</span></h2>
                <button type="button" className="btn btn-primary" onClick={downloadCsv}>Descargar CSV</button>
              </div>
              <p className="form-status is-error" role="status">{panelStatus}</p>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Email</th><th>Fecha</th></tr></thead>
                  <tbody>
                    {signups.map((r, i) => (
                      <tr key={i}><td>{r.email}</td><td>{fmtDate(r.created_at)}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {signups.length === 0 && <p className="empty">Aún no hay registros.</p>}
            </section>

            <section className="admin-card">
              <div className="admin-bar">
                <h2>Feedback <span className="field-label">{feedback.length ? `(${feedback.length})` : ""}</span></h2>
              </div>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>Fecha</th><th>Email</th><th>Comentario</th></tr></thead>
                  <tbody>
                    {feedback.map((r, i) => (
                      <tr key={i}><td>{fmtDate(r.created_at)}</td><td>{r.email || "—"}</td><td className="msg">{r.message}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {feedback.length === 0 && <p className="empty">Aún no hay comentarios.</p>}
            </section>
          </div>
        )}
      </div>
    </main>
  );
}
