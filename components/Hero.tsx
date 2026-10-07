export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <a className="badge" href="#">
          <span className="badge-dot" aria-hidden="true"></span>
          <span className="badge-text"><strong>SaaS Talent</strong> — Now hiring analytics engineers</span>
          <svg className="badge-arrow" viewBox="0 0 12 10" fill="none"><path d="M1 5H11M11 5L7 1M11 5L7 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
    
        <h1 className="hero-heading">Know why your users stay or leave</h1>
    
        <p className="hero-supporting">Self-serve product analytics: track sign-ups, engagement and retention in one dashboard, no data team needed. Trusted by over 4,000 startups.</p>
    
        <div className="cta-group">
          <a href="#" className="btn btn-secondary">
            <span className="btn-icon-circle" aria-hidden="true">
              <svg viewBox="0 0 16 16" fill="none"><path d="M5.5 3.5L11.5 8L5.5 12.5V3.5Z" fill="currentColor"/></svg>
            </span>
            Demo
          </a>
          <a href="#waitlist" className="btn btn-primary">Sign up</a>
        </div>
    
        <div className="hero-mockup-wrap">
          <div className="hero-mockup" role="img" aria-label="Vista previa del dashboard de analítica">
            <div className="dashboard">
              <aside className="dashboard-sidebar">
                <div className="dash-logo">
                  <span className="brand-mark brand-mark--sm" aria-hidden="true"></span>
                  <span className="dash-logo-text">Untitled</span>
                </div>
                <div className="dash-search">
                  <svg viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="5.25" stroke="currentColor" strokeWidth="1.3"/><path d="M14 14L11 11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
                  <span>Search</span>
                </div>
                <nav className="dash-nav">
                  <span className="dash-nav-item dash-nav-item--active">
                    <svg viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="5" height="5" rx="1" fill="currentColor"/><rect x="9" y="2" width="5" height="5" rx="1" fill="currentColor" opacity=".5"/><rect x="2" y="9" width="5" height="5" rx="1" fill="currentColor" opacity=".5"/><rect x="9" y="9" width="5" height="5" rx="1" fill="currentColor"/></svg>
                    Dashboard
                  </span>
                  <span className="dash-nav-item">
                    <svg viewBox="0 0 16 16" fill="none"><path d="M2 4h12M2 8h12M2 12h8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
                    Analytics
                  </span>
                  <span className="dash-nav-item">
                    <svg viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.3"/></svg>
                    Reports
                  </span>
                  <span className="dash-nav-item">
                    <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3"/></svg>
                    Customers
                  </span>
                  <span className="dash-nav-item">
                    <svg viewBox="0 0 16 16" fill="none"><path d="M8 2L8 14M2 8L14 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
                    Settings
                  </span>
                </nav>
              </aside>
    
              <div className="dashboard-main">
                <div className="dash-topbar">
                  <h2 className="dash-title">My dashboard</h2>
                  <div className="dash-controls">
                    <span className="dash-chip">Last 30 days</span>
                    <span className="dash-chip dash-chip--solid">+ Add widget</span>
                  </div>
                </div>
    
                <div className="kpi-row">
                  <div className="kpi-card">
                    <span className="kpi-label">Total revenue</span>
                    <span className="kpi-value">$48,890</span>
                    <span className="kpi-delta kpi-delta--up">↑ 12.4%</span>
                  </div>
                  <div className="kpi-card">
                    <span className="kpi-label">Active users</span>
                    <span className="kpi-value">3,208</span>
                    <span className="kpi-delta kpi-delta--up">↑ 8.1%</span>
                  </div>
                  <div className="kpi-card">
                    <span className="kpi-label">Conversion rate</span>
                    <span className="kpi-value">4.6%</span>
                    <span className="kpi-delta kpi-delta--down">↓ 1.2%</span>
                  </div>
                </div>
    
                <div className="chart-card">
                  <div className="chart-card-head">
                    <span className="chart-metric-label">Sessions over time</span>
                    <span className="chart-metric-value">128,904</span>
                  </div>
                  <svg className="chart-svg" viewBox="0 0 620 160" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#A855F7" stopOpacity="0.18"/>
                        <stop offset="100%" stopColor="#A855F7" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    <path d="M0,120 C40,110 60,60 100,70 C140,80 160,40 200,45 C240,50 260,90 300,85 C340,80 360,30 400,25 C440,20 460,60 500,55 C540,50 580,20 620,15 L620,160 L0,160 Z" fill="url(#chartFill)"/>
                    <path d="M0,120 C40,110 60,60 100,70 C140,80 160,40 200,45 C240,50 260,90 300,85 C340,80 360,30 400,25 C440,20 460,60 500,55 C540,50 580,20 620,15" fill="none" stroke="#A855F7" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                  <div className="chart-axis">
                    <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span>
                  </div>
                </div>
    
                <div className="table-card">
                  <div className="table-row table-row--head">
                    <span>Customer</span><span>Plan</span><span>Status</span><span>Amount</span>
                  </div>
                  <div className="table-row">
                    <span className="table-user"><i className="table-avatar"></i>Olivia Rhye</span><span>Enterprise</span><span className="status-pill">Active</span><span>$980</span>
                  </div>
                  <div className="table-row">
                    <span className="table-user"><i className="table-avatar"></i>Phoenix Baker</span><span>Growth</span><span className="status-pill">Active</span><span>$420</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
