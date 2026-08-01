import type { Metadata } from "next";

const TARGET = "https://www.nainovate.ai/";

export const metadata: Metadata = {
  title: "Redirecting…",
  robots: { index: false, follow: false },
};

// Global catch-all: any path that is not /links or /links.html is exported to
// out/404.html by `output: 'export'`. GitHub Pages serves this file for every
// unmatched URL, forwarding visitors to the current website.
export default function NotFound() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="robots" content="noindex, nofollow" />
        <meta httpEquiv="refresh" content={`0; url=${TARGET}`} />
        <link rel="canonical" href={TARGET} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.replace(${JSON.stringify(TARGET)});`,
          }}
        />
      </head>
      <body>
        <p style={{ padding: "2rem", textAlign: "center" }}>
          Redirecting to <a href={TARGET}>nainovate.ai</a>…
        </p>
      </body>
    </html>
  );
}
