export default function Showcase() {
  return (
    <section className="showcase">
      <div className="container">
        <div className="section-intro">
          <span className="eyebrow">Features</span>
          <h2 className="section-heading">Cutting-edge features for advanced analytics</h2>
          <p className="section-description">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        </div>
    
        <div className="showcase-visual">
          <div className="showcase-desktop">
            <div className="dashboard dashboard--compact">
              <div className="dashboard-main">
                <div className="dash-topbar">
                  <h2 className="dash-title">My dashboard</h2>
                  <span className="dash-chip dash-chip--solid">Export</span>
                </div>
                <div className="kpi-row">
                  <div className="kpi-card"><span className="kpi-label">Revenue</span><span className="kpi-value">$48,890</span><span className="kpi-delta kpi-delta--up">↑ 12.4%</span></div>
                  <div className="kpi-card"><span className="kpi-label">Sessions</span><span className="kpi-value">128,904</span><span className="kpi-delta kpi-delta--up">↑ 8.1%</span></div>
                  <div className="kpi-card"><span className="kpi-label">Bounce rate</span><span className="kpi-value">24.6%</span><span className="kpi-delta kpi-delta--down">↓ 1.2%</span></div>
                </div>
                <div className="chart-card">
                  <svg className="chart-svg" viewBox="0 0 620 140" preserveAspectRatio="none">
                    <path d="M0,110 C60,90 120,50 200,60 C280,70 340,30 420,25 C480,20 560,45 620,15" fill="none" stroke="#A855F7" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="table-card">
                  <div className="table-row table-row--head"><span>Customer</span><span>Plan</span><span>Status</span><span>Amount</span></div>
                  <div className="table-row"><span className="table-user"><i className="table-avatar"></i>Lana Steiner</span><span>Enterprise</span><span className="status-pill">Active</span><span>$980</span></div>
                  <div className="table-row"><span className="table-user"><i className="table-avatar"></i>Demi Wilkinson</span><span>Growth</span><span className="status-pill">Active</span><span>$420</span></div>
                </div>
              </div>
            </div>
          </div>
    
          <div className="showcase-phone">
            <div className="phone-frame">
              <div className="phone-screen">
                <div className="phone-header">My dashboard</div>
                <div className="phone-kpi"><span>Revenue</span><strong>$48,890</strong></div>
                <svg className="chart-svg" viewBox="0 0 200 70" preserveAspectRatio="none">
                  <path d="M0,55 C20,45 40,20 70,28 C100,36 120,15 150,12 C170,10 185,25 200,8" fill="none" stroke="#A855F7" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
                <div className="phone-list">
                  <span></span><span></span><span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        <div className="showcase-features">
          <div className="showcase-feature">
            <span className="feature-icon feature-icon--left">
              <svg viewBox="0 0 24 24" fill="none"><path d="M3 8L10.9 13.3C11.56 13.74 12.44 13.74 13.1 13.3L21 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6"/></svg>
            </span>
            <h3 className="feature-title">Share team inboxes</h3>
            <p className="feature-description">Whether you have 10 customers or 10,000, our shared team inboxes keep everyone in sync.</p>
            <a href="#" className="feature-link">Learn more <span aria-hidden="true">→</span></a>
          </div>
          <div className="showcase-feature">
            <span className="feature-icon feature-icon--left">
              <svg viewBox="0 0 24 24" fill="none"><path d="M13 2L4 14H11L10 22L20 9H13L13 2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
            </span>
            <h3 className="feature-title">Deliver instant answers</h3>
            <p className="feature-description">Automate your customer support with instant answers powered by real-time data.</p>
            <a href="#" className="feature-link">Learn more <span aria-hidden="true">→</span></a>
          </div>
          <div className="showcase-feature">
            <span className="feature-icon feature-icon--left">
              <svg viewBox="0 0 24 24" fill="none"><path d="M4 20V10M12 20V4M20 20V14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
            </span>
            <h3 className="feature-title">Manage your team with reports</h3>
            <p className="feature-description">Keep track of your team&apos;s productivity and engagement with detailed reports.</p>
            <a href="#" className="feature-link">Learn more <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
      <div className="container"><hr className="divider" /></div>
    </section>
  );
}
