"use client";

const sec: React.CSSProperties = { padding: "3.25rem 0" };
const label: React.CSSProperties = { fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase" as const, color: "var(--fg)", marginBottom: "1.5rem" };
const h2: React.CSSProperties = { fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "1.25rem", color: "var(--fg)" };
const p: React.CSSProperties = { fontSize: "0.95rem", color: "var(--fg-muted)", lineHeight: 1.75, marginBottom: "1rem" };

export default function About() {
  return (
    <section id="about" style={sec}>
      <div style={{ maxWidth: "720px", marginLeft: "auto", marginRight: "auto", paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
        <div style={label}>About</div>

        <h2 style={h2}>I get unreasonably excited when a test catches a bug nobody else saw coming.</h2>

        <p style={p}>
          Born and raised in Jhapa Nepal, I'm a QA engineer and automation builder who treats quality as an engineering discipline — not a checkbox at the end of a sprint. Over 5+ years I've worked across fintech, SaaS, e-commerce, and enterprise software, and I'm currently a <strong style={{ color: "var(--fg)", fontWeight: 600 }}>Software Developer in Test at UBA Solutions </strong>. My job, in short, is to know where a system will break before it does.
        </p>
        <p style={p}>
          I don't just click buttons. I build frameworks — Selenium, Cypress, Python/Pandas pipelines, CI/CD-integrated suites on AWS — the kind developers actually trust and maintain. I've cut ETL testing time by <strong style={{ color: "var(--fg)" }}>90%</strong>, saved <strong style={{ color: "var(--fg)" }}>60%</strong> of regression cycles, and turned a manual nightmare into a 100%-covered automated pipeline. The metric I'm most proud of? Zero production surprises on my watch.
        </p>
        <p style={{ ...p, marginBottom: "1.5rem" }}>
          Outside the test suite, I ask a different kind of question: how do digital systems serve people better, not just move faster? That curiosity led me to pursue a Masters in E-Governance — exploring the intersection of technology, policy, and public infrastructure. It's a long game, but one I find genuinely fascinating.
        </p>

        {/* Masters callout */}
        <div style={{
          padding: "1rem 1.25rem",
          borderRadius: 10,
          border: "1px solid var(--border)",
          backgroundColor: "var(--bg-subtle)",
          display: "flex",
          gap: "0.875rem",
          alignItems: "flex-start",
        }}>
          <span style={{ fontSize: "1.2rem", marginTop: 2 }}>🎓</span>
          <div>
            <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--fg)", marginBottom: 4 }}>
              Masters in E-Governance · Nepal Open University <span style={{ fontWeight: 400, color: "var(--fg-muted)", fontSize: "0.8rem" }}>(2024 – Present)</span>
            </p>
            <p style={{ fontSize: "0.825rem", color: "var(--fg-muted)", lineHeight: 1.6 }}>
              Exploring digital governance, tech policy, and how technology transforms public services and civic infrastructure.
            </p>
          </div>
        </div>

        {/* Quick facts */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginTop: "1.5rem" }}>
          {[
            ["ISTQB Certified", "CTFL-2023-008-NSTQB"],
            ["Based in", "Kathmandu, Nepal 🇳🇵"],
            ["Availability", "Open for opportunity"],
            ["Philosophy", "Shift left, fail fast"],
          ].map(([k, v]) => (
            <div key={k} style={{ padding: "0.875rem 1rem", borderRadius: 8, border: "1px solid var(--border)", backgroundColor: "var(--bg-subtle)" }}>
              <div style={{ fontSize: "0.7rem", color: "var(--fg-subtle)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>{k}</div>
              <div style={{ fontSize: "0.85rem", color: "var(--fg)", fontWeight: 500 }}>{v}</div>
            </div>
          ))}
        </div>

        {/* Defect Report — humorous easter egg */}
        <div style={{
          marginTop: "2rem",
          padding: "1rem 1.25rem",
          borderRadius: 10,
          border: "1px solid var(--border)",
          backgroundColor: "var(--bg-subtle)",
          fontFamily: "monospace",
        }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "0.875rem", gap: 8 }}>
            <span style={{ fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-subtle)", fontWeight: 600 }}>
              📋 DEFECT REPORT
            </span>
            <span style={{ marginLeft: "auto", fontSize: "0.68rem", color: "var(--fg-subtle)" }}>sachin_koirala v5.2.1</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
            {([
              ["BUG-001", "LOW",    "Writes test cases faster than devs write code",               "By Design"],
              ["BUG-002", "LOW",    "Cannot stop finding bugs in 'already reviewed' PRs",           "Won't Fix"],
              ["BUG-003", "MEDIUM", "Keeps adding edge cases that 'nobody will ever hit'",          "Feature Request"],
              ["BUG-004", "HIGH",   "Insufficient hours in the day to test everything",             "Known Limitation"],
            ] as [string, string, string, string][]).map(([id, pri, desc, status]) => (
              <div key={id} style={{ display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap" }}>
                <span style={{ fontSize: "0.7rem", color: "var(--fg-subtle)", minWidth: 68 }}>{id}</span>
                <span style={{
                  fontSize: "0.62rem",
                  padding: "1px 7px",
                  borderRadius: 4,
                  border: "1px solid var(--border)",
                  color: pri === "HIGH" ? "#ef4444" : pri === "MEDIUM" ? "#f59e0b" : "var(--fg-subtle)",
                  minWidth: 56,
                  textAlign: "center" as const,
                  flexShrink: 0,
                }}>{pri}</span>
                <span style={{ flex: 1, fontSize: "0.78rem", color: "var(--fg-muted)", minWidth: 120 }}>{desc}</span>
                <span style={{ fontSize: "0.68rem", color: "var(--accent)", flexShrink: 0 }}>{status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
