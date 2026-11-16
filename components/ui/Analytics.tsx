"use client";
import { useEffect, useRef } from "react";

interface Props {
  provider: string;
  id: string;
}

export default function Analytics({ provider, id }: Props) {
  const loaded = useRef(false);

  useEffect(() => {
    if (!id || loaded.current) return;
    loaded.current = true;

    if (provider === "plausible") {
      const s = document.createElement("script");
      s.defer = true;
      s.dataset.domain = id;
      s.src = "https://plausible.io/js/script.js";
      document.head.appendChild(s);
    } else if (provider === "ga") {
      const s = document.createElement("script");
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
      document.head.appendChild(s);
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]) { window.dataLayer.push(args); }
      gtag("js", new Date());
      gtag("config", id);
    }
  }, [provider, id]);

  return null;
}

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}
