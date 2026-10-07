"use client";

import { useState } from "react";

const ITEMS = [
  { q: "Is there a free trial available?", a: "Yes, you can try us for free for 30 days. If you want, we’ll provide you a free personalized onboarding call to get you up and running as soon as possible." },
  { q: "Can I change my plan later?", a: "Of course. You can upgrade or downgrade your plan at any time from your account settings, and changes are prorated automatically." },
  { q: "What is your cancellation policy?", a: "You can cancel your plan at any time with no penalties. Your access remains active until the end of your current billing cycle." },
  { q: "Can other info be added to an invoice?", a: "Yes, you can add your company name, tax ID and billing address to every invoice from your billing settings page." },
  { q: "How does billing work?", a: "Plans are billed monthly or annually in advance and are non-refundable. We accept all major credit cards and PayPal." },
  { q: "How do I change my account email?", a: "You can update your account email at any time from your profile settings. We’ll send a confirmation link to verify the new address." },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="faq" id="faq">
      <div className="container container--narrow">
        <div className="section-intro">
          <h2 className="section-heading">Frequently asked questions</h2>
          <p className="section-description">Everything you need to know about the product and billing.</p>
        </div>

        <div className="accordion">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className={`accordion-item${isOpen ? " is-open" : ""}`}>
                <button
                  className="accordion-trigger"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className="accordion-icon" aria-hidden="true">
                    <svg viewBox="0 0 16 16" fill="none"><path d="M8 3.5V12.5M3.5 8H12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
                  </span>
                </button>
                <div className="accordion-panel">
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
