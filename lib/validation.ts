export const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export const MESSAGES = {
  invalidEmail: "Ingresa un email válido.",
  invalidFeedbackEmail: "El email no es válido.",
  emptyMessage: "Escribe un comentario.",
  waitlistOk: "¡Listo! Te avisaremos pronto.",
  waitlistDuplicate: "Ya estás en la lista.",
  feedbackOk: "¡Gracias por tu comentario!",
  failed: "No pudimos enviarlo. Inténtalo de nuevo.",
};

// Devuelve el texto recortado, o null si queda vacío o no es string.
export function clean(value: unknown): string | null {
  return typeof value === "string" ? value.trim() || null : null;
}
