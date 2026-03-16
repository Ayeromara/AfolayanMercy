import Image from "next/image";
import Card from "@/components/Card";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

const skills = {
  laboratory: [
    "Sample preparation and analysis",
    "Microscopy and staining",
    "Titration and volumetric analysis",
    "Quality control procedures"
  ],
  teaching: [
    "Lesson planning and curriculum delivery",
    "Student assessment and feedback",
    "Classroom management",
    "STEM engagement activities"
  ],
  tools: [
    "Microsoft Office Suite",
    "Google Workspace",
    "Laboratory safety protocols",
    "Virtual teaching tools"
  ]
};

export default function HomePage() {
  return (
    <main className="relative bg-hero-radial">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-subtle-grid bg-[size:120px_120px] opacity-50" />
      <header className="sticky top-0 z-40 w-full border-b border-ink/10 bg-white/85 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-6 py-4 text-sm">
          <div className="min-w-0 flex-1 font-[var(--font-display)] text-base font-semibold sm:text-lg">
            Temilade Afolayan Mercy
          </div>
          <div className="hidden gap-6 text-ink/70 md:flex">
            <a href="#home" className="transition hover:text-ink">
              Home
            </a>
            <a href="#about" className="transition hover:text-ink">
              About
            </a>
            <a href="#education" className="transition hover:text-ink">
              Education
            </a>
            <a href="#experience" className="transition hover:text-ink">
              Experience
            </a>
            <a href="#skills" className="transition hover:text-ink">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-ink">
              Contact
            </a>
          </div>
          <a
            href="/Temilade-Afolayan-Mercy-CV.pdf"
            className="whitespace-nowrap rounded-full border border-ink/40 px-3 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-ink transition hover:border-ink hover:bg-ink hover:text-white sm:px-4 sm:text-xs"
            download
          >
            Download CV
          </a>
        </nav>
      </header>

      <section id="home" className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-14 md:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="flex flex-col gap-8">
              <p className="text-xs uppercase tracking-[0.5em] text-ink/60">
                Biochemistry Graduate &amp; Science Teacher
              </p>
              <div className="space-y-4">
                <h1 className="font-[var(--font-display)] text-4xl font-semibold text-ink md:text-6xl lg:text-7xl">
                  Temilade Afolayan Mercy
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-ink/70 md:text-xl">
                  Passionate about science education and research, with a focus
                  on sparking curiosity and supporting student success through
                  clear, engaging learning experiences.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-ink px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-ink/90"
                >
                  Contact Me
                </a>
                <a
                  href="/Temilade-Afolayan-Mercy-CV.pdf"
                  className="rounded-full border border-ink/30 px-7 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-ink"
                  download
                >
                  Download CV
                </a>
              </div>
              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-ink/60">
                <span className="rounded-full border border-ink/10 bg-white/80 px-4 py-2">
                  Science Education
                </span>
                <span className="rounded-full border border-ink/10 bg-white/80 px-4 py-2">
                  Research Ready
                </span>
                <span className="rounded-full border border-ink/10 bg-white/80 px-4 py-2">
                  Student Growth
                </span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative flex justify-center">
              <div className="absolute -left-10 top-6 h-40 w-40 rounded-full bg-mint/40 blur-2xl" />
              <div className="absolute -bottom-8 right-4 h-28 w-28 rounded-full bg-ink/10 blur-2xl" />
              <div className="relative rounded-[40px] border border-ink/10 bg-white/90 p-5 shadow-card backdrop-blur">
                <Image
                  src="/mercy.jpeg"
                  alt="Temilade Afolayan Mercy"
                  width={420}
                  height={520}
                  className="h-[420px] w-[320px] rounded-[30px] object-cover md:h-[520px] md:w-[380px]"
                  priority
                />
                <div className="absolute -bottom-8 left-6 right-6 rounded-2xl border border-ink/10 bg-white/90 p-4 text-center text-xs uppercase tracking-[0.3em] text-ink/60 shadow-card">
                  Passionate about science education and research
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <Reveal>
            <Card className="bg-white">
              <p className="text-xs uppercase tracking-[0.3em] text-ink/60">
                Teaching Focus
              </p>
              <h3 className="mt-4 font-[var(--font-display)] text-2xl font-semibold text-ink">
                Evidence-based instruction
              </h3>
              <p className="mt-3 text-sm text-ink/70">
                Designing lesson plans that bring complex scientific concepts to
                life through clarity and practical application.
              </p>
            </Card>
          </Reveal>
          <Reveal delay={0.1}>
            <Card className="bg-white">
              <p className="text-xs uppercase tracking-[0.3em] text-ink/60">
                Research Interest
              </p>
              <h3 className="mt-4 font-[var(--font-display)] text-2xl font-semibold text-ink">
                Laboratory excellence
              </h3>
              <p className="mt-3 text-sm text-ink/70">
                Strong foundation in analytical techniques, quality control, and
                data accuracy.
              </p>
            </Card>
          </Reveal>
          <Reveal delay={0.2}>
            <Card className="bg-white">
              <p className="text-xs uppercase tracking-[0.3em] text-ink/60">
                Student Impact
              </p>
              <h3 className="mt-4 font-[var(--font-display)] text-2xl font-semibold text-ink">
                Inspiring curiosity
              </h3>
              <p className="mt-3 text-sm text-ink/70">
                Helping students build confidence and a lifelong appreciation
                for science.
              </p>
            </Card>
          </Reveal>
        </div>
      </section>

      <Section id="about" title="About" subtitle="Profile">
        <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr]">
          <Reveal>
            <Card className="bg-white">
              <p className="text-base leading-relaxed text-ink/70">
                I am a biochemistry graduate committed to advancing science
                education through engaging teaching strategies and
                evidence-based learning. My experience spans laboratory work,
                curriculum delivery and student mentorship, with a strong
                emphasis on practical application and critical thinking.
              </p>
            </Card>
          </Reveal>
          <Reveal delay={0.1}>
            <Card className="bg-white">
              <p className="text-sm uppercase tracking-[0.3em] text-ink/60">
                Tagline
              </p>
              <p className="mt-4 text-lg font-semibold text-ink">
                Passionate about science education and research
              </p>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section id="education" title="Education" subtitle="Academic Background">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <Card className="bg-white">
              <h3 className="font-[var(--font-display)] text-xl font-semibold text-ink">
                B.Sc. Biochemistry
              </h3>
              <p className="mt-2 text-sm text-ink/60">
                University Studies
              </p>
              <p className="mt-4 text-base text-ink/70">
                Focused on analytical chemistry, molecular biology, and applied
                laboratory techniques with a commitment to academic excellence.
              </p>
            </Card>
          </Reveal>
          {/* <Reveal delay={0.1}>
            <Card className="bg-white">
              <h3 className="font-[var(--font-display)] text-xl font-semibold text-ink">
                Science Education Training
              </h3>
              <p className="mt-2 text-sm text-ink/60">Professional Development</p>
              <p className="mt-4 text-base text-ink/70">
                Specialized in curriculum planning, student assessment, and
                innovative classroom delivery methods.
              </p>
            </Card>
          </Reveal> */}
        </div>
      </Section>

      <Section
        id="experience"
        title="Professional Experience"
        subtitle="Career Highlights"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <Card className="bg-white">
              <p className="text-sm uppercase tracking-[0.3em] text-ink/60">
                PZ Cussons
              </p>
              <h3 className="mt-3 font-[var(--font-display)] text-xl font-semibold text-ink">
                Internship
              </h3>
              <p className="mt-4 text-base text-ink/70">
                Supported laboratory research and quality control processes,
                collaborating with teams to ensure compliance and data accuracy.
              </p>
            </Card>
          </Reveal>
          <Reveal delay={0.1}>
            <Card className="bg-white">
              <p className="text-sm uppercase tracking-[0.3em] text-ink/60">
                Ramjet Schools
              </p>
              <h3 className="mt-3 font-[var(--font-display)] text-xl font-semibold text-ink">
                Science Teacher
              </h3>
              <p className="mt-4 text-base text-ink/70">
                Delivered engaging science lessons, guided practical sessions,
                and monitored student progress to build strong scientific
                foundations.
              </p>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section id="skills" title="Skills" subtitle="Core Competencies">
        <div className="grid gap-6 md:grid-cols-3">
          <Reveal>
            <Card className="bg-white">
              <h3 className="font-[var(--font-display)] text-xl font-semibold text-ink">
                Laboratory Skills
              </h3>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-ink/70">
                {skills.laboratory.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-mist px-4 py-2 transition hover:-translate-y-0.5 hover:bg-mint/60"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
          <Reveal delay={0.1}>
            <Card className="bg-white">
              <h3 className="font-[var(--font-display)] text-xl font-semibold text-ink">
                Teaching Skills
              </h3>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-ink/70">
                {skills.teaching.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-mist px-4 py-2 transition hover:-translate-y-0.5 hover:bg-mint/60"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
          <Reveal delay={0.2}>
            <Card className="bg-white">
              <h3 className="font-[var(--font-display)] text-xl font-semibold text-ink">
                Tools and Platforms
              </h3>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-ink/70">
                {skills.tools.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-mist px-4 py-2 transition hover:-translate-y-0.5 hover:bg-mint/60"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section id="contact" title="Contact" subtitle="Get In Touch">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <Card className="bg-white">
              <h3 className="font-[var(--font-display)] text-xl font-semibold text-ink">
                Let&apos;s Connect
              </h3>
              <p className="mt-4 text-base text-ink/70">
                I am open to teaching roles, research collaborations, and
                community education initiatives.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="mailto:afolayanmercy171@gmail.com"
                  className="rounded-full bg-ink px-5 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                >
                  Email Me
                </a>
                <a
                  href="/Temilade-Afolayan-Mercy-CV.pdf"
                  className="rounded-full border border-ink/30 px-5 py-2 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
                  download
                >
                  Download CV
                </a>
              </div>
            </Card>
          </Reveal>
          <Reveal delay={0.1}>
            <Card className="bg-mist">
              <ul className="flex flex-col gap-4 text-sm text-ink/70">
                
                <li>
                  <span className="block text-xs uppercase tracking-[0.3em] text-ink/60">
                    Email
                  </span>
                  <a 
                    href="mailto:afolayanmercy171@gmail.com"
                    className="hover:underline"
                  >
                    afolayanmercy171@gmail.com
                  </a>
                </li>

                <li>
                  <span className="block text-xs uppercase tracking-[0.3em] text-ink/60">
                    Phone
                  </span>
                  <a 
                    href="tel:+2348141235339"
                    className="hover:underline"
                  >
                    +234 814 123 5339
                  </a>
                </li>

                <li>
                  <span className="block text-xs uppercase tracking-[0.3em] text-ink/60">
                    LinkedIn
                  </span>
                  <a
                    href="https://www.linkedin.com/in/temilade-afolayan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    linkedin.com/in/temilade-afolayan
                  </a>
                </li>

                <li>
                  <span className="block text-xs uppercase tracking-[0.3em] text-ink/60">
                    Location
                  </span>
                  Lagos, Nigeria
                </li>

              </ul>
            </Card>
          </Reveal>
        </div>
      </Section>

      <footer className="border-t border-ink/10 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-ink/60 md:flex-row">
          <span>Temilade Afolayan Mercy</span>
          <span>Biochemistry Graduate &amp; Science Teacher</span>
        </div>
      </footer>
    </main>
  );
}
