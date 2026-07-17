'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

// --- Icons ---
const WhatsAppIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18M12 3a15 15 0 000 18" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

const PinIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

type LinkItem = {
  label: string;
  sublabel: string;
  href: string;
  icon: React.ReactNode;
  external?: boolean;
  accent?: string;
};

const links: LinkItem[] = [
  {
    label: 'Chat on WhatsApp',
    sublabel: 'Fastest way to reach us',
    href: 'https://wa.me/919886772888?text=Hi%20Nainovate%20team%21%20I%27d%20like%20to%20know%20more%20about%20your%20services.%20Looking%20forward%20to%20connecting.',
    icon: <WhatsAppIcon />,
    external: true,
    accent: 'text-[#25D366]',
  },
  {
    label: 'Email Us',
    sublabel: 'naveen@nainovate.com',
    href: 'mailto:naveen@nainovate.com',
    icon: <MailIcon />,
    external: true,
  },
  {
    label: 'Explore about our platform',
    sublabel: 'Enterprise AI, no-code',
    href: '/platform',
    icon: <GlobeIcon />,
  },
  {
    label: 'LinkedIn',
    sublabel: 'Follow our journey',
    href: 'https://www.linkedin.com/company/nainovate',
    icon: <LinkedInIcon />,
    external: true,
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const MAPS_URL = 'https://maps.app.goo.gl/fmysJPDLu5FCNk3a7';

const rowClass =
  'group flex items-center gap-3 sm:gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 sm:px-5 sm:py-3.5 transition-all duration-200 hover:bg-white/[0.08] hover:border-white/25 active:scale-[0.99]';

function Arrow({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`shrink-0 w-4 h-4 sm:w-5 sm:h-5 text-gray transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white ${className}`}
      fill="none" stroke="currentColor" viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

export default function LinksPageClient() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [holo, setHolo] = useState({ mx: 50, my: 50, rx: 0, ry: 0, active: false });
  // Interactive tilt/holographic only on desktop pointers. Mobile/touch/portrait
  // gets a flat static card + holographic corner watermark instead.
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px) and (hover: hover) and (pointer: fine)');
    const update = () => setInteractive(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  // Hide the global custom cursor dot on this page only (see globals.css).
  useEffect(() => {
    document.body.classList.add('links-page');
    return () => document.body.classList.remove('links-page');
  }, []);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return;
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setHolo({
      mx: px * 100,
      my: py * 100,
      ry: (px - 0.5) * 12, // tilt left/right
      rx: -(py - 0.5) * 12, // tilt up/down
      active: true,
    });
  };
  const handleLeave = () =>
    // keep last mx/my so the glare fades out in place instead of
    // jumping to the card center during the opacity transition
    setHolo((h) => ({ ...h, rx: 0, ry: 0, active: false }));

  const identity = (
    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
      <Link href="/" className="mb-5 sm:mb-6 inline-block">
        <Image
          src="/images/Nainovate_GenX_Dark_Mode.svg"
          alt="Nainovate"
          width={190}
          height={50}
          className="h-8 sm:h-9 w-auto"
          priority
        />
      </Link>
      <h1 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-white">
        Naveen Gogineni
      </h1>
      <p className="mt-2 text-sm sm:text-base font-medium text-white/90">
        Director - Digital and AI
      </p>
      <p className="mt-1.5 text-xs sm:text-sm font-medium tracking-[0.28em] text-gray uppercase">
        Nainovate Technologies
      </p>

      {/* Address — sits under identity on desktop */}
      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-6 hidden lg:flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-all duration-200 hover:bg-white/[0.08] hover:border-white/25 w-full"
      >
        <span className="shrink-0 grid place-items-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white transition-colors group-hover:bg-white/10">
          <PinIcon />
        </span>
        <span className="flex-1 min-w-0">
          <span className="block text-sm font-semibold text-white">Visit Us</span>
          <span className="block text-xs text-gray leading-relaxed">
            AVK Sri Harsha Icon, 11th Floor, Nanakramguda, Hyderabad — 500032
          </span>
        </span>
      </a>
    </div>
  );

  const linksBlock = (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-3"
    >
      {links.map((l) => {
        const inner = (
          <>
            <span className={`shrink-0 grid place-items-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/5 border border-white/10 transition-colors group-hover:bg-white/10 ${l.accent ?? 'text-white'}`}>
              {l.icon}
            </span>
            <span className="flex-1 min-w-0">
              <span className="block text-sm sm:text-base font-semibold text-white truncate">
                {l.label}
              </span>
              <span className="block text-xs sm:text-sm text-gray truncate">
                {l.sublabel}
              </span>
            </span>
            <Arrow />
          </>
        );
        return (
          <motion.div variants={item} key={l.label}>
            {l.external ? (
              <a
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={rowClass}
              >
                {inner}
              </a>
            ) : (
              <Link href={l.href} className={rowClass}>
                {inner}
              </Link>
            )}
          </motion.div>
        );
      })}

      {/* Address — mobile/portrait only (desktop shows it under identity) */}
      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex lg:hidden items-start gap-3 sm:gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 sm:px-5 sm:py-3.5 transition-all duration-200 hover:bg-white/[0.08] hover:border-white/25 active:scale-[0.99]"
      >
        <span className="shrink-0 grid place-items-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/5 border border-white/10 text-white transition-[28;5colors group-hover:bg-white/10">
          <PinIcon />
        </span>
        <span className="flex-1 min-w-0">
          <span className="block text-sm sm:text-base font-semibold text-white">Visit Us</span>
          <span className="block text-xs sm:text-sm text-gray leading-relaxed">
            AVK Sri Harsha Icon, 11th Floor, Nanakramguda, Hyderabad — 500032
          </span>
        </span>
        <Arrow className="mt-1" />
      </a>
    </motion.div>
  );

  return (
    <main className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center px-4 py-24 sm:py-28">
      {/* Ambient gradient background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] max-w-[520px] max-h-[520px] rounded-full blur-[80px] opacity-60"
          style={{ background: 'linear-gradient(40deg, rgba(255,0,128,0.15), rgba(255,102,0,0.08))' }} />
        <div className="absolute -bottom-[15%] -right-[10%] w-[65vw] h-[65vw] max-w-[560px] max-h-[560px] rounded-full blur-[80px] opacity-60"
          style={{ background: 'linear-gradient(240deg, rgba(72,0,255,0.14), rgba(0,183,255,0.07))' }} />
        <div className="absolute top-[50%] left-[10%] w-[40vw] h-[40vw] max-w-[360px] max-h-[360px] rounded-full blur-[80px] opacity-50"
          style={{ background: 'linear-gradient(120deg, rgba(133,89,255,0.10), rgba(98,216,249,0.05))' }} />
        <div className="absolute inset-0"
          style={{
            backgroundSize: '40px 40px',
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)',
          }} />
      </div>

      {/* Holographic corner watermark — mobile/portrait only, static, behind card.
          Slides in marquee-style on load; static fallback via CSS (see globals.css). */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none lg:hidden">
        {[
          { pos: 'absolute -top-2 -left-4 -rotate-6 origin-top-left', dir: 'marquee-in-left', delay: '0.05s' },
          { pos: 'absolute top-1/3 -right-8 rotate-6 origin-top-right', dir: 'marquee-in-right', delay: '0.2s' },
          { pos: 'absolute bottom-1/3 -left-8 rotate-6 origin-bottom-left', dir: 'marquee-in-left', delay: '0.35s' },
          { pos: 'absolute -bottom-2 -right-4 -rotate-6 origin-bottom-right', dir: 'marquee-in-right', delay: '0.5s' },
        ].map((w, i) => (
          <span
            key={i}
            className={`${w.pos} whitespace-nowrap`}
            style={{ opacity: 0.1 }}
          >
            <span
              className={`marquee-in ${w.dir} font-extrabold tracking-tighter`}
              style={{
                animationDelay: w.delay,
                fontSize: 'clamp(3rem, 18vw, 8rem)',
                lineHeight: 1,
                color: 'transparent',
                backgroundImage:
                  'linear-gradient(115deg, #ff0080, #ff9900, #00ffa3, #00b7ff, #8559ff, #ff0080)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
              }}
            >
              NAINOVATE TECHNOLOGIES
            </span>
          </span>
        ))}
      </div>

      {/* Perspective wrapper (framer entrance lives here, tilt on inner) */}
      {/* NOTE: no opacity fade here — an ancestor with opacity < 1 disables the
          card's backdrop-filter (frosting), making it flash transparent → translucent.
          Entrance uses transform only so the frosting is live from the first frame. */}
      <motion.div
        initial={{ y: 24, scale: 0.98 }}
        animate={{ y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-[440px] lg:max-w-[860px]"
        style={{ perspective: '1200px' }}
      >
        {/* The card — tilts + holographic on hover */}
        <div
          ref={cardRef}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          className="relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden will-change-transform"
          style={{
            transform: interactive
              ? `rotateX(${holo.rx}deg) rotateY(${holo.ry}deg)`
              : 'none',
            transition: holo.active
              ? 'transform 80ms ease-out'
              : 'transform 500ms ease-out',
          }}
        >
          {/* Top sheen */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent z-20" />

          {interactive && (
            <>
              {/* Holographic rainbow sheen */}
              <div
                className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300 mix-blend-color-dodge"
                style={{
                  opacity: holo.active ? 0.5 : 0,
                  backgroundImage:
                    'repeating-linear-gradient(115deg, rgba(255,0,128,0.25) 0%, rgba(255,153,0,0.22) 12%, rgba(0,255,163,0.22) 24%, rgba(0,183,255,0.25) 36%, rgba(133,89,255,0.25) 48%, rgba(255,0,128,0.25) 60%)',
                  backgroundSize: '260% 260%',
                  backgroundPosition: `${holo.mx}% ${holo.my}%`,
                }}
              />
              {/* Glare highlight following cursor */}
              <div
                className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300 mix-blend-overlay"
                style={{
                  opacity: holo.active ? 1 : 0,
                  background: `radial-gradient(circle at ${holo.mx}% ${holo.my}%, rgba(255,255,255,0.35), rgba(255,255,255,0) 45%)`,
                }}
              />
            </>
          )}

          {/* Content */}
          <div className="relative z-20 p-6 sm:p-8 lg:p-10">
            {/* Desktop = landscape 2-col; mobile/portrait = stacked */}
            <div className="flex flex-col lg:flex-row lg:items-stretch lg:gap-10">
              <div className="lg:w-[46%] lg:pr-10 lg:border-r lg:border-white/10">
                {identity}
              </div>

              {/* Divider (portrait only) */}
              <div className="my-6 h-px w-full bg-white/10 lg:hidden" />

              <div className="lg:flex-1 lg:flex lg:flex-col lg:justify-center">
                {linksBlock}
              </div>
            </div>

            {/* Footer note */}
            <p className="mt-6 lg:mt-8 text-center lg:text-left text-[10px] sm:text-xs tracking-wider text-gray/70 uppercase">
              Hyderabad, India · 17.415901, 78.354863
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
