export default function LogoStrip() {
  return (
    <section className="logo-strip">
      <div className="container">
        <p className="logo-strip-text">Join 4,000+ companies already growing</p>
        <ul className="logo-grid">
          <li className="client-logo" style={{ '--logo-color': '#525252' } as React.CSSProperties}>
            <svg viewBox="0 0 20 20" fill="none"><path d="M10 1L18 6L10 11L2 6L10 1Z" fill="currentColor"/><path d="M2 10L10 15L18 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><path d="M2 14L10 19L18 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity=".5"/></svg>
            <span>Layers</span>
          </li>
          <li className="client-logo" style={{ '--logo-color': '#16A34A' } as React.CSSProperties}>
            <svg viewBox="0 0 20 20" fill="none"><path d="M4 16L16 4M4 4L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            <span>Sisyphus</span>
          </li>
          <li className="client-logo" style={{ '--logo-color': '#9333EA' } as React.CSSProperties}>
            <svg viewBox="0 0 20 20" fill="none"><circle cx="7" cy="10" r="6" fill="currentColor" opacity=".55"/><circle cx="13" cy="10" r="6" fill="currentColor" opacity=".55"/></svg>
            <span>Circooles</span>
          </li>
          <li className="client-logo" style={{ '--logo-color': '#0284C7' } as React.CSSProperties}>
            <svg viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="7" height="7" rx="1.5" fill="currentColor"/><rect x="11" y="2" width="7" height="7" rx="1.5" fill="currentColor" opacity=".55"/><rect x="2" y="11" width="7" height="7" rx="1.5" fill="currentColor" opacity=".55"/><rect x="11" y="11" width="7" height="7" rx="1.5" fill="currentColor"/></svg>
            <span>Catalog</span>
          </li>
          <li className="client-logo" style={{ '--logo-color': '#DC2626' } as React.CSSProperties}>
            <svg viewBox="0 0 20 20" fill="none"><path d="M10 2L12.2 7.6L18 8.4L13.6 12.2L14.9 18L10 14.9L5.1 18L6.4 12.2L2 8.4L7.8 7.6L10 2Z" fill="currentColor"/></svg>
            <span>Quotient</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
