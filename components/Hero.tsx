"use client";

import { useEffect, useState, useCallback } from "react";
import { Mail } from "lucide-react";
import InteractiveTerminal from "./InteractiveTerminal";

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const roles = [
  "Quality Assurance Engineer",
  "E-Governance Practitioner",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [erasing, setErasing] = useState(false);
  const [hireState, setHireState] = useState<"idle" | "validating" | "pass">("idle");

  const handleHire = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (hireState !== "idle") return;
    e.preventDefault();
    setHireState("validating");
    setTimeout(() => setHireState("pass"), 1000);
    setTimeout(() => {
      setHireState("idle");
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    }, 2200);
  }, [hireState]);

  useEffect(() => {
    const current = roles[roleIndex % roles.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!erasing) {
      if (typed.length < current.length) {
        timeout = setTimeout(() => setTyped(current.slice(0, typed.length + 1)), 55);
      } else {
        timeout = setTimeout(() => setErasing(true), 2400);
      }
    } else {
      if (typed.length > 0) {
        timeout = setTimeout(() => setTyped(typed.slice(0, -1)), 25);
      } else {
        setErasing(false);
        setRoleIndex((i) => i + 1);
      }
    }
    return () => clearTimeout(timeout);
  }, [typed, erasing, roleIndex]);

  const s = {
    section: {
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
      justifyContent: "flex-start",
      paddingTop: 120,
      paddingBottom: 80,
    } as React.CSSProperties,
    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: "0.78rem",
      padding: "4px 12px",
      borderRadius: 999,
      border: "1px solid var(--accent)",
      color: "var(--accent)",
      marginBottom: "1.5rem",
    } as React.CSSProperties,
    dot: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      backgroundColor: "var(--accent)",
      animation: "pulse 2s ease-in-out infinite",
    } as React.CSSProperties,
    name: {
      fontSize: "clamp(2.5rem, 8vw, 4rem)",
      fontWeight: 700,
      letterSpacing: "-0.04em",
      lineHeight: 1.1,
      marginBottom: "1rem",
      color: "var(--fg)",
    } as React.CSSProperties,
    role: {
      fontSize: "1.05rem",
      color: "var(--fg-muted)",
      marginBottom: "1.25rem",
      minHeight: "1.6em",
    } as React.CSSProperties,
    bio: {
      fontSize: "0.95rem",
      color: "var(--fg-muted)",
      lineHeight: 1.7,
      maxWidth: 480,
      marginBottom: "2rem",
    } as React.CSSProperties,
    btnPrimary: {
      padding: "10px 22px",
      borderRadius: 8,
      backgroundColor: "var(--fg)",
      color: "var(--bg)",
      fontSize: "0.875rem",
      fontWeight: 600,
      textDecoration: "none",
      border: "1px solid var(--fg)",
      transition: "opacity 0.15s",
      cursor: "pointer",
    } as React.CSSProperties,
    btnSecondary: {
      padding: "10px 22px",
      borderRadius: 8,
      backgroundColor: "transparent",
      color: "var(--fg)",
      fontSize: "0.875rem",
      fontWeight: 500,
      textDecoration: "none",
      border: "1px solid var(--border)",
      transition: "border-color 0.15s",
      cursor: "pointer",
    } as React.CSSProperties,
    iconBtn: {
      width: 38,
      height: 38,
      borderRadius: 8,
      border: "1px solid var(--border)",
      backgroundColor: "transparent",
      color: "var(--fg-muted)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      transition: "border-color 0.15s, color 0.15s",
      cursor: "pointer",
    } as React.CSSProperties,
  };

  return (
    <section style={s.section}>
      <div style={{ maxWidth: "720px", marginLeft: "auto", marginRight: "auto", paddingLeft: "1.5rem", paddingRight: "1.5rem", textAlign: "center" }}>
        {/* Name */}
        <h1 style={s.name} className="glitch" data-text="Sachin Koirala">Sachin Koirala</h1>

        {/* Animated role */}
        <p style={s.role}>
          {typed}<span className="cursor-blink" style={{ color: "var(--fg-subtle)" }}>|</span>
        </p>

        {/* Bio */}
        <p style={s.bio}>
          QA engineer with 5+ years building automation frameworks, ETL pipelines, and CI/CD-integrated test suites.
          ISTQB certified. Pursuing Masters in E-Governance.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", flexWrap: "wrap", marginBottom: "1.75rem" }}>
          <a
            href="#contact"
            onClick={handleHire}
            style={{
              ...s.btnPrimary,
              minWidth: 140,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              transition: "opacity 0.15s, background-color 0.2s",
              backgroundColor: hireState === "pass" ? "#16a34a" : "var(--fg)",
            }}
          >
            {hireState === "idle" && "Get in touch"}
            {hireState === "validating" && (
              <>
                <span style={{ display: "inline-block", animation: "spin 0.7s linear infinite", fontSize: "0.8rem" }}>⟳</span>
                Validating…
              </>
            )}
            {hireState === "pass" && "✓ PASS — let's go"}
          </a>
          <a href="#experience" style={s.btnSecondary}>View work</a>
        </div>

        {/* Social icons */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.625rem" }}>
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/sachin-koirala-a289621a3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              padding: "8px 16px",
              borderRadius: 8,
              border: "1px solid rgba(10,102,194,0.45)",
              backgroundColor: "rgba(10,102,194,0.06)",
              color: "#0a66c2",
              textDecoration: "none",
              fontSize: "0.82rem",
              fontWeight: 500,
              transition: "background-color 0.15s, border-color 0.15s",
              cursor: "pointer",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = "rgba(10,102,194,0.14)";
              e.currentTarget.style.borderColor = "rgba(10,102,194,0.7)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = "rgba(10,102,194,0.06)";
              e.currentTarget.style.borderColor = "rgba(10,102,194,0.45)";
            }}
          >
            <LinkedinIcon />
            LinkedIn
          </a>

          {/* Email */}
          <a
            href="mailto:Sachinkoirala14@gmail.com"
            aria-label="Email"
            style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              padding: "8px 16px",
              borderRadius: 8,
              border: "1px solid rgba(34,197,94,0.45)",
              backgroundColor: "rgba(34,197,94,0.06)",
              color: "#16a34a",
              textDecoration: "none",
              fontSize: "0.82rem",
              fontWeight: 500,
              transition: "background-color 0.15s, border-color 0.15s",
              cursor: "pointer",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = "rgba(34,197,94,0.14)";
              e.currentTarget.style.borderColor = "rgba(34,197,94,0.7)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = "rgba(34,197,94,0.06)";
              e.currentTarget.style.borderColor = "rgba(34,197,94,0.45)";
            }}
          >
            <Mail size={15} />
            Email
          </a>
        </div>

        {/* Interactive terminal */}
        <p style={{ fontSize: "0.72rem", color: "var(--fg-subtle)", fontFamily: "monospace", marginTop: "2.5rem", marginBottom: "-1.5rem", letterSpacing: "0.04em" }}>
          // interactive — try <span style={{ color: "var(--accent)" }}>help</span>
        </p>
        <InteractiveTerminal />
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
