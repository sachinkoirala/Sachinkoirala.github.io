"use client";

import { useState } from "react";

const groups = [
  {
    label: "Automation & Frameworks",
    icon: "⚙️",
    accent: "#8b5cf6",
    tagBg: "rgba(139,92,246,0.08)",
    tagBorder: "rgba(139,92,246,0.22)",
    skills: ["Selenium", "Cypress", "Pytest", "Postman", "Rest Assured", "JMeter"],
  },
  {
    label: "Languages & Data",
    icon: "💻",
    accent: "#3b82f6",
    tagBg: "rgba(59,130,246,0.08)",
    tagBorder: "rgba(59,130,246,0.22)",
    skills: ["Python", "Java", "JavaScript", "SQL", "Pandas", "MongoDB"],
  },
  {
    label: "Testing Domains",
    icon: "🔬",
    accent: "#22c55e",
    tagBg: "rgba(34,197,94,0.08)",
    tagBorder: "rgba(34,197,94,0.22)",
    skills: ["Functional", "API (REST/SOAP)", "ETL Validation", "Regression", "Performance", "Mobile (iOS/Android)"],
  },
  {
    label: "Tools & DevOps",
    icon: "🛠️",
    accent: "#f59e0b",
    tagBg: "rgba(245,158,11,0.08)",
    tagBorder: "rgba(245,158,11,0.22)",
    skills: ["JIRA", "TestRail", "Jenkins", "Git", "AWS", "Octopus Deploy"],
  },
];

export default function Skills() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="skills" style={{ padding: "3.25rem 0" }}>
      <div style={{ maxWidth: "720px", marginLeft: "auto", marginRight: "auto", paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
        <div style={{ fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--fg)", marginBottom: "1.5rem" }}>
          Skills
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem" }}>
          {groups.map((g) => (
            <div
              key={g.label}
              style={{
                padding: "1.1rem 1.25rem",
                borderRadius: 12,
                border: `1px solid var(--border)`,
                backgroundColor: "var(--bg-subtle)",
                borderLeft: `3px solid ${g.accent}`,
                transition: "box-shadow 0.2s, border-color 0.2s",
                boxShadow: hovered === g.label ? `0 0 0 1px ${g.tagBorder}, 0 4px 20px rgba(0,0,0,0.08)` : "none",
              }}
              onMouseEnter={() => setHovered(g.label)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Category header */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.875rem" }}>
                <span style={{ fontSize: "0.95rem", lineHeight: 1 }}>{g.icon}</span>
                <p style={{ fontSize: "0.78rem", color: g.accent, fontWeight: 700, letterSpacing: "0.03em" }}>
                  {g.label}
                </p>
              </div>

              {/* Skill tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                {g.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontSize: "0.775rem",
                      padding: "3px 10px",
                      borderRadius: 999,
                      backgroundColor: g.tagBg,
                      border: `1px solid ${g.tagBorder}`,
                      color: g.accent,
                      fontWeight: 500,
                      lineHeight: 1.6,
                      whiteSpace: "nowrap" as const,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
