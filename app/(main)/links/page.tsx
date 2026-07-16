import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Redirecting…",
  robots: { index: false, follow: false },
};

export default function LinksRedirect() {
  return (
    <>
      {/* No-JS redirect */}
      <meta httpEquiv="refresh" content="0; url=/" />
      {/* Instant JS redirect (fires before React hydration) */}
      <script
        dangerouslySetInnerHTML={{ __html: "window.location.replace('/');" }}
      />
      <p style={{ padding: "2rem", textAlign: "center" }}>
        Redirecting to the <Link href="/">homepage</Link>…
      </p>
    </>
  );
}
