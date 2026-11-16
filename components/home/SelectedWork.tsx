"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import Modal from "@/components/ui/Modal";
import VideoEmbed from "@/components/ui/VideoEmbed";
import type { Project } from "@/lib/types";

function ProjectCard({
  project,
  onClick,
  priority = false,
}: {
  project: Project;
  onClick: () => void;
  priority?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasPreview = Boolean(project.hoverPreviewUrl && project.hoverPreviewUrl !== "");
  const hasThumb = Boolean(project.thumbnailUrl && !project.thumbnailUrl.startsWith("["));

  const handleEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleLeave = () => {
    videoRef.current?.pause();
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="group block cursor-pointer select-none"
    >
      {/* 16:9 Video Canvas Frame - High Contrast Border and GPU accelerated shadow */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-surface border border-line transition-[border-color,box-shadow,transform] duration-300 ease-out group-hover:border-tungsten group-hover:shadow-2xl group-hover:shadow-tungsten/20 group-hover:scale-[1.02] transform-gpu">
        {hasThumb && (
          <Image
            src={project.thumbnailUrl}
            alt={project.title}
            fill
            priority={priority}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 transform-gpu"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}

        {hasPreview && (
          <video
            ref={videoRef}
            src={project.hoverPreviewUrl}
            muted
            playsInline
            loop
            preload="none"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        )}

        {/* Hover Overlay with Centered Play Button & Title */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
          <div className="flex justify-end">
            <span className="font-sans text-[10px] uppercase tracking-wider text-tungsten bg-ink/90 backdrop-blur-md px-2.5 py-1 rounded border border-tungsten/30 font-semibold">
              Watch
            </span>
          </div>

          <div className="self-center">
            <div className="w-14 h-14 rounded-full bg-tungsten text-ink flex items-center justify-center shadow-2xl shadow-tungsten/30 group-hover:scale-110 transition-transform">
              <svg aria-hidden="true" className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          <div className="text-center">
            <p className="font-serif text-lg sm:text-xl text-bone line-clamp-1 drop-shadow-md">
              {project.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SelectedWork({ projects }: { projects: Project[] }) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  if (!projects.length) return null;

  return (
    <section id="work" className="py-24 md:py-36 border-b border-line bg-ink">
      <div className="container-grid">
        <SectionReveal>
          <div className="mb-14">
            <p className="text-xs text-muted tracking-widest uppercase mb-3 font-sans font-medium">
              Portfolio
            </p>
            <h2 className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] text-bone leading-[1.05]">
              Selected work.
            </h2>
            <p className="text-muted text-base max-w-2xl mt-3 font-sans leading-relaxed">
              Recent edits, documentaries, and motion graphics. All projects are cut in Premiere Pro and animated in After Effects.
            </p>
          </div>
        </SectionReveal>

        {/* Unified Work Grid Containing All 7 Videos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {projects.map((p, i) => (
            <SectionReveal key={p.slug} delay={i * 0.03}>
              <ProjectCard
                project={p}
                priority={i < 3}
                onClick={() => setActiveProject(p)}
              />
            </SectionReveal>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      <Modal
        open={Boolean(activeProject)}
        onClose={() => setActiveProject(null)}
        label={activeProject?.title || "Project Video"}
      >
        {activeProject && (
          <div className="space-y-4">
            <div className="w-full aspect-video mx-auto bg-ink border border-line rounded-xl overflow-hidden shadow-2xl">
              <VideoEmbed
                url={activeProject.embedUrl}
                title={activeProject.title}
                autoPlay
              />
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-surface border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
              <div>
                <div className="flex items-center gap-2.5">
                  <h3 className="font-serif text-xl sm:text-2xl text-bone">
                    {activeProject.title}
                  </h3>
                  <span className="text-[10px] uppercase tracking-wider text-muted/80 bg-ink px-2.5 py-0.5 rounded border border-line font-sans">
                    {activeProject.category}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted font-sans mt-1.5 max-w-2xl leading-relaxed">
                  {activeProject.brief}
                </p>
              </div>

              <div className="flex flex-col sm:items-end gap-1.5 shrink-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-line">
                <span className="text-[10px] uppercase tracking-wider font-sans text-muted/70">
                  Software
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-semibold bg-tungsten/15 text-tungsten border border-tungsten/30 font-sans">
                  Premiere Pro + After Effects
                </span>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
