"use client";

import { useEffect, useRef } from "react";
import { MdOutlineWork } from "react-icons/md";
import { RiUserFill, RiCalendar2Fill } from "react-icons/ri";
import { HiArrowUpRight } from "react-icons/hi2";
import { color, font, pattern, radius } from "@/components/branding/tokens";
import type { WorkItem } from "./PortfolioHomeScreen";

// ─── Local font stacks (not in tokens) ─────────────────────────────────────────
const DM_SANS_XLIGHT: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 200,
  fontVariationSettings: "'opsz' 14",
};
const DM_SANS_LIGHT: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 300,
  fontVariationSettings: "'opsz' 14",
};
const SATOSHI: React.CSSProperties = { fontFamily: "'Satoshi', sans-serif" };

const lineClamp = (lines: number): React.CSSProperties => ({
  display: "-webkit-box",
  WebkitLineClamp: lines,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
});

// ─── Work Card ─────────────────────────────────────────────────────────────────
function WorkCard({ work }: { work: WorkItem }) {
  return (
    <div
      className="relative overflow-hidden flex flex-col min-w-0"
      style={{
        background: color.bg.surface,
        border: `1px solid ${color.border.warm}`,
        borderRadius: radius.card,
      }}
    >
      {/* Hero image — capped height so wide viewports don’t inflate the band */}
      <div
        className="relative flex-shrink-0 overflow-hidden w-full"
        style={{
          height: "clamp(96px, 13cqw, 160px)",
        }}
      >
        <img
          src={work.image}
          alt={work.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            border: `1px solid ${color.border.warm}`,
            borderRadius: 2,
          }}
        />
      </div>

      {/* Body */}
      <div
        className="flex flex-col flex-1 min-h-0"
        style={{
          padding: "1.25cqw 1.4cqw 0 1.4cqw",
          gap: "0.5cqw",
        }}
      >
        {/* Date */}
        <p
          style={{
            ...DM_SANS_XLIGHT,
            color: color.text.primary,
            fontSize: "0.62cqw",
            letterSpacing: "-0.003cqw",
          }}
        >
          {work.date}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap" style={{ gap: "0.65cqw" }}>
          {work.tags.map((tag) => (
            <div
              key={tag}
              className="flex items-center justify-center"
              style={{
                background: color.glass.tag,
                border: `1px solid ${color.border.tag}`,
                borderRadius: radius.tag,
                padding: "0.22cqw 0.45cqw",
              }}
            >
              <span
                className="whitespace-nowrap"
                style={{
                  ...font.dotoBold,
                  color: color.text.white,
                  fontSize: "0.62cqw",
                  letterSpacing: "-0.003cqw",
                }}
              >
                {tag}
              </span>
            </div>
          ))}
        </div>

        {/* Title + description */}
        <div className="flex flex-col min-h-0" style={{ gap: "0.65cqw" }}>
          <h3
            className="leading-[1.4]"
            style={{
              ...font.figtree,
              color: color.text.primary,
              fontSize: "1.45cqw",
              letterSpacing: "-0.01cqw",
              ...lineClamp(2),
            }}
          >
            {work.title}
          </h3>
          <p
            className="leading-[1.4]"
            style={{
              ...font.figtree,
              color: color.text.secondary,
              fontSize: "0.95cqw",
              ...lineClamp(4),
            }}
          >
            {work.description}
          </p>
        </div>
      </div>

      {/* Footer: metadata + VIEW button */}
      <div
        className="flex flex-wrap items-center justify-between gap-y-2 gap-x-2"
        style={{ padding: "1.1cqw 1.4cqw" }}
      >
        {/* Metadata */}
        <div className="flex flex-wrap items-center min-w-0" style={{ gap: "0.65cqw" }}>
          <div className="flex items-center shrink-0" style={{ gap: "0.28cqw" }}>
            <MdOutlineWork
              style={{ color: color.text.primary, width: "1.25cqw", height: "1.25cqw" }}
            />
            <span
              className="whitespace-nowrap"
              style={{
                ...font.dotoBold,
                color: color.text.primary,
                fontSize: "0.68cqw",
                letterSpacing: "-0.004cqw",
              }}
            >
              {work.company}
            </span>
          </div>
          <div className="flex items-center shrink-0" style={{ gap: "0.28cqw" }}>
            <RiUserFill
              style={{ color: color.text.primary, width: "1.25cqw", height: "1.25cqw" }}
            />
            <span
              className="whitespace-nowrap"
              style={{
                ...font.dotoBold,
                color: color.text.primary,
                fontSize: "0.68cqw",
                letterSpacing: "-0.004cqw",
              }}
            >
              {work.role}
            </span>
          </div>
          <div className="flex items-center shrink-0" style={{ gap: "0.28cqw" }}>
            <RiCalendar2Fill
              style={{ color: color.text.primary, width: "1.25cqw", height: "1.25cqw" }}
            />
            <span
              className="whitespace-nowrap"
              style={{
                ...font.dotoBold,
                color: color.text.primary,
                fontSize: "0.68cqw",
                letterSpacing: "-0.004cqw",
              }}
            >
              {work.duration}
            </span>
          </div>
        </div>

        {/* VIEW button */}
        <button
          type="button"
          className="flex items-center justify-center uppercase transition-opacity hover:opacity-80 active:scale-95 shrink-0"
          style={{
            background: color.text.primary,
            color: color.bg.page,
            borderRadius: radius.md,
            padding: "0.65cqw 1.1cqw",
            ...font.inter,
            fontSize: "0.95cqw",
            letterSpacing: "0.08cqw",
            fontWeight: 400,
          }}
        >
          View
        </button>
      </div>
    </div>
  );
}

