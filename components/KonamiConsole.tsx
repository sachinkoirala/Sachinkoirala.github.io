"use client";

import { useState, useEffect, useRef } from "react";

const SEQUENCE = [
  "ArrowUp","ArrowUp","ArrowDown","ArrowDown",
  "ArrowLeft","ArrowRight","ArrowLeft","ArrowRight",
  "b","a",
];

type LogLine = { text: string; color?: string; delay: number };

const LOG: LogLine[] = [
  { text: "⚠  CHEAT CODE DETECTED",                                              color: "#f59e0b", delay: 0    },
  { text: "Initializing privileged debug session…",                               color: "#475569", delay: 400  },
  { text: "\u00A0",                                                                               delay: 650  },
  { text: "══════════ SYSTEM DIAGNOSTICS ══════════",                             color: "#a855f7", delay: 850  },
  { text: "Candidate      Sachin Koirala",                                                         delay: 1050 },
  { text: "Build          v5.2.1  (stable · no breaking changes)",                                 delay: 1220 },
  { text: "Uptime         5+ years · 0 critical bugs shipped to prod",                             delay: 1390 },
  { text: "Memory         Recalls every edge case. Ever.",                                          delay: 1560 },
  { text: "CPU            Runs on chai, deadlines & genuine curiosity",                             delay: 1730 },
  { text: "Location       Kathmandu, Nepal  🇳🇵",                                                  delay: 1900 },
  { text: "\u00A0",                                                                               delay: 2080 },
  { text: "══════════ TEST RESULTS ═════════════════",                            color: "#22c55e", delay: 2230 },
  { text: "  ✓  attitude         PASS   collaborative · low ego · high signal",  color: "#22c55e", delay: 2420 },
  { text: "  ✓  automation       PASS   Selenium + Cypress + Pytest",            color: "#22c55e", delay: 2610 },
  { text: "  ✓  communication    PASS   works well with humans (verified)",      color: "#22c55e", delay: 2800 },
  { text: "  ✓  coverage         PASS   100% on ETL suite  (not a typo)",       color: "#22c55e", delay: 2990 },
  { text: "  ✓  ownership        PASS   \"my PR, my tests, my responsibility\"", color: "#22c55e", delay: 3180 },
  { text: "  ✓  availability     PASS   open for opportunity right now",         color: "#22c55e", delay: 3370 },
  { text: "\u00A0",                                                                               delay: 3540 },
  { text: "══════════ SECRET LOG ═══════════════════",                            color: "#22d3ee", delay: 3700 },
  { text: "  Once found a prod bug by staring at logs for 6 hours.",             color: "#64748b", delay: 3900 },
  { text: "  Wrote 200 test cases over a weekend. On purpose. No regrets.",      color: "#64748b", delay: 4130 },
  { text: "  PRs reviewed: many. PRs approved without comment: zero.",           color: "#64748b", delay: 4360 },
  { text: "  Firmly believes 'it works on my machine' is not a test result.",   color: "#64748b", delay: 4590 },
  { text: "\u00A0",                                                                               delay: 4780 },
  { text: "  🐛  All 5 bugs accounted for. QA sign-off granted.",               color: "#f59e0b", delay: 4930 },
  { text: "\u00A0",                                                                               delay: 5120 },
  { text: "══════════════════════════════════════════",                           color: "#1e293b", delay: 5250 },
  { text: "  Contact:  sachinkoirala14@gmail.com",                               color: "#94a3b8", delay: 5380 },
  { text: "\u00A0",                                                                               delay: 5520 },
  { text: "  [ click anywhere or press any key to close ]",                      color: "#334155", delay: 5650 },
];

export default function KonamiConsole() {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState<Set<number>>(new Set());
  const buf = useRef<string[]>([]);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const close = () => setOpen(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (open) { close(); return; }
      buf.current = [...buf.current, e.key].slice(-SEQUENCE.length);
      if (buf.current.join(",") === SEQUENCE.join(",")) {
        buf.current = [];
        setOpen(true);
        setShown(new Set());
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    timers.current.forEach(clearTimeout);
    timers.current = [];
    LOG.forEach((_, i) => {
      const t = setTimeout(
        () => setShown((prev) => new Set([...prev, i])),
        LOG[i].delay
      );
      timers.current.push(t);
    });
    return () => timers.current.forEach(clearTimeout);
  }, [open]);

  if (!open) return null;

  return (
    <div
      onClick={close}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "rgba(0,0,0,0.90)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#09090b",
          border: "1px solid #1e293b",
          borderRadius: 14,
          padding: "1.75rem 2rem",
          maxWidth: 580,
          width: "100%",
          fontFamily: "monospace",
          fontSize: "0.77rem",
          lineHeight: 1.82,
          maxHeight: "85vh",
          overflowY: "auto",
          boxShadow:
            "0 0 0 1px #1e293b, 0 0 80px rgba(168,85,247,0.15), 0 0 200px rgba(34,211,238,0.05)",
        }}
      >
        {/* terminal title bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            marginBottom: "1.25rem",
            paddingBottom: "0.875rem",
            borderBottom: "1px solid #1e293b",
          }}
        >
          {(["#ef4444", "#f59e0b", "#22c55e"] as const).map((c) => (
            <div
              key={c}
              style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.7 }}
            />
          ))}
          <span style={{ marginLeft: 8, color: "#334155", fontSize: "0.68rem" }}>
            debug_console — root@sachin-portfolio
          </span>
        </div>

        {LOG.map((line, i) =>
          shown.has(i) ? (
            <div key={i} style={{ color: line.color ?? "#475569" }}>
              {line.text}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
