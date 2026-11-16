export interface Project {
  slug: string;
  title: string;
  clientType: string;
  category: string;
  format?: "long-form" | "short-form";
  role: string;
  tools: string[];
  thumbnailUrl: string;
  hoverPreviewUrl: string;
  embedUrl: string;
  brief: string;
  approach: string;
  result: string;
  featured: boolean;
  beforeUrl: string;
  afterUrl: string;
}

export interface SiteData {
  meta: {
    title: string;
    description: string;
    ogImage: string;
    twitterHandle: string;
  };
  hero: {
    headline: string;
    subline: string;
    reelUrl: string;
    reelLoopMp4: string;
    reelLoopWebm: string;
    reelPoster: string;
    reelTranscriptUrl: string;
    ctaReel: string;
    ctaQuote: string;
  };
  proof: Array<{ value: string; label: string }>;
  services: Array<{
    title: string;
    audience: string;
    includes: string[];
    priceFrom: string;
  }>;
  process: Array<{
    step: string;
    label: string;
    description: string;
    timing: string;
    revisions: string | null;
  }>;
  testimonials: Array<{
    quote: string;
    name: string;
    role: string;
    channelUrl?: string;
  }>;
  about: {
    headshotSrc: string;
    headshotAlt: string;
    bio: string;
    software: string[];
  };
  faq: Array<{ q: string; a: string }>;
  contact: {
    email: string;
    whatsapp: string;
    discord: string;
    youtube: string;
    instagram: string;
    formEndpoint: string;
  };
  analytics: {
    provider: string;
    id: string;
  };
}
