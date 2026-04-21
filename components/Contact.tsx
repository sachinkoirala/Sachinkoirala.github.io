"use client";

import { useState } from "react";
import { Copy, Check, Mail, MapPin } from "lucide-react";

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const rowStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0.875rem 1rem",
    borderRadius: 8,
    border: "1px solid var(--border)",
    backgroundColor: "var(--bg-subtle)",
    cursor: "pointer",
    textDecoration: "none",
    transition: "border-color 0.15s",
  };

  return (
    <section id="contact" style={{ padding: "3.25rem 0" }}>
      <div style={{ maxWidth: "720px", marginLeft: "auto", marginRight: "auto", paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
        <div style={{ fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--fg)", marginBottom: "1.5rem" }}>
          Contact
        </div>

        <p style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--fg)", marginBottom: "0.875rem" }}>
          Let's work together.
        </p>
        <p style={{ fontSize: "0.925rem", color: "var(--fg-muted)", lineHeight: 1.7, marginBottom: "2rem", maxWidth: 480 }}>
          Open to full-time roles, contracts, and remote opportunities. I'm always up for a chat about testing strategy too.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {/* Email */}
          <button
            onClick={() => copy("Sachinkoirala14@gmail.com", "email")}
            style={rowStyle}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <Mail size={15} style={{ color: "var(--fg-subtle)", flexShrink: 0 }} />
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "0.7rem", color: "var(--fg-subtle)", marginBottom: 2 }}>Email</div>
                <div style={{ fontSize: "0.875rem", color: "var(--fg)", fontWeight: 500 }}>Sachinkoirala14@gmail.com</div>
              </div>
            </div>
            {copied === "email" ? <Check size={14} style={{ color: "var(--accent)" }} /> : <Copy size={14} style={{ color: "var(--fg-subtle)" }} />}
          </button>

          {/* Phone */}
          <button
            onClick={() => copy("+977 9840588669", "phone")}
            style={rowStyle}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ color: "var(--fg-subtle)", fontSize: "0.875rem", flexShrink: 0 }}>📞</span>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "0.7rem", color: "var(--fg-subtle)", marginBottom: 2 }}>Phone</div>
                <div style={{ fontSize: "0.875rem", color: "var(--fg)", fontWeight: 500 }}>+977 9840588669</div>
              </div>
            </div>
            {copied === "phone" ? <Check size={14} style={{ color: "var(--accent)" }} /> : <Copy size={14} style={{ color: "var(--fg-subtle)" }} />}
          </button>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/sachin-koirala-a289621a3"
            target="_blank"
            rel="noopener noreferrer"
            style={rowStyle}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <LinkedinIcon />
              <div>
                <div style={{ fontSize: "0.7rem", color: "var(--fg-subtle)", marginBottom: 2 }}>LinkedIn</div>
                <div style={{ fontSize: "0.875rem", color: "var(--fg)", fontWeight: 500 }}>sachin-koirala-a289621a3</div>
              </div>
            </div>
            <span style={{ fontSize: "0.875rem", color: "var(--fg-subtle)" }}>↗</span>
          </a>

          {/* Location */}
          <div style={{ ...rowStyle, cursor: "default" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <MapPin size={15} style={{ color: "var(--fg-subtle)", flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: "0.7rem", color: "var(--fg-subtle)", marginBottom: 2 }}>Location</div>
                <div style={{ fontSize: "0.875rem", color: "var(--fg)", fontWeight: 500 }}>Kathmandu, Nepal 🇳🇵</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="divider" style={{ marginTop: "3rem", paddingTop: "1.5rem" }}>
          <p style={{ fontSize: "0.775rem", color: "var(--fg-subtle)", textAlign: "center" }}>
            © {new Date().getFullYear()} Sachin Koirala
          </p>
        </div>
      </div>
    </section>
  );
}
