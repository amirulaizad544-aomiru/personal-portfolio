import { Section } from "./Section";

const lookingFor = [
  "Clearer software development responsibilities",
  "Stronger alignment with software engineering",
  "Room to grow technically",
  "Exposure to meaningful development work",
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A developer who ships practical software">
      <div className="grid gap-8 md:grid-cols-5">
        <div className="space-y-4 leading-7 text-muted md:col-span-3">
          <p>
            I&rsquo;m a Software Engineering graduate from UPSI with internship
            experience in full-stack web development, backend automation and
            cloud application development on Google Cloud. I&rsquo;ve also
            started working as a software developer. My interests cover
            software engineering, web and mobile development, AI, automation
            and cloud.
          </p>
          <p>
            I work mostly with PHP (Laravel), Python, JavaScript and Next.js,
            with MySQL and RESTful APIs. I enjoy turning ideas into practical
            software: integrating APIs and AI into applications, automating
            repetitive tasks, and working across frontend, backend and cloud.
            I&rsquo;m particularly interested in combining software
            engineering, AI and automation.
          </p>
          <p>
            I see myself as a software developer who integrates AI into
            practical applications, not as an AI researcher.
          </p>
        </div>

        <aside className="rounded-2xl border border-accent/15 bg-accent/5 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-lg md:col-span-2">
          <h3 className="font-semibold">Looking for</h3>
          <p className="mt-3 text-sm leading-6 text-muted">
            My current role has given me valuable experience, but I am looking
            for a position that is more closely aligned with my long-term
            software engineering and AI development goals.
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {lookingFor.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-accent" aria-hidden="true">
                  →
                </span>
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}
