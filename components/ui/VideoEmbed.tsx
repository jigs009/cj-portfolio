"use client";
import { useState } from "react";

interface VideoEmbedProps {
  url: string;
  title: string;
  thumbnailUrl?: string;
  className?: string;
  autoPlay?: boolean;
}

function getEmbedUrl(url: string, autoPlay = false): string {
  if (!url || url.startsWith("[")) return "";
  const yt = url.match(/(?:youtube\.com\/(?:embed\/|watch\?v=|shorts\/)|youtu\.be\/)([^?&]+)/);
  if (yt) {
    const params = new URLSearchParams({
      autoplay: autoPlay ? "1" : "0",
      rel: "0",
      modestbranding: "1",
    });
    return `https://www.youtube.com/embed/${yt[1]}?${params}`;
  }
  const vm = url.match(/(?:vimeo\.com\/(?:video\/)?|player\.vimeo\.com\/video\/)(\d+)/);
  if (vm) {
    const params = new URLSearchParams({
      autoplay: autoPlay ? "1" : "0",
    });
    return `https://player.vimeo.com/video/${vm[1]}?${params}`;
  }
  return url;
}

export default function VideoEmbed({
  url,
  title,
  thumbnailUrl,
  className = "",
  autoPlay = false,
}: VideoEmbedProps) {
  const [active, setActive] = useState(autoPlay);
  const isPlaceholder = !url || url.startsWith("[");
  const embedUrl = !isPlaceholder ? getEmbedUrl(url, true) : "";

  if (isPlaceholder || !embedUrl) {
    return (
      <div
        className={`relative aspect-video bg-surface/60 border border-line/40 rounded-md overflow-hidden flex flex-col items-center justify-center p-8 text-center select-none ${className}`}
      >
        <div className="w-14 h-14 rounded-full bg-tungsten text-ink flex items-center justify-center mb-4 shadow-xl">
          <svg
            aria-hidden="true"
            className="w-5 h-5 ml-0.5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <p className="font-serif text-2xl text-bone mb-1">
          {title.replace(/^\[PROJECT \d+: /, "").replace(/\]$/, "")}
        </p>
        <p className="text-xs text-muted/60 tracking-wider uppercase font-sans">
          Video Player Preview
        </p>
      </div>
    );
  }

  return (
    <div
      className={`relative aspect-video bg-surface overflow-hidden rounded-md border border-line/40 ${className}`}
      data-play-cursor
    >
      {!active ? (
        <button
          onClick={() => setActive(true)}
          aria-label={`Play video: ${title}`}
          className="absolute inset-0 w-full h-full group cursor-play text-left"
        >
          {thumbnailUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={thumbnailUrl}
              alt={`Thumbnail for ${title}`}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
          )}
          <div className="absolute inset-0 bg-ink/30 flex items-center justify-center group-hover:bg-ink/10 transition-colors">
            <div className="w-16 h-16 rounded-full bg-tungsten text-ink flex items-center justify-center group-hover:scale-110 shadow-2xl transition-transform">
              <svg
                aria-hidden="true"
                className="w-6 h-6 ml-0.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </button>
      ) : (
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      )}
    </div>
  );
}
