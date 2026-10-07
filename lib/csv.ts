export function csvCell(value: unknown): string {
  let s = String(value ?? "");
  if (/^[=+\-@\t\r]/.test(s)) s = `'${s}`; // evita inyección de fórmulas en Excel
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

export function signupsToCsv(rows: { email: string; created_at: string }[]): string {
  const lines = ["email,created_at", ...rows.map((r) => `${csvCell(r.email)},${csvCell(r.created_at)}`)];
  return "\uFEFF" + lines.join("\r\n") + "\r\n";
}
