import Link from "next/link";

const LINKS = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Workflow", href: "/#workflow" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line py-16 bg-surface/50">
      <div className="container-grid">
        <div className="flex flex-col md:flex-row items-baseline justify-between gap-8 mb-12">
          <div>
            <Link href="/" className="font-serif text-3xl text-bone">
              CJ
            </Link>
            <p className="text-xs text-muted/70 tracking-wider uppercase mt-1 font-sans">
              Documentary Video Editor · Motion Graphics Designer
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-8 gap-y-2">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-sans text-xs uppercase tracking-widest text-muted hover:text-bone transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="pt-8 border-t border-line flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-sans text-muted">
          <p>© 2026 Jignesh Nishad (CJ). All rights reserved.</p>
          <div className="flex items-center gap-2 tracking-widest uppercase">
            <span>OPEN FOR NEW PROJECTS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
