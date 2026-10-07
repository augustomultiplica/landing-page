import ApiForm from "./ApiForm";

export default function Waitlist() {
  return (
    <section className="final-cta" id="waitlist">
      <div className="container final-cta-inner">
        <h2 className="section-heading">Únete a la waitlist</h2>
        <p className="section-description">Sé de los primeros en probar Untitled. Te avisaremos cuando esté listo.</p>
        <ApiForm endpoint="/api/waitlist" className="form form--inline" submitLabel="Unirme">
          <input className="input" type="email" name="email" placeholder="tu@email.com" maxLength={254} autoComplete="email" aria-label="Email" required />
        </ApiForm>
      </div>
    </section>
  );
}
