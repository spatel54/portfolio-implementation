"use client";

import { useEffect, useRef } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import {
  SiFigma,
  SiSketch,
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { TextFlippingBoard } from "@/components/ui/text-flipping-board";
import GalleryParallaxColumns from "@/components/ui/GalleryParallaxColumns";

// ─── Font constants ────────────────────────────────────────────────────────────
const FIGTREE: React.CSSProperties = { fontFamily: "'Figtree', sans-serif" };
const DAI_BANNA_LIGHT_ITALIC: React.CSSProperties = {
  fontFamily: "'Dai Banna SIL', serif",
  fontWeight: 300,
  fontStyle: "italic",
};
const DM_SANS_LIGHT: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 300,
  fontVariationSettings: "'opsz' 14",
};
const DM_SANS_XLIGHT: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 200,
  fontVariationSettings: "'opsz' 14",
};
const DOTO_BOLD: React.CSSProperties = {
  fontFamily: "'Doto', monospace",
  fontWeight: 700,
};
const SATOSHI: React.CSSProperties = { fontFamily: "'Satoshi', sans-serif" };

// ─── Bio copy ──────────────────────────────────────────────────────────────────
const BIO =
  "Shivam shapes what musicians actually touch: the Next.js app, Document and Sandbox flows, RiffScore integration, Theory Inspector chrome, and the visual language that keeps dense scores legible. His longest creative loops run in Claude around interaction, motion, and copy, while Figma is where layouts prove they deserve to become components. He sweats notation-first UX, calm state architecture, responsive rhythm, and the quiet tactile detail in controls (the kind of thoughtfulness you notice in a well-made door handle), so a heavy score still feels approachable instead of hostile.";

// ─── Scrolling banner ──────────────────────────────────────────────────────────
const BANNER_ITEMS = Array.from({ length: 14 }, (_, i) =>
  i % 2 === 0 ? "+++" : "Let's talk"
);

