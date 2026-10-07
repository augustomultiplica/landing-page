"use client";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#" className="brand" aria-label="Untitled UI — inicio">
          <span className="brand-mark" aria-hidden="true"></span>
          <span className="brand-name">Untitled UI</span>
        </a>
    
        <nav className="main-nav" aria-label="Navegación principal">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link nav-link--chevron">Products <svg className="chevron" viewBox="0 0 12 8" fill="none"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
          <a href="#" className="nav-link nav-link--chevron">Resources <svg className="chevron" viewBox="0 0 12 8" fill="none"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
          <a href="#" className="nav-link">Pricing</a>
        </nav>
    
        <div className="header-right">
          <button className="hamburger" type="button" aria-label="Abrir menú" aria-expanded={isOpen} aria-controls="mobile-nav" onClick={() => setIsOpen((open) => !open)}>
            <span></span><span></span><span></span>
          </button>
          <span className="avatar avatar--sm" aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#E5E5E5"/><circle cx="16" cy="13" r="5" fill="#A3A3A3"/><path d="M6 27C6 21.4772 10.4772 17 16 17C21.5228 17 26 21.4772 26 27" fill="#A3A3A3"/></svg>
          </span>
        </div>
      </div>
    
      <nav id="mobile-nav" className={`mobile-nav${isOpen ? ' is-open' : ''}`} aria-label="Navegación móvil">
        <a href="#" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Products</a>
        <a href="#" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Resources</a>
        <a href="#" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Pricing</a>
      </nav>
    </header>
  );
}