// ─── Scrolling banner ──────────────────────────────────────────────────────────
const BANNER_ITEMS = Array.from({ length: 14 }, (_, i) =>
  i % 2 === 0 ? "+++" : "Let's talk"
);

function MarqueeBanner() {
  return (
    <div
      className="w-full overflow-hidden whitespace-nowrap"
      style={{
        background: "rgba(218, 197, 167, 0.1)",
        borderTop: `1px solid ${color.border.warm}`,
        borderBottom: `1px solid ${color.border.warm}`,
      }}
    >
      <div
        className="inline-flex"
        style={{
          animation: "works-marquee 18s linear infinite",
          gap: "2.1cqw",
          padding: "1.1cqw 0",
        }}
      >
        {[...BANNER_ITEMS, ...BANNER_ITEMS].map((item, i) => (
          <span
            key={i}
            className="shrink-0"
            style={{
              ...SATOSHI,
              color: color.text.primary,
              fontSize: "0.54cqw",
              letterSpacing: "0.062cqw",
              textTransform: "uppercase",
              marginRight: "1.32cqw",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Works Screen ──────────────────────────────────────────────────────────────
interface WorksScreenProps {
  works: WorkItem[];
  onBack: () => void;
}

export function WorksScreen({ works, onBack }: WorksScreenProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Prevent wheel events from bubbling up to the canvas pan/zoom handler
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const stop = (e: WheelEvent) => e.stopPropagation();
    el.addEventListener("wheel", stop, { passive: true });
    return () => el.removeEventListener("wheel", stop);
  }, []);

  return (
    <>
      <style>{`
        @keyframes works-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .works-screen-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.25cqw;
        }
        @container works-main (min-width: 1024px) {
          .works-screen-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>

      <div
        ref={scrollRef}
        className="absolute inset-0 z-10 overflow-y-auto"
        style={{
          container: "works-main / inline-size",
          background: color.bg.page,
        }}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* Dot-pattern background — design system grid density */}
        <div
          aria-hidden
          className="fixed inset-0 pointer-events-none"
          style={{ ...pattern.dotGrid, zIndex: 0 }}
        />

        {/* ── Hero header ─────────────────────────────────────────────────── */}
        <div
          className="relative z-10 flex flex-col items-center text-center"
          style={{ paddingTop: "8.5cqw", paddingBottom: "2.25cqw" }}
        >
          <h1
            className="leading-none tracking-tight w-full text-center"
            style={{
              ...font.daiBannaBold,
              color: color.text.primary,
              fontSize: "6.5cqw",
            }}
          >
            Works.
          </h1>
          <p
            className="leading-none"
            style={{
              ...font.daiBannaBold,
              color: color.text.primary,
              fontSize: "1.6cqw",
              opacity: 0.7,
              marginTop: "0.5cqw",
            }}
          >
            ({works.length})
          </p>
        </div>

        {/* ── Card grid (named container queries via scroll root) ─────────── */}
        <div className="relative z-10" style={{ padding: "0 5.5cqw 4cqw 5.5cqw" }}>
          <div className="works-screen-grid">
            {works.map((work, i) => (
              <WorkCard key={i} work={work} />
            ))}
          </div>
        </div>

        {/* ── Footer ──────────────────────────────────────────────────────── */}
        <div className="relative z-10 w-full" style={{ background: color.bg.surface }}>
          <MarqueeBanner />

          {/* Closing copy */}
          <div
            className="flex flex-col items-center text-center"
            style={{ padding: "3.5cqw 10cqw 3cqw" }}
          >
            <p
              className="uppercase mb-[0.33cqw]"
              style={{
                ...font.figtree,
                color: color.text.primary,
                fontSize: "0.54cqw",
                letterSpacing: "0.062cqw",
              }}
            >
              Shivam Patel
            </p>

            <div
              className="leading-none text-center"
              style={{
                ...DM_SANS_LIGHT,
                color: color.text.primary,
                fontSize: "3.4cqw",
              }}
            >
              <p className="mb-0">Thanks for wandering through</p>
              <p>
                <span>my </span>
                <span style={font.daiBannaLightItal}>digital canvas.</span>
              </p>
            </div>

            <button
              type="button"
              onClick={onBack}
              className="flex items-center gap-2 transition-opacity hover:opacity-80 active:scale-95"
              style={{
                marginTop: "1.5cqw",
                background: color.text.primary,
                borderRadius: radius.sm,
                padding: "0.41cqw 0.66cqw",
                ...SATOSHI,
                fontSize: "0.54cqw",
                letterSpacing: "0.062cqw",
                color: color.bg.page,
                textTransform: "uppercase",
              }}
            >
              <span>Get in touch</span>
              <HiArrowUpRight style={{ width: "0.74cqw", height: "0.74cqw" }} />
            </button>
          </div>

          {/* Bottom bar */}
          <div
            className="flex items-center justify-between"
            style={{ padding: "0 1.24cqw 1.07cqw" }}
          >
            <span
              className="uppercase"
              style={{
                ...font.figtree,
                fontSize: "0.54cqw",
                letterSpacing: "0.062cqw",
                color: color.text.muted,
              }}
            >
              Shivam Patel
            </span>
            <span
              className="uppercase"
              style={{
                ...font.figtree,
                fontSize: "0.54cqw",
                letterSpacing: "0.062cqw",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              © 2026
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
