"use client";
import { useState } from "react";
import SectionReveal from "@/components/ui/SectionReveal";
import siteData from "@/content/site.json";

export default function Contact() {
  const { contact } = siteData;
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });

  const endpoint =
    process.env.NEXT_PUBLIC_FORM_ENDPOINT ||
    (contact.formEndpoint && !contact.formEndpoint.startsWith("[") ? contact.formEndpoint : "") ||
    "/api/contact";

  const displayEmail =
    contact.email && !contact.email.startsWith("[") ? contact.email : "workwithcj07@gmail.com";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;
    setStatus("sending");

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "", honeypot: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-[#0C0C12] border border-line rounded-lg px-4 py-3.5 text-bone text-sm placeholder:text-muted/40 focus:border-tungsten focus:bg-[#111118] focus:outline-none transition-all font-sans";

  return (
    <section id="contact" className="py-24 md:py-36 border-b border-line bg-ink">
      <div className="container-grid">
        <SectionReveal>
          <p className="text-xs text-muted tracking-widest uppercase mb-3 font-sans font-medium">Contact</p>
          <h2 className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] text-bone leading-[1.05] mb-4">
            Let&apos;s talk about your project.
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-xl mb-14 leading-relaxed font-sans">
            Have an upcoming video, documentary, or ongoing channel editing needs? Drop me a note below or reach out directly by email.
          </p>
        </SectionReveal>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Form Column (7 cols) - Elevated Card */}
          <div className="lg:col-span-7">
            <SectionReveal delay={0.1}>
              <div className="bg-surface border border-line rounded-2xl p-8 sm:p-10 shadow-xl shadow-black/40">
                {status === "success" ? (
                  <div className="py-8">
                    <h3 className="font-serif text-3xl text-bone mb-3">Message Received</h3>
                    <p className="text-muted leading-relaxed max-w-md mb-8 font-sans">
                      Thanks for reaching out! I&apos;ve received your message and will reply to <span className="text-bone">{formData.email}</span> within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="font-sans text-xs uppercase tracking-widest text-tungsten hover:underline underline-offset-4"
                    >
                      ← Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot anti-spam */}
                    <input
                      type="text"
                      name="website_url"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                      aria-hidden="true"
                    />

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-xs uppercase tracking-wider text-muted mb-2 font-sans font-medium">
                          Your Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          placeholder="Alex Rivera"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs uppercase tracking-wider text-muted mb-2 font-sans font-medium">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          placeholder="alex@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs uppercase tracking-wider text-muted mb-2 font-sans font-medium">
                        Message / Project Details *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        placeholder="Tell me about your video, timeline, footage links, or any questions..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={inputClass}
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-sm text-red-400 font-sans">
                        Failed to submit. Please email directly at {displayEmail}.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="
                        bg-tungsten text-ink font-sans text-xs font-semibold uppercase tracking-widest
                        px-8 py-4 rounded-full shadow-lg shadow-tungsten/20
                        hover:bg-tungsten/95 hover:scale-[1.02] active:scale-[0.98] transition-all
                        disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer
                      "
                    >
                      {status === "sending" ? "Sending…" : "Send Message →"}
                    </button>
                  </form>
                )}
              </div>
            </SectionReveal>
          </div>

          {/* Direct Channels (5 cols) - Elevated Card */}
          <div className="lg:col-span-5">
            <SectionReveal delay={0.15}>
              <div className="bg-surface border border-line rounded-2xl p-8 sm:p-10 shadow-xl shadow-black/40 space-y-8">
                <div>
                  <p className="text-xs uppercase tracking-widest text-tungsten font-semibold mb-2 font-sans">DIRECT EMAIL</p>
                  <a
                    href={`mailto:${displayEmail}`}
                    className="font-serif text-2xl sm:text-3xl text-bone hover:text-tungsten transition-colors break-all"
                  >
                    {displayEmail}
                  </a>
                </div>

                <div className="pt-8 border-t border-line space-y-3.5 text-sm text-muted font-sans">
                  <div className="flex items-center justify-between">
                    <span className="text-bone/80 font-medium">Availability</span>
                    <span className="text-tungsten font-semibold text-xs uppercase tracking-wider">Open for projects</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-bone/80 font-medium">Location</span>
                    <span className="text-bone">Remote / Worldwide</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-bone/80 font-medium">Response time</span>
                    <span className="text-bone">Within 24 hours</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-line text-xs font-sans text-muted/70 leading-relaxed">
                  Send your footage link or creative brief, and I&apos;ll reply with timeline estimates and next steps.
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
