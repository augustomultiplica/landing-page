import ApiForm from "./ApiForm";

export default function Feedback() {
  return (
    <section className="feedback" id="feedback">
      <div className="container container--narrow">
        <div className="section-intro">
          <h2 className="section-heading">Cuéntanos qué piensas</h2>
          <p className="section-description">Tus comentarios nos ayudan a construir un mejor producto.</p>
        </div>

        <ApiForm endpoint="/api/feedback" className="form" submitLabel="Enviar comentario">
          <label className="field">
            <span className="field-label">Email (opcional)</span>
            <input className="input" type="email" name="email" maxLength={254} autoComplete="email" />
          </label>
          <label className="field">
            <span className="field-label">Comentario</span>
            <textarea className="input textarea" name="message" rows={5} maxLength={2000} required></textarea>
          </label>
        </ApiForm>
      </div>
    </section>
  );
}
