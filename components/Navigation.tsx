"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills",     href: "#skills" },
  { label: "Education",  href: "#education" },
  { label: "Contact",    href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    backgroundColor: scrolled ? "var(--bg)" : "transparent",
    borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
    transition: "background-color 0.2s, border-color 0.2s",
  };

  const linkStyle: React.CSSProperties = {
    fontSize: "0.875rem",
    color: "var(--fg-muted)",
    textDecoration: "none",
    padding: "4px 0",
    transition: "color 0.15s",
  };

  return (
    <>
      <nav style={navStyle}>
        <div style={{ maxWidth: "720px", marginLeft: "auto", marginRight: "auto", paddingLeft: "1.5rem", paddingRight: "1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 56 }}>
          {/* Logo */}
          <a href="#" style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--fg)", textDecoration: "none", letterSpacing: "-0.02em" }}>
            SK
          </a>

          {/* Desktop links */}
          <div style={{ display: "flex", gap: "1.5rem" }} className="hidden-mobile">
            {links.map((l) => (
              <a key={l.href} href={l.href} style={linkStyle}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-muted)")}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <a
              href="mailto:Sachinkoirala14@gmail.com"
              style={{
              fontSize: "0.9rem",
              fontWeight: 500,
              padding: "5px 14px",
              borderRadius: 999,
              border: "1px solid var(--accent)",
              color: "var(--accent)",
              textDecoration: "none",
              transition: "background-color 0.15s",
            }}
            className="hidden-mobile"
          >
            Open for Opportunity
            </a>
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "var(--fg-muted)", display: "none", padding: 4 }}
              className="show-mobile"
              aria-label="Menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--bg)" }}>
            <div style={{ maxWidth: "720px", marginLeft: "auto", marginRight: "auto", paddingLeft: "1.5rem", paddingRight: "1.5rem", paddingTop: "0.75rem", paddingBottom: "0.75rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{ ...linkStyle, padding: "10px 0", borderBottom: "1px solid var(--border)" }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="mailto:Sachinkoirala14@gmail.com"
                style={{ ...linkStyle, paddingTop: 12, color: "var(--accent)", fontWeight: 500 }}
              >
                Open for Opportunity
              </a>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 640px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
      `}</style>
    </>
  );
}
