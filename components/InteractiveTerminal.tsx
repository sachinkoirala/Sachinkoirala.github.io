"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";

type Line = { text: string; kind: "cmd" | "out" | "err" | "dim" };

const COMMANDS: Record<string, string[]> = {
  help: [
    "  whoami      → who is sachin?",
    "  skills      → tech stack overview",
    "  experience  → career timeline",
    "  contact     → let's talk",
    "  hire        → run candidate evaluation",
    "  ls          → list portfolio sections",
    "  clear       → clear the terminal",
  ],
  whoami: [
    "sachin koirala · QA engineer · kathmandu, nepal 🇳🇵",
    "5+ years breaking things professionally.",
    "istqb certified. msc e-governance (in progress).",
    "philosophy: shift left. fail fast. ship quality.",
    "superpower: finding bugs in code that 'has no bugs'.",
  ],
  skills: [
    "automation:   selenium · cypress · pytest · postman",
    "languages:    python · java · javascript · sql",
    "databases:    mysql · mongodb · elasticsearch",
    "ci/cd:        jenkins · octopus · aws",
    "management:   jira · testrail · git · svn",
    "domains:      api · etl · mobile · performance",
  ],
  experience: [
    "2023–now    uba solutions (monotype)  → software developer in test",
    "2022–2023   tekkon technologies       → qa engineer",
    "2021–2022   it himalaya (procit iv)   → junior qa engineer",
    "2020–2021   it himalaya (procit iv)   → qa trainee",
    "────────────────────────────────────────────────────",
    "etl framework: -90% test time · 100% coverage · 0 excuses.",
  ],
  contact: [
    "email:     sachinkoirala14@gmail.com",
    "linkedin:  linkedin.com/in/sachin-koirala-a289621a3",
    "phone:     +977 9840588669",
    "location:  kathmandu, nepal 🇳🇵",
    "",
    "→ scroll to #contact or just email. i don't bite.",
  ],
  hire: [
    "running candidate_evaluation.test.ts…",
    "",
    "  ✓  experience       5+ years          PASS",
    "  ✓  certification    ISTQB FL          PASS",
    "  ✓  automation       selenium+cypress  PASS",
    "  ✓  etl_mastery      90% time cut      PASS",
    "  ✓  attitude         collaborative     PASS",
    "  ✓  availability     open now          PASS",
    "",
    "  verdict: hire immediately.",
    "  contact: sachinkoirala14@gmail.com",
  ],
  ls: [
    "about/   experience/   skills/   education/   contact/",
    "",
    "hint: try  cat experience.log",
  ],
  "cat experience.log": [
    "[ experience.log — last modified: present ]",
    "",
    "90% faster ETL pipeline. 100% test coverage.",
    "60% regression time saved via Cypress.",
    "50% test time reduction via Selenium from scratch.",
    "0 production surprises on my watch.",
  ],
};

const BOOT: Line[] = [
  { text: "sachin@portfolio:~ $ ./start.sh", kind: "dim" },
  { text: "✓ all systems ready.", kind: "out" },
  { text: "  type 'help' to explore.", kind: "out" },
];

export default function InteractiveTerminal() {
  const [lines, setLines] = useState<Line[]>(BOOT);
  const [input, setInput] = useState("");
  const [hist, setHist] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    const next: Line[] = [{ text: `$ ${raw}`, kind: "cmd" }];

    if (cmd === "clear") {
      setLines([]);
      setInput("");
      return;
    }

    const out = COMMANDS[cmd];
    if (out) {
      out.forEach((t) => next.push({ text: t, kind: "out" }));
    } else if (cmd) {
      next.push({ text: `command not found: ${cmd}`, kind: "err" });
      next.push({ text: `  try 'help' to see available commands.`, kind: "dim" });
    }

    setLines((p) => [...p, ...next]);
    if (cmd) setHist((p) => [cmd, ...p].slice(0, 30));
    setHistIdx(-1);
    setInput("");
  };

  const onKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      run(input);
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const i = Math.min(histIdx + 1, hist.length - 1);
      setHistIdx(i);
      setInput(hist[i] ?? "");
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const i = Math.max(histIdx - 1, -1);
      setHistIdx(i);
      setInput(i < 0 ? "" : hist[i]);
    }
  };

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      style={{
        margin: "2.75rem auto 0",
        maxWidth: 540,
        background: "var(--bg-subtle)",
        border: "1px solid var(--border)",
        borderRadius: 12,
        overflow: "hidden",
        cursor: "text",
        textAlign: "left",
        boxShadow: "0 0 0 1px rgba(34,197,94,0.15), 0 4px 24px rgba(0,0,0,0.12)",
      }}
    >
      {/* Title bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          padding: "8px 12px",
          background: "var(--bg)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        {(["#ef4444", "#f59e0b", "#22c55e"] as const).map((c) => (
          <div
            key={c}
            style={{ width: 9, height: 9, borderRadius: "50%", background: c, opacity: 0.7 }}
          />
        ))}
        <span
          style={{
            marginLeft: 8,
            fontFamily: "monospace",
            fontSize: "0.68rem",
            color: "var(--fg-subtle)",
          }}
        >
          sachin@portfolio:~
        </span>
        <span
          style={{
            marginLeft: "auto",
            fontFamily: "monospace",
            fontSize: "0.62rem",
            color: "var(--fg-subtle)",
            opacity: 0.6,
          }}
        >
          interactive terminal
        </span>
      </div>

      {/* Output */}
      <div
        style={{
          padding: "10px 14px 4px",
          fontFamily: "monospace",
          fontSize: "0.75rem",
          lineHeight: 1.75,
          maxHeight: 190,
          overflowY: "auto",
        }}
      >
        {lines.map((l, i) => (
          <div
            key={i}
            style={{
              color:
                l.kind === "cmd"
                  ? "var(--accent)"
                  : l.kind === "err"
                  ? "#ef4444"
                  : l.kind === "dim"
                  ? "var(--fg-subtle)"
                  : "var(--fg-muted)",
            }}
          >
            {l.text || "\u00A0"}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "4px 14px 10px",
          fontFamily: "monospace",
          fontSize: "0.75rem",
          borderTop: "1px solid var(--border)",
          marginTop: 4,
        }}
      >
        <span style={{ color: "var(--accent)", flexShrink: 0 }}>$</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKey}
          placeholder="type a command…"
          autoComplete="off"
          spellCheck={false}
          style={{
            flex: 1,
            background: "none",
            border: "none",
            outline: "none",
            color: "var(--fg)",
            fontFamily: "monospace",
            fontSize: "0.75rem",
          }}
        />
      </div>
    </div>
  );
}
