"use client";

const entries = [
  {
    degree: "Master of Science — E-Governance",
    school: "Nepal Open University",
    location: "Man-Bhawan, Lalitpur",
    period: "2024 – Present",
    status: "In Progress",
    featured: true,
    note: "Digital governance, technology policy, and public sector digital transformation.",
  },
  {
    degree: "BSc. Computer Science & IT",
    school: "Nepalaya College (T.U Affiliated)",
    location: "Kalanki, Kathmandu",
    period: "2016 – 2021",
    status: "Completed",
    featured: false,
    note: "Data structures, algorithms, databases, software engineering, networking.",
  },
];

const certifications = [
  {
    name: "ISTQB® Foundation Level",
    issuer: "ISTQB · NSTQB",
    date: "Jul 2023",
    id: "CTFL-2023-008-NSTQB",
  },
];

export default function Education() {
  return (
    <section id="education" style={{ padding: "3.25rem 0" }}>
      <div style={{ maxWidth: "720px", marginLeft: "auto", marginRight: "auto", paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
        <div style={{ fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--fg)", marginBottom: "1.5rem" }}>
          Education & Certifications
        </div>

        {/* Education */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.5rem" }}>
          {entries.map((e) => (
            <div
              key={e.degree}
              style={{
                padding: "1.125rem 1.25rem",
                borderRadius: 10,
                border: `1px solid ${e.featured ? "var(--fg-subtle)" : "var(--border)"}`,
                backgroundColor: "var(--bg-subtle)",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.75rem", flexWrap: "wrap", marginBottom: 6 }}>
                <div>
                  <p style={{ fontSize: "0.925rem", fontWeight: 600, color: "var(--fg)", marginBottom: 2 }}>{e.degree}</p>
                  <p style={{ fontSize: "0.825rem", color: "var(--fg-muted)" }}>{e.school} · {e.location}</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4, flexShrink: 0 }}>
                  <span style={{ fontSize: "0.75rem", color: "var(--fg-subtle)" }}>{e.period}</span>
                  <span style={{
                    fontSize: "0.68rem",
                    padding: "1px 8px",
                    borderRadius: 999,
                    border: "1px solid var(--border)",
                    color: e.featured ? "var(--accent)" : "var(--fg-subtle)",
                    fontWeight: 500,
                    borderColor: e.featured ? "var(--accent)" : "var(--border)",
                  }}>
                    {e.status}
                  </span>
                </div>
              </div>
              <p style={{ fontSize: "0.825rem", color: "var(--fg-subtle)", lineHeight: 1.6 }}>{e.note}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider" style={{ marginBottom: "2rem" }} />

        {/* Certifications */}
        <p style={{ fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--fg)", marginBottom: "1rem" }}>
          Certifications
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {certifications.map((c) => (
            <div
              key={c.name}
              style={{
                padding: "1rem 1.25rem",
                borderRadius: 10,
                border: "1px solid var(--border)",
                backgroundColor: "var(--bg-subtle)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "0.5rem",
              }}
            >
              <div>
                <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--fg)", marginBottom: 2 }}>{c.name}</p>
                <p style={{ fontSize: "0.8rem", color: "var(--fg-muted)" }}>{c.issuer}</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <p style={{ fontSize: "0.775rem", color: "var(--fg-subtle)" }}>{c.date}</p>
                <p style={{ fontSize: "0.725rem", color: "var(--fg-subtle)", fontFamily: "monospace" }}>{c.id}</p>
              </div>
            </div>
          ))}
          {/* More coming */}
          <div style={{
            padding: "0.875rem 1.25rem",
            borderRadius: 10,
            border: "1px dashed var(--border)",
            textAlign: "center",
          }}>
            <p style={{ fontSize: "0.8rem", color: "var(--fg-subtle)" }}>More certifications in progress...</p>
          </div>
        </div>
      </div>
    </section>
  );
}
