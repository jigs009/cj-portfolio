import Hero from "@/components/home/Hero";
import SelectedWork from "@/components/home/SelectedWork";
import WhatIDo from "@/components/home/WhatIDo";
import Process from "@/components/home/Process";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import { JsonLd, personSchema, serviceSchema } from "@/components/seo/JsonLd";
import projects from "@/content/projects.json";
import type { Project } from "@/lib/types";

export default function HomePage() {
  const allProjects = projects as Project[];

  return (
    <>
      <JsonLd data={personSchema()} />
      <JsonLd data={serviceSchema()} />
      <Hero />
      <SelectedWork projects={allProjects} />
      <WhatIDo />
      <Process />
      <About />
      <Contact />
    </>
  );
}
