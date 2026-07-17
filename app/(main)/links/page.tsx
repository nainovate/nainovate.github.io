import type { Metadata } from "next";
import LinksPageClient from "@/components/pages/LinksPageClient";

export const metadata: Metadata = {
  title: "Connect with Nainovate — Links",
  description:
    "Reach the Nainovate team fast — WhatsApp, email, live demo, and more. Enterprise AI, no-code.",
  openGraph: {
    title: "Connect with Nainovate",
    description: "One tap to reach the Nainovate team — WhatsApp, email, demo, and more.",
  },
};

export default function LinksPage() {
  return <LinksPageClient />;
}
