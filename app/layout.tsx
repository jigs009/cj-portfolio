import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Analytics from "@/components/ui/Analytics";
import siteData from "@/content/site.json";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: {
    default: siteData.meta.title,
    template: `%s | CJ — Documentary Editor`,
  },
  description: siteData.meta.description,
  openGraph: {
    title: siteData.meta.title,
    description: siteData.meta.description,
    images: [{ url: siteData.meta.ogImage, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.meta.title,
    description: siteData.meta.description,
    images: [siteData.meta.ogImage],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-ink text-bone antialiased selection:bg-tungsten selection:text-ink font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics provider={siteData.analytics.provider} id={siteData.analytics.id} />
      </body>
    </html>
  );
}