function MarqueeBanner() {
  return (
    <div
      className="w-full overflow-hidden whitespace-nowrap"
      style={{
        background: "rgba(218,197,167,0.1)",
        borderTop: "1px solid rgba(218,197,167,0.15)",
        borderBottom: "1px solid rgba(218,197,167,0.15)",
      }}
    >
      <div
        className="inline-flex"
        style={{
          animation: "about-marquee 18s linear infinite",
          gap: "2.1cqw",
          padding: "1.1cqw 0",
        }}
      >
        {[...BANNER_ITEMS, ...BANNER_ITEMS].map((item, i) => (
          <span
            key={i}
            className="text-[#dac5a7] shrink-0"
            style={{
              ...SATOSHI,
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

// ─── Music Player ──────────────────────────────────────────────────────────────
function MusicPlayer() {
  return (
    <div
      className="flex flex-col"
      style={{
        width: "16.3cqw",
        background: "#272625",
        border: "0.15cqw solid rgba(218,197,167,0.12)",
        borderRadius: "2cqw",
        padding: "1cqw",
        gap: "0.8cqw",
      }}
    >
      {/* Album art */}
      <div
        style={{
          width: "100%",
          aspectRatio: "1",
          background: "linear-gradient(135deg, #3a3530 0%, #1c1a18 100%)",
          borderRadius: "1cqw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Sound wave decoration */}
        <div className="flex items-end gap-[0.2cqw]" style={{ height: "3cqw" }}>
          {[0.4, 0.7, 1, 0.6, 0.9, 0.5, 0.8, 1, 0.4, 0.7].map((h, i) => (
            <div
              key={i}
              style={{
                width: "0.25cqw",
                height: `${h * 3}cqw`,
                background: "rgba(218,197,167,0.4)",
                borderRadius: "0.2cqw",
              }}
            />
          ))}
        </div>
      </div>

      {/* Track info */}
      <div className="flex flex-col" style={{ gap: "0.15cqw" }}>
        <p
          className="text-[#dac5a7] truncate"
          style={{ ...FIGTREE, fontSize: "0.75cqw", fontWeight: 500 }}
        >
          Creative Loop
        </p>
        <p
          className="truncate"
          style={{ ...DM_SANS_XLIGHT, fontSize: "0.6cqw", color: "#928573" }}
        >
          Shivam Patel
        </p>
      </div>

      {/* Progress bar */}
      <div className="flex flex-col" style={{ gap: "0.3cqw" }}>
        <div
          style={{
            height: "0.15cqw",
            background: "rgba(218,197,167,0.15)",
            borderRadius: "0.1cqw",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              height: "100%",
              width: "64%",
              background: "#dac5a7",
              borderRadius: "0.1cqw",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "64%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "0.6cqw",
              height: "0.6cqw",
              background: "#dac5a7",
              borderRadius: "50%",
            }}
          />
        </div>
        <div className="flex justify-between">
          <span
            style={{ ...DOTO_BOLD, fontSize: "0.45cqw", color: "#928573" }}
          >
            2:14
          </span>
          <span
            style={{ ...DOTO_BOLD, fontSize: "0.45cqw", color: "#928573" }}
          >
            -1:01
          </span>
        </div>
      </div>

      {/* Controls */}
      <div
        className="flex items-center justify-center"
        style={{ gap: "1.5cqw" }}
      >
        {/* Back */}
        <button className="opacity-60 hover:opacity-100 transition-opacity">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ width: "1.4cqw", height: "1.4cqw", color: "#dac5a7" }}
          >
            <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z" />
          </svg>
        </button>
        {/* Play */}
        <button className="hover:opacity-80 transition-opacity">
          <div
            style={{
              width: "3cqw",
              height: "3cqw",
              borderRadius: "50%",
              background: "#dac5a7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ width: "1.4cqw", height: "1.4cqw", color: "#1c1a18", marginLeft: "0.15cqw" }}
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
        {/* Forward */}
        <button className="opacity-60 hover:opacity-100 transition-opacity">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ width: "1.4cqw", height: "1.4cqw", color: "#dac5a7" }}
          >
            <path d="M6 18l8.5-6L6 6v12zm2.5-6L14 9v6z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ─── Tool Icon Tile ────────────────────────────────────────────────────────────
function ToolTile({ label, icon }: { label: string; icon: React.ReactNode }) {
  return (
    <div
      className="flex flex-col items-center"
      style={{ gap: "0.5cqw", width: "7cqw" }}
    >
      <div
        style={{
          width: "5cqw",
          height: "5cqw",
          background: "#272625",
          border: "0.1cqw solid rgba(218,197,167,0.12)",
          borderRadius: "1.2cqw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#dac5a7",
          fontSize: "2.2cqw",
        }}
      >
        {icon}
      </div>
      <span
        className="text-[#928573] text-center"
        style={{ ...FIGTREE, fontSize: "0.7cqw" }}
      >
        {label}
      </span>
    </div>
  );
}

// ─── Skill Pill ────────────────────────────────────────────────────────────────
function SkillPill({ label }: { label: string }) {
  return (
    <div
      style={{
        background: "#272625",
        border: "0.1cqw solid rgba(218,197,167,0.12)",
        borderRadius: "0.8cqw",
        padding: "0.6cqw 1.2cqw",
      }}
    >
      <span
        className="text-[#dac5a7] whitespace-nowrap"
        style={{ ...FIGTREE, fontSize: "0.7cqw" }}
      >
        {label}
      </span>
    </div>
  );
}

// ─── Experience Row ────────────────────────────────────────────────────────────
function ExperienceRow({
  date,
  company,
  role,
  description,
  isLast,
}: {
  date: string;
  company: string;
  role: string;
  description: string;
  isLast?: boolean;
}) {
  return (
    <div>
      <div
        className="grid"
        style={{
          gridTemplateColumns: "15.5cqw 22.3cqw 1fr",
          padding: "2.8cqw 1.9cqw",
          gap: "2cqw",
        }}
      >
        {/* Date */}
        <div
          className="text-[#928573]"
          style={{ ...DM_SANS_LIGHT, fontSize: "1.14cqw" }}
        >
          {date}
        </div>

        {/* Company + role */}
        <div className="flex flex-col" style={{ gap: "0.5cqw" }}>
          <p
            className="text-[#dac5a7]"
            style={{ ...FIGTREE, fontSize: "1.14cqw", fontWeight: 500 }}
          >
            {company}
          </p>
          <p
            className="text-[#928573]"
            style={{ ...FIGTREE, fontSize: "0.9cqw" }}
          >
            {role}
          </p>
        </div>

        {/* Description */}
        <div
          className="text-[#928573] leading-relaxed"
          style={{ ...DM_SANS_XLIGHT, fontSize: "0.9cqw" }}
        >
          {description}
        </div>
      </div>
      {!isLast && (
        <div
          style={{
            height: "1px",
            background: "rgba(218,197,167,0.1)",
            margin: "0 1.9cqw",
          }}
        />
      )}
    </div>
  );
}

// ─── Photo Grid ────────────────────────────────────────────────────────────────
const PHOTOS = [
  // Column 1 — 8 images
  "https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=800&q=80",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
  "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800&q=80",
  "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80",
  "https://images.unsplash.com/photo-1543946207-39bd91e70ca7?w=800&q=80",
  "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=800&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
  // Column 2 — 8 images
  "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
  "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&q=80",
  "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&q=80",
  "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80",
  // Column 3 — 8 images
  "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80",
  "https://images.unsplash.com/photo-1421217802237-65f6e9a27f90?w=800&q=80",
  "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80",
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&q=80",
  "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=800&q=80",
  "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
  "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=800&q=80",
  "https://images.unsplash.com/photo-1455218873509-8097305ee378?w=800&q=80",
];

// ─── Experience data ───────────────────────────────────────────────────────────
const EXPERIENCE = [
  {
    date: "2025 – Present",
    company: "Siebel Center for Design",
    role: "UX Designer",
    description:
      "Leading design for music annotation tooling. Research, prototyping, and cross-functional collaboration with engineering and faculty stakeholders.",
  },
  {
    date: "2024 – 2025",
    company: "HarmonyForge",
    role: "Frontend Engineer",
    description:
      "Built the Glass Box co-creative SATB arrangement system — VexFlow score renderer, Tone.js playback, Zustand state, and Theory Inspector LLM sidebar.",
  },
  {
    date: "2023 – 2024",
    company: "UIArchives",
    role: "Product Designer",
    description:
      "Designed and shipped the component resource library. Established the design system, icon taxonomy, and filtering architecture.",
  },
  {
    date: "2022 – 2023",
    company: "Independent",
    role: "Design Engineer",
    description:
      "Freelance design engineering — brand identity, interactive prototypes, and production-ready Next.js implementations for small product teams.",
  },
];

// ─── About Screen ──────────────────────────────────────────────────────────────
interface AboutScreenProps {
  onBack: () => void;
}

export function AboutScreen({ onBack }: AboutScreenProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

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
        @keyframes about-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      <div
        ref={scrollRef}
        className="absolute inset-0 z-10 overflow-y-auto"
        style={{ containerType: "inline-size", background: "#1c1a18" }}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* Dot-pattern background */}
        <div
          aria-hidden
          className="fixed inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(218,197,167,0.08) 1px, transparent 1px)",
            backgroundSize: "2.8cqw 2.8cqw",
            zIndex: 0,
          }}
        />

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <div
          className="relative z-10 flex flex-col items-center text-center"
          style={{ paddingTop: "8cqw", paddingBottom: "3cqw" }}
        >
          <p
            className="text-[#dac5a7] uppercase mb-[1cqw]"
            style={{
              ...SATOSHI,
              fontSize: "0.54cqw",
              letterSpacing: "0.25cqw",
              opacity: 0.5,
            }}
          >
            Shivam Patel
          </p>

          {/* TextFlippingBoard for hero title */}
          <div
            className="dark w-full"
            style={{ padding: "0 5cqw", marginBottom: "2cqw" }}
          >
            <TextFlippingBoard
              text="ABOUT"
              duration={1.4}
              className="!bg-[#272625] !shadow-none border border-[rgba(218,197,167,0.08)]"
            />
          </div>

          <p
            className="text-[#dac5a7]"
            style={{ ...DM_SANS_LIGHT, fontSize: "1.2cqw", opacity: 0.5 }}
          >
            UX Engineer · Design Systems · Music Technology
          </p>
        </div>

        {/* ── Bio + Music Player ─────────────────────────────────────────── */}
        <div
          className="relative z-10"
          style={{ padding: "0 8.2cqw", marginBottom: "5cqw" }}
        >
          <div className="relative">
            {/* Bio text */}
            <p
              className="text-[#dac5a7] leading-[1.75]"
              style={{
                ...DM_SANS_LIGHT,
                fontSize: "1.14cqw",
                maxWidth: "58cqw",
              }}
            >
              {BIO}
            </p>

            {/* Music Player — floats to the right */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
              }}
            >
              <MusicPlayer />
            </div>
          </div>
        </div>

        {/* ── Workflow image ─────────────────────────────────────────────── */}
        <div
          className="relative z-10"
          style={{ padding: "0 8.2cqw", marginBottom: "2cqw" }}
        >
          <div
            style={{
              width: "100%",
              height: "32cqw",
              background: "#272625",
              border: "0.15cqw solid rgba(218,197,167,0.1)",
              borderRadius: "2cqw",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1400&q=80"
              alt="Workflow"
              className="w-full h-full object-cover opacity-60"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 60%, #1c1a18 100%)",
              }}
            />
          </div>
        </div>

        <div
          className="relative z-10"
          style={{ padding: "0 8.2cqw", marginBottom: "5cqw" }}
        >
          <p
            className="text-[#928573]"
            style={{ ...DM_SANS_LIGHT, fontSize: "0.9cqw", fontStyle: "italic" }}
          >
            And that gets into my workflow...
          </p>
        </div>

        {/* ── Second bio paragraph ───────────────────────────────────────── */}
        <div
          className="relative z-10"
          style={{ padding: "0 8.2cqw", marginBottom: "6cqw" }}
        >
          <p
            className="text-[#dac5a7] leading-[1.75]"
            style={{
              ...DM_SANS_LIGHT,
              fontSize: "1.14cqw",
              maxWidth: "70cqw",
            }}
          >
            {BIO}
          </p>
        </div>

        {/* ── Skills ─────────────────────────────────────────────────────── */}
        <div
          className="relative z-10"
          style={{ padding: "0 8.2cqw", marginBottom: "5cqw" }}
        >
          {/* Section heading */}
          <h2
            className="text-[#dac5a7]"
            style={{
              ...FIGTREE,
              fontSize: "2.3cqw",
              fontWeight: 700,
              marginBottom: "2.5cqw",
            }}
          >
            Skills
          </h2>

          {/* Design Tools row */}
          <p
            className="text-[#928573] uppercase mb-[1.5cqw]"
            style={{
              ...FIGTREE,
              fontSize: "0.6cqw",
              letterSpacing: "0.15cqw",
            }}
          >
            Design Tools
          </p>
          <div className="flex" style={{ gap: "2cqw", marginBottom: "3cqw" }}>
            <ToolTile label="Figma" icon={<SiFigma />} />
            <ToolTile label="Sketch" icon={<SiSketch />} />
            <ToolTile
              label="Adobe XD"
              icon={
                <span style={{ ...DOTO_BOLD, fontSize: "1.1cqw" }}>XD</span>
              }
            />
            <ToolTile
              label="InVision"
              icon={
                <span style={{ ...DOTO_BOLD, fontSize: "1.1cqw" }}>IN</span>
              }
            />
            <ToolTile
              label="Axure RP"
              icon={
                <span style={{ ...DOTO_BOLD, fontSize: "1.1cqw" }}>AX</span>
              }
            />
          </div>

          {/* Dev Tools row */}
          <p
            className="text-[#928573] uppercase mb-[1.5cqw]"
            style={{
              ...FIGTREE,
              fontSize: "0.6cqw",
              letterSpacing: "0.15cqw",
            }}
          >
            Development
          </p>
          <div className="flex" style={{ gap: "2cqw", marginBottom: "3cqw" }}>
            <ToolTile label="Next.js" icon={<SiNextdotjs />} />
            <ToolTile label="TypeScript" icon={<SiTypescript />} />
            <ToolTile label="React" icon={<SiReact />} />
            <ToolTile label="Tailwind" icon={<SiTailwindcss />} />
            <ToolTile label="Vercel" icon={<SiVercel />} />
          </div>

          {/* Design & Research pills */}
          <p
            className="text-[#928573] uppercase mb-[1.5cqw]"
            style={{
              ...FIGTREE,
              fontSize: "0.6cqw",
              letterSpacing: "0.15cqw",
            }}
          >
            Design &amp; Research
          </p>
          <div className="flex flex-wrap" style={{ gap: "0.8cqw" }}>
            {[
              "Product Design",
              "User Research",
              "Wireframing",
              "Prototyping",
              "User Testing",
              "Design Systems",
              "Interaction Design",
              "Visual Design",
              "Accessibility Design",
              "Design Handoff",
            ].map((skill) => (
              <SkillPill key={skill} label={skill} />
            ))}
          </div>
        </div>

        {/* ── Experience ─────────────────────────────────────────────────── */}
        <div
          className="relative z-10"
          style={{ padding: "0 8.2cqw", marginBottom: "6cqw" }}
        >
          <h2
            className="text-[#dac5a7]"
            style={{
              ...FIGTREE,
              fontSize: "2.3cqw",
              fontWeight: 700,
              marginBottom: "2.5cqw",
            }}
          >
            Experience
          </h2>

          <div
            style={{
              background: "#272625",
              border: "0.1cqw solid rgba(218,197,167,0.1)",
              borderRadius: "1.5cqw",
              overflow: "hidden",
            }}
          >
            {EXPERIENCE.map((exp, i) => (
              <ExperienceRow
                key={i}
                {...exp}
                isLast={i === EXPERIENCE.length - 1}
              />
            ))}
          </div>
        </div>

        {/* ── Living on the outside ──────────────────────────────────────── */}
        <div
          className="relative z-10"
          style={{ padding: "0 8.2cqw", marginBottom: "2cqw" }}
        >
          <h2
            className="text-[#dac5a7]"
            style={{
              ...FIGTREE,
              fontSize: "2.3cqw",
              fontWeight: 700,
            }}
          >
            Living on the outside
          </h2>
        </div>
        <div className="relative z-10" style={{ marginBottom: "6cqw" }}>
          <GalleryParallaxColumns
            images={PHOTOS}
            backgroundColor="#1c1a18"
            columnCount={3}
          />
        </div>

        {/* ── Footer ────────────────────────────────────────────────────── */}
        <div
          className="relative z-10 w-full"
          style={{ background: "#272625" }}
        >
          <MarqueeBanner />

          {/* Closing copy */}
          <div
            className="flex flex-col items-center text-center"
            style={{ padding: "6.25cqw 18cqw 4cqw" }}
          >
            <p
              className="text-[#dac5a7] uppercase mb-[0.33cqw]"
              style={{
                ...FIGTREE,
                fontSize: "0.54cqw",
                letterSpacing: "0.062cqw",
              }}
            >
              Shivam Patel
            </p>

            <div
              className="text-[#dac5a7] leading-none text-center"
              style={{ ...DM_SANS_LIGHT, fontSize: "5.27cqw" }}
            >
              <p className="mb-0">Thanks for wandering through</p>
              <p>
                <span>my </span>
                <span style={DAI_BANNA_LIGHT_ITALIC}>digital canvas.</span>
              </p>
            </div>

            <button
              onClick={onBack}
              className="flex items-center gap-2 transition-opacity hover:opacity-80 active:scale-95 mt-[2.19cqw]"
              style={{
                background: "#dac5a7",
                borderRadius: "0.08cqw",
                padding: "0.41cqw 0.66cqw",
                ...SATOSHI,
                fontSize: "0.54cqw",
                letterSpacing: "0.062cqw",
                color: "#0e0e0e",
                textTransform: "uppercase",
              }}
            >
              <span>Back home</span>
              <HiArrowUpRight style={{ width: "0.74cqw", height: "0.74cqw" }} />
            </button>
          </div>

          {/* Bottom bar */}
          <div
            className="flex items-center justify-between"
            style={{ padding: "0 1.24cqw 1.07cqw" }}
          >
            <span
              className="text-[#939292] uppercase"
              style={{
                ...FIGTREE,
                fontSize: "0.54cqw",
                letterSpacing: "0.062cqw",
              }}
            >
              Shivam Patel
            </span>
            <span
              className="uppercase"
              style={{
                ...FIGTREE,
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
