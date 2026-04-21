"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const experiences = [
  {
    id: "uba",
    title: "Software Developer in Test",
    company: "UBA Solutions (Monotype Imaging)",
    period: "Feb 2023 – Present",
    current: true,
    tags: ["Python", "Pandas", "Jenkins", "AWS", "Postman", "TestRail"],
    bullets: [
      "Built ETL testing framework in Python & Pandas — cut testing time by 90%, achieved 100% test coverage",
      "Designed CI/CD-integrated test suites on Jenkins + Octopus (AWS)",
      "Functional, regression & integration testing for enterprise web app releases",
      "REST API testing across multiple web service endpoints via Postman",
    ],
  },
  {
    id: "tekkon",
    title: "QA Engineer",
    company: "Tekkon Technologies",
    period: "May 2022 – Feb 2023",
    current: false,
    tags: ["Cypress", "Postman", "MySQL", "JIRA", "iOS", "Android"],
    bullets: [
      "End-to-end validation of financial workflows for iOU — loan creation, repayment, balance tracking",
      "Stripe payment integration testing: charges, refunds, reconciliation",
      "Built Cypress automation framework — reduced regression testing time by 60%",
      "MySQL cross-validation of transaction records against UI values",
    ],
  },
  {
    id: "ithl",
    title: "Junior QA Engineer",
    company: "IT Himalaya (Procit IV)",
    period: "Jun 2021 – May 2022",
    current: false,
    tags: ["Selenium", "Java", "Rest Assured", "JMeter", "Jenkins"],
    bullets: [
      "Built Selenium Java automation framework from scratch — cut testing time by 50%",
      "REST API testing with Postman and Rest Assured; load testing with JMeter",
      "Scheduled Jenkins CI jobs for automated test execution",
    ],
  },
  {
    id: "ithla",
    title: "QA Trainee",
    company: "IT Himalaya (Procit IV)",
    period: "Dec 2020 – May 2021",
    current: false,
    tags: ["Selenium", "Java", "OOP", "JMeter"],
    bullets: [
      "Automated test cases with Selenium (Java) following OOP principles",
      "REST API and load testing; test case documentation",
    ],
  },
];

export default function Experience() {
  const [open, setOpen] = useState<string>("uba");

  return (
    <section id="experience" style={{ padding: "3.25rem 0" }}>
      <div style={{ maxWidth: "720px", marginLeft: "auto", marginRight: "auto", paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
        <div style={{ fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--fg)", marginBottom: "1.5rem" }}>
          Experience
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {experiences.map((exp) => (
            <div
              key={exp.id}
              style={{
                border: "1px solid var(--border)",
                borderRadius: 10,
                overflow: "hidden",
                backgroundColor: "var(--bg-subtle)",
                transition: "border-color 0.15s",
              }}
            >
              {/* Header */}
              <button
                onClick={() => setOpen(open === exp.id ? "" : exp.id)}
                style={{
                  width: "100%",
                  padding: "1rem 1.25rem",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "1rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap", marginBottom: 4 }}>
                    <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--fg)" }}>{exp.title}</span>
                    {exp.current && (
                      <span style={{ fontSize: "0.68rem", padding: "1px 8px", borderRadius: 999, border: "1px solid var(--accent)", color: "var(--accent)", fontWeight: 500 }}>
                        Current
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: "0.825rem", color: "var(--fg-muted)" }}>{exp.company} · {exp.period}</div>
                </div>
                <ChevronDown
                  size={16}
                  style={{
                    color: "var(--fg-subtle)",
                    flexShrink: 0,
                    marginTop: 4,
                    transform: open === exp.id ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}
                />
              </button>

              {/* Expanded */}
              {open === exp.id && (
                <div style={{ padding: "0 1.25rem 1.25rem", borderTop: "1px solid var(--border)" }}>
                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", padding: "0.875rem 0 1rem" }}>
                    {exp.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  {/* Bullets */}
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {exp.bullets.map((b, i) => (
                      <li key={i} style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start" }}>
                        <span style={{ color: "var(--fg-subtle)", marginTop: 4, fontSize: "0.7rem", flexShrink: 0 }}>—</span>
                        <span style={{ fontSize: "0.875rem", color: "var(--fg-muted)", lineHeight: 1.65 }}>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
