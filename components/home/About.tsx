import SectionReveal from "@/components/ui/SectionReveal";

export default function About() {
  const tools = [
    {
      name: "Adobe Premiere Pro",
      role: "Video Editing & Story Assembly",
      desc: "Timeline pacing, multi-camera syncing, dialogue editing, sound design, and color finishing.",
    },
    {
      name: "Adobe After Effects",
      role: "Motion Graphics & Compositing",
      desc: "Kinetic typography, animated lower thirds, title cards, tracking, and visual effects.",
    },
    {
      name: "Figma",
      role: "UI Asset Prep & Resource Embedding",
      desc: "Extracting provided UI components, screens, and design resources to embed directly into animation timelines.",
    },
    {
      name: "Adobe Illustrator",
      role: "Vector Asset Prep & Layering",
      desc: "Preparing provided logos, vector illustrations, and brand assets for seamless animation in After Effects.",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-36 border-b border-line bg-ink">
      <div className="container-grid">
        <SectionReveal>
          <div className="max-w-3xl">
            <p className="text-xs text-muted tracking-widest uppercase mb-3 font-sans font-medium">
              About me
            </p>
            <h2 className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] text-bone leading-[1.05] mb-8">
              Behind the timeline.
            </h2>

            <div className="space-y-5 text-bone/95 text-base sm:text-lg leading-relaxed font-sans mb-12">
              <p>
                Hi, I&apos;m Jignesh Nishad, widely known as CJ. I&apos;m an independent video editor and motion designer with over 3 years of hands-on experience and 100+ projects completed for YouTube creators, documentary channels, and digital brands.
              </p>
              <p className="text-muted">
                Every video I deliver is crafted end-to-end using both Adobe Premiere Pro and Adobe After Effects. Premiere Pro handles the structural edit — storytelling, dialogue cleanup, pacing, and sound balance. After Effects drives the visual personality — kinetic typography, seamless transitions, graphic callouts, and compositing.
              </p>
              <p>
                When projects include on-screen software, apps, or brand graphics, I use Figma and Adobe Illustrator to handle and embed your provided design resources and vector assets—prepping layers and elements cleanly so they can be brought directly into After Effects and Premiere Pro for animation.
              </p>
            </div>

            {/* Software Pipeline Section */}
            <div className="pt-10 border-t border-line">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                <h3 className="font-serif text-2xl text-bone">Software &amp; Tools</h3>
                <span className="font-sans text-xs text-tungsten font-semibold tracking-wide">
                  Editing &amp; Animation in Premiere + After Effects
                </span>
              </div>
              <p className="text-sm text-muted mb-7 font-sans">
                My production stack for video editing, motion graphics, and asset integration:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="p-6 rounded-xl bg-surface border border-line hover:border-tungsten/50 hover:bg-surface-hover hover:shadow-xl hover:shadow-black/40 transition-[border-color,background-color,box-shadow] duration-200"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-sans text-sm font-semibold text-bone">
                        {tool.name}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-tungsten shadow-sm shadow-tungsten/50" />
                    </div>
                    <p className="font-sans text-xs text-tungsten font-medium mb-1.5">
                      {tool.role}
                    </p>
                    <p className="font-sans text-xs text-muted leading-relaxed">
                      {tool.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-tungsten hover:underline underline-offset-4 group font-semibold"
                >
                  <span>Start a project with CJ</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
