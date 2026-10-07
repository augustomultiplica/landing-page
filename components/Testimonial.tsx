export default function Testimonial() {
  return (
    <section className="testimonial">
      <div className="container testimonial-inner">
        <div className="testimonial-logo">
          <svg viewBox="0 0 20 20" fill="none"><path d="M4 16L16 4M4 4L16 16" stroke="#16A34A" strokeWidth="2" strokeLinecap="round"/></svg>
          <span>Sisyphus</span>
        </div>
    
        <blockquote className="testimonial-quote">
          “We’ve been using Untitled to kick start every new project and can’t imagine working without it.”
        </blockquote>
    
        <div className="testimonial-author">
          <span className="avatar avatar--md" aria-hidden="true">
            <svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#F3E8FF"/><circle cx="20" cy="16" r="6.5" fill="#C084FC"/><path d="M7 34C7 26.8 12.8 21 20 21C27.2 21 33 26.8 33 34" fill="#C084FC"/></svg>
          </span>
          <span className="testimonial-name">Candice Wu</span>
          <span className="testimonial-role">Product Manager, Sisyphus</span>
        </div>
      </div>
    </section>
  );
}
