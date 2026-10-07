"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { EMAIL_RE, MESSAGES, clean } from "@/lib/validation";

type Props = {
  endpoint: "/api/waitlist" | "/api/feedback";
  className: string;
  submitLabel: string;
  children: ReactNode;
};

// Envía a una ruta de servidor propia; el navegador ya no escribe en Supabase.
export default function ApiForm({ endpoint, className, submitLabel, children }: Props) {
  const [status, setStatus] = useState<{ text: string; isError: boolean }>({ text: "", isError: false });
  const [sending, setSending] = useState(false);
  const isFeedback = endpoint === "/api/feedback";

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    if (data.website) return; // honeypot

    const email = clean(data.email);
    const message = clean(data.message);
    if (!isFeedback && !EMAIL_RE.test(email ?? "")) return setStatus({ text: MESSAGES.invalidEmail, isError: true });
    if (isFeedback) {
      if (!message) return setStatus({ text: MESSAGES.emptyMessage, isError: true });
      if (email && !EMAIL_RE.test(email)) return setStatus({ text: MESSAGES.invalidFeedbackEmail, isError: true });
    }

    setSending(true);
    setStatus({ text: "Enviando…", isError: false });
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(isFeedback ? { email, message } : { email }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok) {
        form.reset();
        setStatus({ text: json.message, isError: false });
      } else if (res.status === 409) {
        setStatus({ text: json.message, isError: false });
      } else {
        throw new Error("request failed");
      }
    } catch {
      setStatus({ text: MESSAGES.failed, isError: true });
    } finally {
      setSending(false);
    }
  }

  return (
    <form className={className} noValidate onSubmit={onSubmit}>
      {children}
      <input className="hp" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button type="submit" className="btn btn-primary" disabled={sending}>{submitLabel}</button>
      <p className={`form-status${status.isError ? " is-error" : ""}`} role="status" aria-live="polite">{status.text}</p>
    </form>
  );
}
