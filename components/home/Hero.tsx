"use client";
import siteData from "@/content/site.json";

export default function Hero() {
  const { hero, proof } = siteData;
  const hasLoop = Boolean(hero.reelLoopMp4 && !hero.reelLoopMp4.startsWith("["));
  const hasPoster = Boolean(hero.reelPoster && !hero.reelPoster.startsWith("["));

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden border-b border-line pt-36 pb-12 sm:pb-16 bg-ink"
    >
      {/* Background: Muted video loop or clean dark atmosphere */}
      {hasLoop ? (
        <video
          aria-hidden="true"
          autoPlay
          muted
          loop
          playsInline
          poster={hasPoster ? hero.reelPoster : undefined}
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          {hero.reelLoopWebm && <source src={hero.reelLoopWebm} type="video/webm" />}
          <source src={hero.reelLoopMp4} type="video/mp4" />
        </video>
      ) : hasPoster ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${hero.reelPoster})` }}
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 w-full h-full bg-surface/40 opacity-40"
        />
      )}

      {/* Atmospheric dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/95 pointer-events-none" />

      {/* Top Status Tag */}
      <div className="container-grid relative z-10">
        <div className="inline-flex items-center gap-2.5 font-sans text-xs text-bone bg-surface/90 backdrop-blur-md px-4 py-2 rounded-full border border-line shadow-lg">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tungsten opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-tungsten" />
          </span>
          <span className="text-tungsten text-[11px] font-semibold tracking-wider uppercase">Available</span>
          <span className="text-line-bright">·</span>
          <span className="text-muted text-[11px] tracking-wide font-medium">Freelance Video Editor &amp; Motion Designer</span>
        </div>
      </div>

      {/* Main Headline */}
      <div className="container-grid relative z-10 my-auto py-12 sm:py-20">
        <h1 className="font-serif text-bone leading-[0.96] tracking-tight max-w-5xl">
          <span className="block text-[clamp(2.75rem,7vw,6.25rem)]">
            Video editor &amp;
          </span>
          <span className="block text-[clamp(2.75rem,7vw,6.25rem)] italic text-bone font-normal">
            motion designer.
          </span>
        </h1>

        <div className="mt-8 sm:mt-10 max-w-2xl">
          <p className="text-muted text-lg sm:text-xl leading-relaxed font-sans">
            Hey, I&apos;m CJ (Jignesh). Over the last 3+ years, I&apos;ve edited 100+ videos for YouTube creators, documentary filmmakers, and brands. Every project is built from scratch using Premiere Pro and After Effects.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-5 sm:gap-6">
            <a
              href="#contact"
              className="
                inline-flex items-center gap-3
                bg-tungsten text-ink font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider
                px-8 py-4 rounded-full shadow-xl shadow-tungsten/20
                hover:bg-tungsten/95 hover:scale-105 active:scale-95 transition-all
              "
            >
              <span>Get in touch</span>
              <span>→</span>
            </a>

            <a
              href="#work"
              className="
                font-sans text-xs uppercase tracking-widest text-bone/80 hover:text-tungsten
                py-4 px-3 transition-colors flex items-center gap-2 group
              "
            >
              <span>View projects</span>
              <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
            </a>
          </div>
        </div>
      </div>

      {/* Proof Cards with High Contrast */}
      <div className="container-grid relative z-10 pt-10 pb-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {proof.map((item) => (
            <div
              key={item.label}
              className="flex flex-col justify-between p-5 sm:p-6 rounded-xl bg-surface border border-line shadow-lg shadow-black/30 hover:border-tungsten/50 transition-all"
            >
              <span className="font-serif text-3xl sm:text-4xl text-bone leading-none mb-2">{item.value}</span>
              <span className="font-sans text-[11px] text-muted tracking-widest uppercase font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
