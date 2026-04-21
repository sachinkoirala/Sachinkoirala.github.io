"use client";

import { useEffect, useState, useCallback } from "react";

const BUGS = [
  {
    id: 1,
    top: "18%",
    left: "88%",
    revealAt: 0.02,
    hideAt: 0.28,
    msg: "BUG-001 · Off-by-one error in sprint counter.\nStatus: Won't Fix 🫡",
  },
  {
    id: 2,
    top: "64%",
    left: "4%",
    revealAt: 0.18,
    hideAt: 0.44,
    msg: "BUG-002 · Excessive mate consumption detected.\nStatus: By Design ☕",
  },
  {
    id: 3,
    top: "22%",
    left: "91%",
    revealAt: 0.40,
    hideAt: 0.63,
    msg: "BUG-003 · Test passes locally, fails in prod.\nStatus: Cannot Reproduce 🤷",
  },
  {
    id: 4,
    top: "70%",
    left: "5%",
    revealAt: 0.60,
    hideAt: 0.82,
    msg: "BUG-004 · sudo make-me-a-senior-engineer.\nStatus: In Progress ⬆️",
  },
  {
    id: 5,
    top: "28%",
    left: "88%",
    revealAt: 0.79,
    hideAt: 1.01,
    msg: "BUG-005 · 100% test coverage achieved.\nStatus: Deemed Impossible by Mgmt ✅",
  },
];

const TOTAL = BUGS.length;

export default function BugHunt() {
  const [pct, setPct] = useState(0);
  const [caught, setCaught] = useState<number[]>([]);
  const [toast, setToast] = useState<{ id: number; msg: string } | null>(null);
  const [allCaught, setAllCaught] = useState(false);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setPct(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const catchBug = useCallback(
    (bug: (typeof BUGS)[number]) => {
      if (caught.includes(bug.id)) return;
      const next = [...caught, bug.id];
      setCaught(next);
      setToast({ id: bug.id, msg: bug.msg });
      setTimeout(() => setToast(null), 3200);
      if (next.length === TOTAL) {
        setTimeout(() => setAllCaught(true), 3400);
      }
    },
    [caught]
  );

  const visible = BUGS.filter(
    (b) => pct >= b.revealAt && pct < b.hideAt && !caught.includes(b.id)
  );

  return (
    <>
      {/* Bugs */}
      {visible.map((bug) => (
        <button
          key={bug.id}
          onClick={() => catchBug(bug)}
          aria-label="Found a bug — click to catch it!"
          title="🐛 Click me!"
          style={{
            position: "fixed",
            top: bug.top,
            left: bug.left,
            fontSize: "1.05rem",
            lineHeight: 1,
            background: "none",
            border: "none",
            cursor: "pointer",
            zIndex: 45,
            animation: "bugwiggle 2.2s ease-in-out infinite",
            opacity: 0.55,
            padding: 4,
            borderRadius: 6,
            transition: "opacity 0.3s, transform 0.15s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.transform = "scale(1.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "0.55";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          🐛
        </button>
      ))}

      {/* Bug catch toast */}
      {toast && (
        <div
          style={{
            position: "fixed",
            bottom: "5rem",
            left: "50%",
            zIndex: 100,
            background: "var(--bg-subtle)",
            border: "1px solid var(--border)",
            borderRadius: 10,
            padding: "0.8rem 1.1rem",
            fontFamily: "monospace",
            fontSize: "0.76rem",
            color: "var(--fg)",
            textAlign: "center",
            whiteSpace: "pre-line",
            lineHeight: 1.65,
            boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
            animation: "fadeInUp 0.25s ease",
            maxWidth: 290,
          }}
        >
          <span style={{ fontSize: "1rem" }}>🐛</span> Bug #{toast.id} caught!
          {"\n"}
          <span style={{ color: "var(--fg-muted)" }}>{toast.msg}</span>
        </div>
      )}

      {/* Counter pill */}
      {caught.length > 0 && !allCaught && (
        <div
          style={{
            position: "fixed",
            bottom: "1.5rem",
            left: "1.5rem",
            zIndex: 50,
            fontFamily: "monospace",
            fontSize: "0.68rem",
            color: "var(--fg-subtle)",
            display: "flex",
            alignItems: "center",
            gap: 5,
            background: "var(--bg-subtle)",
            border: "1px solid var(--border)",
            borderRadius: 999,
            padding: "4px 10px",
            animation: "fadeInLeft 0.2s ease",
          }}
        >
          🐛 {caught.length}/{TOTAL} bugs caught
        </div>
      )}

      {/* All bugs caught! */}
      {allCaught && (
        <div
          style={{
            position: "fixed",
            bottom: "1.5rem",
            left: "50%",
            zIndex: 100,
            background: "var(--accent)",
            color: "#fff",
            borderRadius: 10,
            padding: "0.9rem 1.5rem",
            fontFamily: "monospace",
            fontSize: "0.8rem",
            textAlign: "center",
            lineHeight: 1.65,
            boxShadow: "0 4px 32px rgba(0,0,0,0.25)",
            animation: "fadeInUp 0.3s ease",
            maxWidth: 320,
          }}
        >
          🎉 All {TOTAL} bugs resolved!{"\n"}
          <span style={{ opacity: 0.88, fontSize: "0.73rem" }}>
            You think like a QA engineer. Sachin would be proud.
          </span>
        </div>
      )}
    </>
  );
}
