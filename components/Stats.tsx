export default function Stats() {
  return (
    <section className="stats">
      <div className="container"><hr className="divider" /></div>
      <div className="container stats-inner">
        <div className="stats-copy">
          <span className="eyebrow">Launch faster</span>
          <h2 className="section-heading section-heading--left">Build something great</h2>
          <p className="section-description section-description--left">We’ve done all the heavy lifting so you don’t have to — get all the data you need to launch and grow your business faster.</p>
    
          <div className="stats-grid">
            <div className="stat">
              <span className="stat-number">4,000+</span>
              <span className="stat-label">Global customers</span>
              <span className="stat-description">Trusted by startups and enterprises worldwide.</span>
            </div>
            <div className="stat">
              <span className="stat-number">600%</span>
              <span className="stat-label">Return on investment</span>
              <span className="stat-description">Average ROI reported by our customers.</span>
            </div>
            <div className="stat">
              <span className="stat-number">10k</span>
              <span className="stat-label">Global downloads</span>
              <span className="stat-description">Across web and mobile platforms.</span>
            </div>
            <div className="stat">
              <span className="stat-number">200+</span>
              <span className="stat-label">5-star reviews</span>
              <span className="stat-description">From real customers on review platforms.</span>
            </div>
          </div>
        </div>
    
        <div className="stats-photo" role="img" aria-label="Oficina moderna con grandes ventanas y luz natural">
          <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#EFF6FF"/>
                <stop offset="100%" stopColor="#DBEAFE"/>
              </linearGradient>
              <linearGradient id="floorGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E9D5FF"/>
                <stop offset="100%" stopColor="#D8B4FE"/>
              </linearGradient>
            </defs>
            <rect width="400" height="300" fill="url(#skyGrad)"/>
            <rect y="190" width="400" height="110" fill="url(#floorGrad)" opacity=".35"/>
            <g stroke="#FFFFFF" strokeWidth="6">
              <line x1="70" y1="0" x2="70" y2="300"/>
              <line x1="150" y1="0" x2="150" y2="300"/>
              <line x1="230" y1="0" x2="230" y2="300"/>
              <line x1="310" y1="0" x2="310" y2="300"/>
            </g>
            <g stroke="#FFFFFF" strokeWidth="6">
              <line x1="0" y1="80" x2="400" y2="80"/>
              <line x1="0" y1="190" x2="400" y2="190"/>
            </g>
            <circle cx="330" cy="45" r="26" fill="#FDE68A" opacity=".8"/>
            <rect x="30" y="200" width="60" height="90" rx="4" fill="#7E22CE" opacity=".55"/>
            <rect x="180" y="230" width="90" height="60" rx="4" fill="#9333EA" opacity=".35"/>
            <rect x="300" y="210" width="70" height="80" rx="4" fill="#6B21A8" opacity=".45"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
