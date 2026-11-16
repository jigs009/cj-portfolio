import SectionReveal from "@/components/ui/SectionReveal";
import siteData from "@/content/site.json";

export default function Process() {
  const { process } = siteData;

  return (
    <section id="workflow" className="py-24 md:py-36 border-b border-line bg-ink">
      <div className="container-grid">
        <SectionReveal>
          <p className="text-xs text-muted tracking-widest uppercase mb-3 font-sans font-medium">Workflow</p>
          <h2 className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] text-bone leading-[1.05] mb-4">
            How we work together.
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-xl mb-14 leading-relaxed font-sans">
            A collaborative, transparent process designed to keep projects moving smoothly without unnecessary friction.
          </p>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((step, i) => (
            <SectionReveal key={step.step} delay={i * 0.04}>
              <div className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-surface border border-line hover:border-tungsten/50 hover:bg-surface-hover hover:shadow-2xl hover:shadow-black/50 transition-[border-color,background-color,box-shadow] duration-200">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-sans text-sm text-tungsten font-bold tracking-wider">
                      {step.step}
                    </span>
                    <span className="font-sans text-[10px] text-muted bg-ink px-2.5 py-1 rounded border border-line font-medium">
                      {step.timing}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-bone mb-3">
                    {step.label}
                  </h3>

                  <p className="text-muted text-xs sm:text-sm leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>

                {step.revisions && (
                  <div className="mt-6 pt-4 border-t border-line flex items-center gap-2 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-tungsten" />
                    <span className="text-[10px] uppercase tracking-wider text-tungsten font-semibold">
                      {step.revisions}
                    </span>
                  </div>
                )}
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
