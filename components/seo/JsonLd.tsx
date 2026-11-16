interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jignesh Nishad",
    alternateName: "CJ",
    jobTitle: "Documentary Video Editor & Motion Graphics Designer",
    description:
      "Freelance documentary video editor and motion graphics designer with 100+ projects and 3+ years of experience.",
    url: "https://[YOUR_DOMAIN]",
    sameAs: [
      "[YOUTUBE_URL]",
      "[INSTAGRAM_URL]",
    ],
  };
}

export function serviceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "CJ — Documentary Editing & Motion Graphics",
    description:
      "Documentary video editing, motion graphics design, and short-form content editing by Jignesh Nishad (CJ).",
    url: "https://[YOUR_DOMAIN]",
    founder: {
      "@type": "Person",
      name: "Jignesh Nishad",
    },
    serviceType: [
      "Documentary Editing",
      "Motion Graphics Design",
      "Short-form Video Editing",
    ],
  };
}
