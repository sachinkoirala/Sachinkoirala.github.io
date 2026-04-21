"use client";

import { useEffect, useState } from "react";

const CHECKS = [
  { at: 0,    label: "initializing  portfolio.spec.ts …" },
  { at: 0.08, label: "✓ PASS  hero         → rendered" },
  { at: 0.22, label: "✓ PASS  about        → validated" },
  { at: 0.42, label: "✓ PASS  experience   → 4 roles found" },
  { at: 0.60, label: "✓ PASS  skills       → 24 skills loaded" },
  { at: 0.76, label: "✓ PASS  education    → certs verified" },
  { at: 0.90, label: "✓ PASS  contact      → all systems go" },
  { at: 0.98, label: "✓ ALL TESTS PASSED  (4 suites, 0 failures)" },
];

export default function ScrollTestRunner() {
  const [pct, setPct] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      setPct(p);
      setShow(p > 0.02);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const current = [...CHECKS].reverse().find((c) => pct >= c.at) ?? CHECKS[0];
  const done = pct >= 0.97;

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 60, pointerEvents: "none" }}>
      {/* Progress bar */}
      <div style={{ height: 2, background: "var(--border)" }}>
        <div
          style={{
            height: "100%",
            width: `${pct * 100}%`,
            background: done
              ? "var(--accent)"
              : "linear-gradient(90deg, var(--accent) 0%, #22d3ee 100%)",
            transition: "width 0.15s linear",
            boxShadow: done ? "none" : "0 0 8px rgba(34,211,238,0.5)",
          }}
        />
      </div>

      {/* Floating label */}
      <div
        style={{
          position: "absolute",
          top: 8,
          right: "1.5rem",
          fontFamily: "monospace",
          fontSize: "0.62rem",
          color: done ? "var(--accent)" : "var(--fg-subtle)",
          whiteSpace: "nowrap",
          opacity: show ? 1 : 0,
          transition: "opacity 0.4s",
          letterSpacing: "0.02em",
        }}
      >
        {current.label}
      </div>
    </div>
  );
}
