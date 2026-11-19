"use client";
import { useState } from "react";
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
  const hasThumb = Boolean(project.thumbnailUrl && !project.thumbnailUrl.startsWith("["));

  return (
    <div
      onClick={onClick}
      className="group block cursor-pointer select-none"
    >
      {/* Pure 16:9 Video Canvas Frame - No text, no titles, no explanations */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-surface border border-line transition-[border-color,box-shadow,transform] duration-300 ease-out group-hover:border-tungsten group-hover:shadow-2xl group-hover:shadow-tungsten/20 group-hover:scale-[1.02] transform-gpu">
        {hasThumb && (
          <Image
            src={project.thumbnailUrl}
            alt="Portfolio video thumbnail"
            fill
            priority={priority}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 transform-gpu"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}

        {/* Hover Overlay with Centered Play Button ONLY */}
        <div className="absolute inset-0 bg-ink/35 group-hover:bg-ink/50 transition-colors duration-300 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-tungsten text-ink flex items-center justify-center shadow-2xl shadow-tungsten/40 group-hover:scale-110 transition-transform">
            <svg aria-hidden="true" className="w-7 h-7 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
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
              Work.
            </h2>
            <p className="text-muted text-base max-w-xl mt-3 font-sans leading-relaxed">
              Edited and animated with Premiere Pro &amp; After Effects. Click any video to play.
            </p>
          </div>
        </SectionReveal>

        {/* Unified Work Grid Containing All 8 Videos */}
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

      {/* Video Modal Player - ONLY THE VIDEO PLAYER */}
      <Modal
        open={Boolean(activeProject)}
        onClose={() => setActiveProject(null)}
        label="Video Player"
      >
        {activeProject && (
          <div className="w-full aspect-video mx-auto bg-ink border border-line rounded-xl overflow-hidden shadow-2xl">
            <VideoEmbed
              url={activeProject.embedUrl}
              title="Portfolio Video"
              autoPlay
            />
          </div>
        )}
      </Modal>
    </section>
  );
}
