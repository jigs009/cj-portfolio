"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import Modal from "@/components/ui/Modal";
import VideoEmbed from "@/components/ui/VideoEmbed";
import type { Project } from "@/lib/types";

function WorkTile({
  project,
  isFeatured = false,
  onClick,
}: {
  project: Project;
  isFeatured?: boolean;
  onClick: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasPreview = Boolean(project.hoverPreviewUrl && project.hoverPreviewUrl !== "");
  const hasThumb = Boolean(project.thumbnailUrl && !project.thumbnailUrl.startsWith("["));
  const cleanTitle = project.title.replace(/^\[PROJECT \d+: /, "").replace(/\]$/, "");

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
      className={`relative aspect-video w-full overflow-hidden rounded-lg bg-surface border border-line/40 group cursor-pointer ${
        isFeatured ? "md:col-span-2" : "md:col-span-1"
      }`}
    >
      {/* Thumbnail */}
      {hasThumb ? (
        <Image
          src={project.thumbnailUrl}
          alt={cleanTitle}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes={isFeatured ? "(max-width: 768px) 100vw, 1200px" : "(max-width: 768px) 100vw, 600px"}
        />
      ) : (
        <div className="absolute inset-0 bg-surface/50 flex items-center justify-center">
          <span className="font-serif text-xl text-muted/60">{cleanTitle}</span>
        </div>
      )}

      {/* Hover Video Preview */}
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

      {/* Hover Title Overlay (Only title appears on hover) */}
      <div className="absolute inset-0 bg-ink/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
        <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-bone leading-snug max-w-xl">
          {cleanTitle}
        </h3>
      </div>
    </div>
  );
}

export default function Work({ projects }: { projects: Project[] }) {
  const displayProjects = projects.slice(0, 6);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  if (!displayProjects.length) return null;

  return (
    <section id="work" className="py-24 md:py-40">
      <div className="container-grid">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {displayProjects.map((p, idx) => (
            <SectionReveal key={p.slug} delay={idx * 0.05} className={idx === 0 ? "md:col-span-2" : "md:col-span-1"}>
              <WorkTile
                project={p}
                isFeatured={idx === 0}
                onClick={() => setActiveProject(p)}
              />
            </SectionReveal>
          ))}
        </div>
      </div>

      {/* Video Modal on click */}
      <Modal
        open={Boolean(activeProject)}
        onClose={() => setActiveProject(null)}
        label={activeProject?.title ? activeProject.title.replace(/^\[PROJECT \d+: /, "").replace(/\]$/, "") : "Project Video"}
      >
        {activeProject && (
          <div className="w-full bg-ink border border-line rounded-lg overflow-hidden">
            <VideoEmbed
              url={activeProject.embedUrl}
              title={activeProject.title.replace(/^\[PROJECT \d+: /, "").replace(/\]$/, "")}
              autoPlay
            />
          </div>
        )}
      </Modal>
    </section>
  );
}
