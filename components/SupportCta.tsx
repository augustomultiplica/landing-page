export default function SupportCta() {
  return (
    <section className="support-cta">
      <div className="container">
        <div className="support-card">
          <div className="avatar-stack" aria-hidden="true">
            <span className="avatar avatar--sm"><svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#FEE2E2"/><circle cx="16" cy="13" r="5" fill="#FCA5A5"/><path d="M6 27C6 21.4772 10.4772 17 16 17C21.5228 17 26 21.4772 26 27" fill="#FCA5A5"/></svg></span>
            <span className="avatar avatar--sm"><svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#DBEAFE"/><circle cx="16" cy="13" r="5" fill="#93C5FD"/><path d="M6 27C6 21.4772 10.4772 17 16 17C21.5228 17 26 21.4772 26 27" fill="#93C5FD"/></svg></span>
            <span className="avatar avatar--sm"><svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#DCFCE7"/><circle cx="16" cy="13" r="5" fill="#86EFAC"/><path d="M6 27C6 21.4772 10.4772 17 16 17C21.5228 17 26 21.4772 26 27" fill="#86EFAC"/></svg></span>
          </div>
          <h2 className="support-heading">Still have questions?</h2>
          <p className="support-description">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
          <a href="#" className="btn btn-primary">Get in touch</a>
        </div>
      </div>
    </section>
  );
}
