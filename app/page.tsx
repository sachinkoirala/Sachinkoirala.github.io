import Navigation        from "@/components/Navigation";
import Hero              from "@/components/Hero";
import About             from "@/components/About";
import Experience        from "@/components/Experience";
import Skills            from "@/components/Skills";
import Education         from "@/components/Education";
import Contact           from "@/components/Contact";
import ScrollTestRunner  from "@/components/ScrollTestRunner";
import BugHunt           from "@/components/BugHunt";
import KonamiConsole     from "@/components/KonamiConsole";

export default function Home() {
  return (
    <main>
      <ScrollTestRunner />
      <BugHunt />
      <KonamiConsole />
      <Navigation />
      <Hero />

      {/* Thin separator between every section */}
      <div style={{ borderTop: "1px solid var(--border)" }} />
      <About />
      <div style={{ borderTop: "1px solid var(--border)" }} />
      <Experience />
      <div style={{ borderTop: "1px solid var(--border)" }} />
      <Skills />
      <div style={{ borderTop: "1px solid var(--border)" }} />
      <Education />
      <div style={{ borderTop: "1px solid var(--border)" }} />
      <Contact />
    </main>
  );
}
