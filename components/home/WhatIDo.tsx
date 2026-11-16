import SectionReveal from "@/components/ui/SectionReveal";
import siteData from "@/content/site.json";

export default function WhatIDo() {
  const { services } = siteData;

  return (
    <section id="services" className="py-24 md:py-36 border-b border-line bg-ink">
      <div className="container-grid">
        <SectionReveal>
          <p className="text-xs text-muted tracking-widest uppercase mb-3 font-sans font-medium">Services</p>
          <h2 className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] text-bone leading-[1.05] mb-4">
            What I do.
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-xl mb-14 leading-relaxed font-sans">
            Post-production tailored for long-form creators, storytellers, and brands. Focused on pacing, narrative retention, and clean visual execution.
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <SectionReveal key={service.title} delay={i * 0.05}>
              <div className="group h-full flex flex-col justify-between p-8 rounded-2xl bg-surface border border-line hover:bg-surface-hover hover:border-tungsten/60 hover:shadow-2xl hover:shadow-black/50 transition-[border-color,background-color,box-shadow] duration-200">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-sans text-xs text-tungsten font-bold tracking-wider">
                      0{i + 1}
                    </span>
                    <span className="font-sans text-[10px] uppercase tracking-wider text-muted bg-ink px-2.5 py-1 rounded border border-line font-medium">
                      Capability
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-bone mb-3 group-hover:text-tungsten transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-6 font-sans">
                    {service.audience}
                  </p>

                  <div className="space-y-2.5 pt-6 border-t border-line mb-8">
                    {service.includes.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-bone/90 font-sans">
                        <span className="text-tungsten font-sans text-xs mt-0.5 shrink-0">•</span>
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-line flex items-center justify-between font-sans">
                  <span className="text-xs text-muted font-medium">
                    Custom project pricing
                  </span>
                  <a
                    href="#contact"
                    className="text-xs uppercase tracking-widest text-tungsten hover:underline underline-offset-4 flex items-center gap-1.5 group-hover:translate-x-1 transition-transform font-semibold"
                  >
                    <span>Discuss project</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
