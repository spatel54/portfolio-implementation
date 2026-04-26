"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoMdDocument } from "react-icons/io";
import { HiArrowUpRight } from "react-icons/hi2";
import { RiHand, RiImage2Fill } from "react-icons/ri";
import {
  MousePointer2,
  Layers2,
  Pen,
  Type,
  Image,
  MessageSquare,
  Minus,
  Plus,
  HelpCircle,
  X,
  Menu,
} from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import DotGrid from "../../DotGrid";
import { WorksScreen } from "./WorksScreen";
import { AboutScreen } from "./AboutScreen";

// ─── Figma Asset URLs (7-day TTL) ─────────────────────────────────────────────
const PHOTO_URL =
  "https://www.figma.com/api/mcp/asset/c7b9f403-7ef4-4653-a247-9e84b80dbb42";
const MICROSOFT_LOGO_URL =
  "https://www.figma.com/api/mcp/asset/b64d37af-68c8-4cd4-8064-3479643410d4";
const COUNTRY_FINANCIAL_URL =
  "https://www.figma.com/api/mcp/asset/26470bb1-d681-4def-950b-5986d9ee8e80";
const ROBLOX_LOGO_URL =
  "https://www.figma.com/api/mcp/asset/516f6aff-c005-47e9-b830-ed44d50391e7";
const WORK_IMAGE_URL =
  "https://www.figma.com/api/mcp/asset/8c26d90e-e34a-40da-bb36-8186885cd7d0";
const LOGO_ICON_URL =
  "https://www.figma.com/api/mcp/asset/e07c748e-390a-4625-9b8b-9b1cfcaf9942";
const SPARKLE_ICON_URL =
  "https://www.figma.com/api/mcp/asset/c4656e74-86b3-4a4e-90eb-d5e4f301cf26";
const DOTS_ICON_URL =
  "https://www.figma.com/api/mcp/asset/d7575fc3-3eb1-4072-aea0-4dcf35f5724e";
const PHOTO_BROOKLYN_URL =
  "https://www.figma.com/api/mcp/asset/5bee44f3-2677-4912-aaef-63288182d750";
const COMMENTS_OVERLAY_URL =
  "https://www.figma.com/api/mcp/asset/28917a50-9ef9-4a55-a24a-69e85f75038d";
const WORKS_SCROLLBAR_URL =
  "https://www.figma.com/api/mcp/asset/d7c49410-7012-4fe2-a937-8a0f5549790b";
const HATCH_LOGO_URL =
  "https://www.figma.com/api/mcp/asset/a165e22b-572a-42ce-8819-e84da8567497";

// ─── Font shorthand ────────────────────────────────────────────────────────────
const DOT_GOTHIC: React.CSSProperties = { fontFamily: "'DotGothic16', monospace" };
const FIGTREE: React.CSSProperties = { fontFamily: "'Figtree', sans-serif" };
const DOTO: React.CSSProperties = { fontFamily: "'Doto', monospace" };
const DM_MONO: React.CSSProperties = { fontFamily: "'DM Mono', monospace" };
const DAI_BANNA: React.CSSProperties = { fontFamily: "'Dai Banna SIL', serif" };

// ═══════════════════════════════════════════════════════════════════════════════
// VERTICAL TOOLBAR
// ═══════════════════════════════════════════════════════════════════════════════

const TOOLBAR_TOOLS = [
  { icon: MousePointer2, label: "Select", active: true },
  { icon: Layers2, label: "Layers" },
  { icon: Pen, label: "Pen" },
  { icon: Type, label: "Text" },
  { icon: Image, label: "Image" },
  { icon: MessageSquare, label: "Comment" },
];

interface VerticalToolbarProps {
  zoom: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onZoomReset: () => void;
}

function VerticalToolbar({ zoom, onZoomIn, onZoomOut, onZoomReset }: VerticalToolbarProps) {
  const [active, setActive] = useState(0);
  return (
    <div className="flex flex-col items-center gap-2 self-stretch py-2">
      {/* Main tool group */}
      <div
        className="relative flex flex-col gap-2 p-3 rounded-[34px]"
        style={{
          border: "1.4px solid rgba(255,255,255,0.4)",
          backdropFilter: "blur(50px)",
          background: "rgba(128,128,128,0.15)",
        }}
      >
        {TOOLBAR_TOOLS.map((tool, i) => {
          const Icon = tool.icon;
          const isActive = active === i;
          return (
            <button
              key={tool.label}
              aria-label={tool.label}
              onClick={() => setActive(i)}
              className="relative flex items-center justify-center rounded-full size-11 transition-colors"
              style={
                isActive
                  ? {
                      background: "rgba(255,255,255,0.07)",
                      boxShadow: "inset 0 0 0 1px rgba(94,94,94,0.18)",
                    }
                  : {}
              }
            >
              <Icon
                size={18}
                className={isActive ? "text-white" : "text-[#545454]"}
              />
            </button>
          );
        })}
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Zoom controls — vertical: +, %, − */}
      <div
        className="relative flex flex-col items-center gap-1 p-2 rounded-[24px]"
        style={{
          border: "1.4px solid rgba(255,255,255,0.4)",
          backdropFilter: "blur(50px)",
          background: "rgba(128,128,128,0.15)",
        }}
      >
        <button
          aria-label="Zoom in"
          onClick={onZoomIn}
          className="flex items-center justify-center rounded-full size-10 hover:bg-white/5 transition-colors"
        >
          <Plus size={16} className="text-[#827a72]" />
        </button>

        {/* Live zoom percentage — click to reset to 100% */}
        <button
          aria-label="Reset zoom to 100%"
          onClick={onZoomReset}
          className="flex items-center justify-center rounded-full size-10 hover:bg-white/5 transition-colors"
          title="Reset zoom"
        >
          <span
            className="text-[10px] leading-none tabular-nums"
            style={{ ...DM_MONO, color: "rgba(130,122,114,0.9)" }}
          >
            {Math.round(zoom * 100)}%
          </span>
        </button>

        <button
          aria-label="Zoom out"
          onClick={onZoomOut}
          className="flex items-center justify-center rounded-full size-10 hover:bg-white/5 transition-colors"
        >
          <Minus size={16} className="text-[#827a72]" />
        </button>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CANVAS CHROME (title, battery, zoom — inside the canvas frame)
// ═══════════════════════════════════════════════════════════════════════════════

function CanvasTitle() {
  return (
    <div
      className="flex items-center gap-3 px-5 py-3 rounded-[18px] absolute top-5 left-5 z-20"
      style={{
        backdropFilter: "blur(25px)",
        background: "#302f2e",
        border: "0.5px solid rgba(255,255,255,0.4)",
      }}
    >
      <span className="text-[#dac5a7] text-[15px] leading-none" style={DOT_GOTHIC}>
        Digital Canvas
      </span>
      <img src={SPARKLE_ICON_URL} alt="" className="size-4 opacity-90" />
    </div>
  );
}

function BatteryIndicator() {
  return (
    <div className="flex items-center gap-[14px] absolute top-5 right-5 z-20">
      {/*
        Figma: 128×61px container, icon 36×30.67px centered.
        Scaled to ~55%: 70×34px container, icon 20×17px.
        Explicit width+height on the <img> prevents Tailwind's max-w-full
        from distorting the aspect ratio.
      */}
      <div
        className="relative flex items-center justify-center rounded-[14px]"
        style={{
          width: 70,
          height: 44,
          backdropFilter: "blur(50px)",
          background: "#272625",
        }}
      >
        <img
          src={DOTS_ICON_URL}
          alt=""
          style={{ display: "block", width: 28, height: 24, objectFit: "contain" }}
        />
      </div>
      {/* Battery pill */}
      <div className="flex items-center gap-1">
        <div
          className="relative flex items-center rounded-[14px] overflow-hidden"
          style={{ border: "1px solid #e0ffd3" }}
        >
          <div
            aria-hidden
            className="absolute inset-0 mix-blend-luminosity pointer-events-none rounded-[14px]"
            style={{ backdropFilter: "blur(50px)", background: "#272625" }}
          />
          <div
            className="relative z-10 flex items-center justify-center px-4 py-[14px] rounded-[12px]"
            style={{ background: "#e0ffd3" }}
          >
            <span className="text-[#272625] text-[15px] leading-none" style={DOT_GOTHIC}>
              60%
            </span>
          </div>
          <div className="w-10 h-full" />
        </div>
        <div
          className="h-[26px] w-[13px] rounded-[4px]"
          style={{
            border: "1px solid #e0ffd3",
            backdropFilter: "blur(50px)",
            background: "rgba(39,38,37,0.8)",
          }}
        />
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// BENTO CARDS
// ═══════════════════════════════════════════════════════════════════════════════

function WindowCard({
  title,
  titleContent,
  children,
  className = "",
}: {
  title: string;
  titleContent?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative rounded-[32px] overflow-hidden flex flex-col ${className}`}>
      {/* Outer frosted glass */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none rounded-[32px]"
        style={{
          background: "#312f2b",
          backdropFilter: "blur(50px)",
          mixBlendMode: "luminosity",
        }}
      />
      {/* Tab title */}
      <div className="absolute top-[14px] left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 whitespace-nowrap">
        {titleContent ?? (
          <span className="text-[#827a72] text-[12px]" style={DOT_GOTHIC}>
            {title}
          </span>
        )}
      </div>
      {/* Inner panel */}
      <div
        className="absolute bottom-0 left-0 right-0 top-[44px] overflow-hidden rounded-[32px] flex flex-col"
        style={{
          background: "#272625",
          backdropFilter: "blur(15px)",
          border: "1px solid rgba(218,197,167,0.15)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

// ─── cqw helpers: all values derived from Figma's 895px card width ────────────
// formula: Figma_px / 895 * 100  =  cqw percentage
const C = {
  // outer chrome
  pt:        "2.68cqw",   // paddingTop   24px
  gapOuter:  "2.57cqw",   // gap          23px
  radius:    "4.47cqw",   // border-radius 40px
  // file tab
  fileGap:   "0.56cqw",
  iconSize:  "2.68cqw",
  fileName:  "1.79cqw",
  // post panel
  postRadius:"4.47cqw",
  // Increased vertical padding for better breathing room
  postPadV:  "8cqw",      // ~48px at 600px — improved vertical spacing
  postPadH:  "6cqw",
  // content stack
  gapGrid:   "3.5cqw",    // gap between (title+desc) and buttons
  gapTD:     "3cqw",      // gap between title and description
  // title — reduced slightly from Figma 11.17cqw so it comfortably stays one line at smaller sizes
  titleFont: "8.5cqw",
  // description — increased for better readability
  descFont:  "4.2cqw",    // ~15px at 350px card — improved readability
  // buttons
  gapBtns:   "2.35cqw",
  btnH:      "8.49cqw",
  btnR:      "2.57cqw",
  btnPL:     "1.79cqw",
  btnPR:     "1.34cqw",
  btnGap:    "1.12cqw",
  btnFont:   "3.35cqw",   // min 14px enforced in component
  btnIcon:   "3.8cqw",
  wView:     "29.05cqw",
  wSayHi:    "17.43cqw",
} as const;

function HeroCard() {
  return (
    <div
      className="relative flex flex-col items-center w-full h-full overflow-hidden"
      style={{ paddingTop: C.pt, gap: C.gapOuter, borderRadius: C.radius }}
    >
      {/* Luminosity frosted glass overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "#312f2b", backdropFilter: "blur(50px)", mixBlendMode: "luminosity", borderRadius: C.radius }}
      />

      {/* File info */}
      <div className="relative z-10 flex items-center shrink-0" style={{ gap: C.fileGap }}>
        <IoMdDocument
          className="text-[#827a72] shrink-0"
          style={{ width: C.iconSize, height: C.iconSize }}
        />
        <span
          className="text-[#827a72] leading-none"
          style={{ ...DM_MONO, fontSize: C.fileName, fontWeight: 300 }}
        >
          hero.page
        </span>
      </div>

      {/* Post panel — flex centering with generous padding for breathing room */}
      <div
        className="relative z-10 flex-1 w-full flex flex-col items-center justify-center overflow-hidden"
        style={{
          background: "#272625",
          border: "1px solid rgba(218,197,167,0.15)",
          backdropFilter: "blur(15px)",
          borderRadius: C.postRadius,
          padding: `${C.postPadV} ${C.postPadH}`,
        }}
      >
        {/* Post Content */}
        <div
          className="flex flex-col items-center text-center w-full"
          style={{ gap: C.gapGrid }}
        >
          {/* Grid: title + description */}
          <div className="flex flex-col items-center w-full" style={{ gap: C.gapTD }}>
            <h1
              className="text-[#dac5a7] text-center w-full"
              style={{ lineHeight: "90%", fontSize: C.titleFont }}
            >
              <span style={DOT_GOTHIC}>Design Engineer</span>
              {` `}
              <span style={{ fontFamily: "'Dai Banna SIL', serif", fontWeight: 400 }}>
                &amp; UX Architect
              </span>
            </h1>

            <p
              className="text-center w-full"
              style={{
                ...FIGTREE,
                fontWeight: 300,
                fontSize: `clamp(14px, ${C.descFont}, 18px)`,
                lineHeight: "155%",
                color: "rgba(218,197,167,0.6)",
              }}
            >
              Interested in explainable AI, conversational agents and advanced context
              engineering using emerging technologies. 0--1, agile, builder oriented
              mindset. Currently designing for the Siebel Center for Design.
            </p>
          </div>

          {/* Buttons — centered to full card width */}
          <div className="flex items-center justify-center w-full" style={{ gap: C.gapBtns }}>
            {/* View my work */}
            <button
              className="group relative flex items-center overflow-hidden"
              style={{
                background: "#df7246",
                border: "0.5px solid rgba(255,255,255,0.4)",
                backdropFilter: "blur(25px)",
                width: C.wView,
                height: C.btnH,
                borderRadius: C.btnR,
                paddingLeft: C.btnPL,
                paddingRight: C.btnPR,
                gap: C.btnGap,
              }}
            >
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ background: "rgba(255,255,255,0.1)", borderRadius: C.btnR }}
              />
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ boxShadow: "0 0 24px 4px rgba(223,114,70,0.45)", borderRadius: C.btnR }}
              />
              <span
                className="relative z-10 text-white whitespace-nowrap"
                style={{ ...FIGTREE, fontWeight: 300, fontSize: `clamp(14px, ${C.btnFont}, 16px)` }}
              >
                View my work
              </span>
              <HiArrowUpRight
                className="relative z-10 text-white flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ width: C.btnIcon, height: C.btnIcon }}
              />
            </button>

            {/* Say Hi */}
            <button
              className="group relative flex items-center overflow-hidden"
              style={{
                background: "#302e2a",
                border: "0.5px solid rgba(255,255,255,0.4)",
                backdropFilter: "blur(25px)",
                width: C.wSayHi,
                height: C.btnH,
                borderRadius: C.btnR,
                paddingLeft: C.btnPL,
                paddingRight: C.btnPR,
                gap: C.btnGap,
              }}
            >
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ background: "rgba(218,197,167,0.07)", borderRadius: C.btnR }}
              />
              <span
                className="relative z-10 text-[#dac5a7] whitespace-nowrap"
                style={{ ...FIGTREE, fontWeight: 300, fontSize: `clamp(14px, ${C.btnFont}, 16px)` }}
              >
                Say Hi
              </span>
              <RiHand
                className="relative z-10 text-[#dac5a7] flex-shrink-0 transition-transform duration-200 group-hover:rotate-12 group-hover:scale-110"
                style={{ width: C.btnIcon, height: C.btnIcon }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExperienceCard() {
  return (
    <WindowCard title="experience.jsx" className="h-full">
      <div className="flex items-center justify-center gap-8 h-full px-6">
        <img src={MICROSOFT_LOGO_URL} alt="Microsoft" className="h-6 w-auto object-contain" />
        <img src={COUNTRY_FINANCIAL_URL} alt="Country Financial" className="h-7 w-auto object-contain" />
        <img src={HATCH_LOGO_URL} alt="Hatch" className="h-8 w-auto object-contain rounded-[2px]" />
      </div>
    </WindowCard>
  );
}

function AboutCard() {
  return (
    <WindowCard
      title="about.md"
      titleContent={
        <div className="flex items-center gap-[5px]">
          <RiImage2Fill className="text-[#827a72] shrink-0" size={16} />
          <span className="text-[#827a72] text-[12px] leading-none" style={DOT_GOTHIC}>
            about.md
          </span>
        </div>
      }
      className="h-full"
    >
      <div className="flex flex-col gap-[1em] px-[5cqw] py-[4.5cqw] justify-center h-full">
        <p
          className="text-white font-bold tracking-[-0.12px]"
          style={{ ...FIGTREE, fontSize: "clamp(13px, 2.8cqw, 18px)", lineHeight: 1.5 }}
        >
          Builder. Product Owner. Design Engineer. Creative Architect.
        </p>
        <p
          className="text-[#dac5a7]"
          style={{ ...FIGTREE, fontSize: "clamp(12px, 2.6cqw, 16px)", lineHeight: 1.6 }}
        >
          Thinking in blocks allows me to see the bigger picture without losing
          sight of the details. It empowers me to build at both the macro and
          micro scale. I zoom in to perfect a single interaction, then zoom out
          to orchestrate the entire...
        </p>
      </div>
    </WindowCard>
  );
}

function PhotoCard() {
  return (
    <WindowCard
      title="shivam.png"
      titleContent={
        <div className="flex items-center gap-[5px]">
          <RiImage2Fill className="text-[#827a72] shrink-0" size={16} />
          <span className="text-[#827a72] text-[12px] leading-none" style={DOT_GOTHIC}>
            shivam.png
          </span>
        </div>
      }
      className="h-full"
    >
      {/* Photo layer with exact Figma crop */}
      <div className="relative flex-1 h-full overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            alt="Shivam"
            className="absolute max-w-none"
            style={{
              height: "461.48%",
              width: "291.02%",
              left: "-88.6%",
              top: "-172.92%",
            }}
            src={PHOTO_BROOKLYN_URL}
          />
        </div>
        {/* Comments overlay — pinned to bottom, matches Figma top-[249.61px] within 377px panel */}
        <div
          className="absolute left-0 right-0"
          style={{ height: "127.393px", bottom: 0 }}
        >
          <div className="absolute inset-[0_-1.01%_-6.28%_-1.01%]">
            <img alt="" className="block w-full h-full" src={COMMENTS_OVERLAY_URL} />
          </div>
        </div>
      </div>
    </WindowCard>
  );
}

function LinksCard() {
  return (
    <WindowCard
      title="links.html"
      titleContent={
        <div className="flex items-center gap-[5px]">
          <RiImage2Fill className="text-[#827a72] shrink-0" size={16} />
          <span className="text-[#827a72] text-[12px] leading-none" style={DOT_GOTHIC}>
            links.html
          </span>
        </div>
      }
      className="h-full"
    >
      <div className="flex items-center justify-center gap-[100px] h-full">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
          className="text-[#dac5a7]/60 hover:text-[#dac5a7] transition-colors">
          <FaLinkedinIn size={36} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
          className="text-[#dac5a7]/60 hover:text-[#dac5a7] transition-colors">
          <FaGithub size={36} />
        </a>
        <a href="mailto:shivam@example.com" aria-label="Email"
          className="text-[#dac5a7]/60 hover:text-[#dac5a7] transition-colors">
          <MdEmail size={36} />
        </a>
      </div>
    </WindowCard>
  );
}

export interface WorkItem {
  title: string;
  description: string;
  image: string;
  date: string;
  company: string;
  role: string;
  duration: string;
  tags: string[];
}

export const WORKS: WorkItem[] = [
  {
    title: "Reimagining Microsoft Onboarding Experience with Conversational AI",
    description:
      'I explored the currently under-explored space of agentic onboarding, aiming to reimagine the first contact between human and digital intelligence. Utilizing an AI-first workflow—from deep research and ideation to "vibe coding" and prototyping, my goal was to develop a delightful, empowering, and personalized onboarding conversation, moving away from forced, traditional device onboarding steps.',
    image: WORK_IMAGE_URL,
    date: "2025 August",
    company: "Microsoft",
    role: "Product Designer",
    duration: "12 weeks",
    tags: ["Agentic OS", "Voice Simulation", "Motion Design", "Multimodal"],
  },
  {
    title: "Building Inclusive Experiences with Comprehensive Design Systems",
    description:
      "I concentrated on creating an inclusive design system that prioritizes accessibility, ensuring that products are usable by everyone, including users with disabilities. Through collaborative workshops and testing, I developed guidelines that inform design decisions and promote best practices across teams.",
    image: WORK_IMAGE_URL,
    date: "2024 April",
    company: "Microsoft",
    role: "Product Designer",
    duration: "8 weeks",
    tags: ["Design Systems", "User Interface", "Accessibility Features", "Responsive"],
  },
  {
    title: "Reimagining Microsoft Onboarding Experience with Conversational AI",
    description:
      'I explored the currently under-explored space of agentic onboarding, aiming to reimagine the first contact between human and digital intelligence. Utilizing an AI-first workflow—from deep research and ideation to "vibe coding" and prototyping, my goal was to develop a delightful, empowering, and personalized onboarding conversation, moving away from forced, traditional device onboarding steps.',
    image: WORK_IMAGE_URL,
    date: "2025 August",
    company: "Microsoft",
    role: "Product Designer",
    duration: "12 weeks",
    tags: ["Agentic OS", "Voice Simulation", "Motion Design", "Multimodal"],
  },
  {
    title: "Building Inclusive Experiences with Comprehensive Design Systems",
    description:
      "I concentrated on creating an inclusive design system that prioritizes accessibility, ensuring that products are usable by everyone, including users with disabilities. Through collaborative workshops and testing, I developed guidelines that inform design decisions and promote best practices across teams.",
    image: WORK_IMAGE_URL,
    date: "2024 April",
    company: "Microsoft",
    role: "Product Designer",
    duration: "8 weeks",
    tags: ["Design Systems", "User Interface", "Accessibility Features", "Responsive"],
  },
];

function WorksCard() {
  return (
    <WindowCard
      title="works.md"
      titleContent={
        <div className="flex items-center gap-[5px]">
          <RiImage2Fill className="text-[#827a72] shrink-0" size={16} />
          <span className="text-[#827a72] text-[12px] leading-none" style={DOT_GOTHIC}>
            works.md
          </span>
        </div>
      }
      className="h-full"
    >
      {/* Scrollbar dots indicator — pinned right edge, vertically centred */}
      <img
        src={WORKS_SCROLLBAR_URL}
        alt=""
        aria-hidden
        className="absolute right-[-5px] top-1/2 -translate-y-1/2 z-20 pointer-events-none"
        style={{ width: 10, height: 38 }}
      />

      {/* Stacked work cards — padding scales with container width via cqw */}
      <div
        className="relative flex flex-col overflow-hidden h-full"
        style={{ paddingTop: "10cqw", paddingLeft: "5cqw", paddingRight: "5cqw" }}
      >
        {WORKS.map((work, i) => (
          <div
            key={i}
            className="relative bg-[#272625] rounded-[40px] overflow-hidden flex-shrink-0 border border-[rgba(218,197,167,0.15)]"
            style={{
              height: "clamp(180px, 40cqw, 270px)",
              marginBottom: "calc(-1 * clamp(120px, 27cqw, 190px))",
              zIndex: WORKS.length - i,
            }}
          >
            {/* Image — 50% of card height, full-width */}
            <div
              className="absolute overflow-hidden border border-[rgba(218,197,167,0.15)]"
              style={{ top: -1, left: -1, right: -1, height: "49%", borderRadius: 2 }}
            >
              <img
                src={work.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
            </div>

            {/* Text — starts just below image with overflow handling */}
            <div
              className="absolute flex flex-col overflow-hidden"
              style={{ top: "50%", left: "4.5cqw", right: "4.5cqw", bottom: "3cqw", gap: "2cqw" }}
            >
              <h3
                className="text-[#dac5a7]"
                style={{
                  ...FIGTREE,
                  fontWeight: 400,
                  fontSize: "clamp(14px, 3.2cqw, 22px)",
                  lineHeight: 1.4,
                  letterSpacing: "-0.12px",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {work.title}
              </h3>
              <p
                style={{
                  ...FIGTREE,
                  fontWeight: 400,
                  fontSize: "clamp(11px, 2.4cqw, 15px)",
                  lineHeight: 1.5,
                  color: "#928573",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {work.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </WindowCard>
  );
}

function AnalogClock({ time }: { time: Date }) {
  const h = time.getHours() % 12;
  const m = time.getMinutes();
  const s = time.getSeconds();
  const hourDeg = h * 30 + m * 0.5;
  const minuteDeg = m * 6 + s * 0.1;
  const secondDeg = s * 6;
  const ticks = Array.from({ length: 60 }, (_, i) => i);
  return (
    <svg viewBox="0 0 220 220" className="w-full h-full" aria-label="Analog clock">
      <circle cx="110" cy="110" r="108" fill="none" stroke="#2a2826" strokeWidth="1" />
      {ticks.map((i) => {
        const isHour = i % 5 === 0;
        const rad = ((i * 6) * Math.PI) / 180;
        const r1 = isHour ? 94 : 100;
        return (
          <line key={i}
            x1={110 + r1 * Math.sin(rad)} y1={110 - r1 * Math.cos(rad)}
            x2={110 + 107 * Math.sin(rad)} y2={110 - 107 * Math.cos(rad)}
            stroke="#827a72" strokeWidth={isHour ? 3 : 1.5} strokeLinecap="round"
          />
        );
      })}
      <line x1="110" y1="110"
        x2={110 + 55 * Math.sin((hourDeg * Math.PI) / 180)}
        y2={110 - 55 * Math.cos((hourDeg * Math.PI) / 180)}
        stroke="#dac5a7" strokeWidth="4" strokeLinecap="round" />
      <line x1="110" y1="110"
        x2={110 + 75 * Math.sin((minuteDeg * Math.PI) / 180)}
        y2={110 - 75 * Math.cos((minuteDeg * Math.PI) / 180)}
        stroke="#dac5a7" strokeWidth="3" strokeLinecap="round" />
      <line x1="110" y1="110"
        x2={110 + 85 * Math.sin((secondDeg * Math.PI) / 180)}
        y2={110 - 85 * Math.cos((secondDeg * Math.PI) / 180)}
        stroke="#df7246" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="110" cy="110" r="4" fill="#dac5a7" />
    </svg>
  );
}

function ClockWidget() {
  const [time, setTime] = useState<Date | null>(null);
  useEffect(() => {
    let active = true;
    setTime(new Date());
    const id = setInterval(() => { if (active) setTime(new Date()); }, 1000);
    return () => { active = false; clearInterval(id); };
  }, []);

  const DAY_NAMES = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const MONTH_NAMES = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const hh = time ? time.getHours().toString().padStart(2, "0") : "--";
  const mm = time ? time.getMinutes().toString().padStart(2, "0") : "--";
  const day = time ? DAY_NAMES[time.getDay()] : "---";
  const dateStr = time ? `${time.getDate()} ${MONTH_NAMES[time.getMonth()]} ${time.getFullYear()}` : "";

  return (
    <WindowCard
      title="widget"
      titleContent={
        <div className="flex items-center gap-[5px]">
          <RiImage2Fill className="text-[#827a72] shrink-0" size={16} />
          <span className="text-[#827a72] text-[12px] leading-none" style={DOT_GOTHIC}>
            widget
          </span>
        </div>
      }
      className="h-full"
    >
      {/* Layout: clock centred at top, time/date below — all cqw so it scales with column width */}
      <div className="flex flex-col items-center h-full gap-0" style={{ paddingTop: "5%", paddingBottom: "3%" }}>
        {/* Analog clock — width drives size via cqw; aspect-ratio keeps it square */}
        <div style={{ width: "min(80cqw, 80%)", aspectRatio: "1", flexShrink: 0 }}>
          {time ? (
            <AnalogClock time={time} />
          ) : (
            <svg viewBox="0 0 220 220" className="w-full h-full" aria-hidden>
              <circle cx="110" cy="110" r="108" fill="none" stroke="#2a2826" strokeWidth="1" />
            </svg>
          )}
        </div>

        {/* Time + date block */}
        <div className="flex flex-col items-center mt-auto px-4" style={{ gap: "3cqw" }}>
          {/* Digital time — cqw-scaled Doto, hours orange */}
          <div style={DOTO}>
            <span style={{ fontSize: "clamp(28px, 10cqw, 72px)", lineHeight: 1, color: "#df7246" }}>{hh}</span>
            <span style={{ fontSize: "clamp(28px, 10cqw, 72px)", lineHeight: 1, color: "#ffffff" }}>:{mm}</span>
          </div>

          {/* Date + location */}
          <div className="flex flex-col items-center" style={{ gap: "1.5cqw" }}>
            {/* Date row */}
            <div className="flex items-center" style={{ gap: "4cqw" }}>
              <span style={{ ...DOTO, fontSize: "clamp(11px, 3.5cqw, 20px)", color: "#c7bd00", lineHeight: 1, whiteSpace: "nowrap" }}>
                {day}
              </span>
              <div style={{ width: 1.5, height: "1em", background: "#c7bd00", opacity: 0.5 }} />
              <span style={{ ...DOTO, fontSize: "clamp(11px, 3.5cqw, 20px)", color: "#c7bd00", lineHeight: 1, whiteSpace: "nowrap" }}>
                {dateStr}
              </span>
            </div>
            {/* Location row */}
            <div className="flex items-center" style={{ gap: "1cqw" }}>
              <MdOutlineLocationOn style={{ color: "#c7bd00", width: "clamp(14px, 3.5cqw, 22px)", height: "clamp(14px, 3.5cqw, 22px)" }} />
              <span style={{ ...DOTO, fontSize: "clamp(11px, 3.5cqw, 20px)", color: "#c7bd00", lineHeight: 1, whiteSpace: "nowrap" }}>
                Illinois, USA
              </span>
            </div>
          </div>
        </div>
      </div>
    </WindowCard>
  );
}

// ─── Improved testimonial card with flex layout and better spacing ────────────
// Equal-width cards with proper padding and responsive text sizing
function TestimonialFigmaCard({ quote, author, role, filename }: { quote: string; author: string; role: string; filename: string }) {
  return (
    <div className="relative rounded-[40px] w-full h-full flex flex-col">
      {/* Luminosity frosted-glass overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none rounded-[40px]"
        style={{ background: "#312f2b", backdropFilter: "blur(50px)", mixBlendMode: "luminosity" }}
      />

      {/* Title tab */}
      <div className="absolute top-[17px] left-1/2 -translate-x-1/2 flex items-center gap-[5px] z-20 whitespace-nowrap">
        <RiImage2Fill className="text-[#827a72] shrink-0" size={16} />
        <span className="text-[#827a72] text-[14px] leading-none" style={DOT_GOTHIC}>
          {filename}
        </span>
      </div>

      {/* Inner post panel — flex layout for better content distribution */}
      <div
        className="absolute bottom-0 left-0 right-0 top-[44px] rounded-[40px] flex flex-col"
        style={{
          background: "#272625",
          backdropFilter: "blur(15px)",
          border: "1px solid rgba(218,197,167,0.15)",
        }}
      >
        {/* Quote text — flex-1 with padding for breathing room */}
        <div className="flex-1 flex items-start px-7 pt-6 pb-4 overflow-hidden">
          <p
            className="text-[#dac5a7] w-full"
            style={{
              ...FIGTREE,
              fontWeight: 400,
              fontSize: "clamp(18px, 3.5cqw, 26px)",
              lineHeight: 1.5,
              display: "-webkit-box",
              WebkitLineClamp: 7,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            &ldquo;{quote}&rdquo;
          </p>
        </div>

        {/* Author info — fixed at bottom with proper spacing */}
        <div className="flex flex-col gap-1 px-7 pb-5 pt-2">
          <p
            className="text-white"
            style={{ ...FIGTREE, fontWeight: 400, fontSize: "clamp(14px, 2.2cqw, 16px)", lineHeight: 1.4 }}
          >
            {author}
          </p>
          <p
            style={{ ...FIGTREE, fontWeight: 300, fontSize: "clamp(13px, 2cqw, 15px)", lineHeight: 1.4, color: "#928573" }}
          >
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// NAVBAR — sits below the canvas, outside it
// ═══════════════════════════════════════════════════════════════════════════════

const NAV_ITEMS = ["Home", "Work", "About", "Contact", "Resume"];

function NavDock({ onNav, activeScreen }: { onNav: (item: string) => void; activeScreen: string }) {
  return (
    <div className="flex items-center gap-6 px-7 py-3 rounded-[28px] relative self-center shrink-0">
      {/* Frosted glass bg */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-[28px] pointer-events-none"
        style={{ backdropFilter: "blur(52px)", background: "rgba(255,255,255,0.1)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 rounded-[28px] pointer-events-none"
        style={{ boxShadow: "inset 0 -1px 1px rgba(255,255,255,0.1), inset 0 1px 1px rgba(255,255,255,0.25)" }}
      />
      {/* Logo */}
      <img src={LOGO_ICON_URL} alt="Logo" className="h-4 w-auto relative z-10 opacity-80" />
      {/* Links */}
      <div className="flex items-center gap-5 relative z-10">
        {NAV_ITEMS.map((item, i) => {
          const isActive =
            (item === "Work" && activeScreen === "works") ||
            (item === "Home" && activeScreen === "home") ||
            (item === "About" && activeScreen === "about");
          return (
            <div key={item} className="flex items-center gap-5">
              <button
                className="text-sm hover:text-white transition-colors whitespace-nowrap"
                style={{
                  ...FIGTREE,
                  color: isActive ? "#ffffff" : "#dac5a7",
                  fontWeight: isActive ? 500 : 400,
                }}
                onClick={() => onNav(item)}
              >
                {item}
              </button>
              {i < NAV_ITEMS.length - 1 && (
                <span className="text-[rgba(218,197,167,0.3)] text-xs">|</span>
              )}
            </div>
          );
        })}
      </div>
      {/* Theme pill */}
      <div
        className="relative flex items-center gap-2 px-3 py-1.5 rounded-[22px] z-10"
        style={{
          border: "0.8px solid rgba(255,255,255,0.4)",
          backdropFilter: "blur(40px)",
          background: "rgba(60,60,60,0.3)",
          mixBlendMode: "luminosity",
        }}
      >
        <div className="flex -space-x-1.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-4 w-5 rounded-[3px] overflow-hidden border border-white/60">
              <img src={PHOTO_URL} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
        <span className="text-white text-xs" style={FIGTREE}>Sunset</span>
        <svg viewBox="0 0 24 24" className="size-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 16H17M3 12H21M7 8H17" />
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// BENTO GRID — scrolls inside the canvas
// ═══════════════════════════════════════════════════════════════════════════════

const TESTIMONIALS = [
  { filename: "testimonial.txt", quote: "Shivam, you jumped into a really complex, highly ambiguous project with the task of completing it using very experimental tools. What you accomplished is astounding.", author: "Pratik Mistri", role: "Principal Design Manager @ Microsoft" },
  { filename: "testimonial2.txt", quote: "Shivam, you jumped into a really complex, highly ambiguous project with the task of completing it using very experimental tools. What you accomplished is astounding.", author: "Pratik Mistri", role: "Principal Design Manager @ Microsoft" },
  { filename: "testimonial3.txt", quote: "Shivam, you jumped into a really complex, highly ambiguous project with the task of completing it using very experimental tools. What you accomplished is astounding.", author: "Pratik Mistri", role: "Principal Design Manager @ Microsoft" },
];

function BentoGrid() {
  return (
    /*
      Outer: flex-col so we can stack [primary row] + [testimonials below fold].
      overflow: visible lets testimonials spill past the canvas bottom;
      the canvas wrapper's overflow-hidden clips them — panning reveals them.
    */
    <div
      className="absolute inset-0 flex flex-col gap-3"
      style={{ padding: "76px 20px 20px 20px", overflow: "visible" }}
    >
      {/* ── Primary row: fills all available canvas height ─────────────────── */}
      <div
        style={{
          flex: 1,
          minHeight: 0,
          display: "flex",
          gap: 12,
          alignItems: "stretch",
        }}
      >
        {/*
          Left column: HeroCard → ExperienceCard → AboutCard stacked.
          Fluid width; flex children share height by original Figma ratios
          (780 : 180 : 217).
        */}
        <div
          style={{
            width: "clamp(340px, 30%, 480px)",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            minHeight: 0,
            containerType: "inline-size",
          }}
        >
          <div style={{ flex: 780, minHeight: 0 }}>
            <HeroCard />
          </div>
          <div style={{ flex: 180, minHeight: 0 }}>
            <ExperienceCard />
          </div>
          <div style={{ flex: 217, minHeight: 0 }}>
            <AboutCard />
          </div>
        </div>

        {/* Right 3 columns — fill remaining width, full height */}
        {/* Col A: Photo (421) + Links (149) stacked */}
        <div
          style={{
            flex: 398,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            containerType: "inline-size",
          }}
        >
          <div style={{ flex: 421, minHeight: 0 }}>
            <PhotoCard />
          </div>
          <div style={{ flex: 149, minHeight: 0 }}>
            <LinksCard />
          </div>
        </div>

        {/* Col B: Works */}
        <div style={{ flex: 533, minWidth: 0, minHeight: 0, containerType: "inline-size" }}>
          <WorksCard />
        </div>

        {/* Col C: Clock */}
        <div style={{ flex: 398, minWidth: 0, minHeight: 0, containerType: "inline-size" }}>
          <ClockWidget />
        </div>
      </div>

      {/* ── Testimonials — below the fold, accessible by panning down ─────── */}
      {/* All three cards now have equal flex values for consistent width */}
      <div style={{ display: "flex", gap: 12, flexShrink: 0 }}>
        <div style={{ flex: 1, minWidth: 0, maxWidth: 450, height: 409, containerType: "inline-size" }}>
          <TestimonialFigmaCard {...TESTIMONIALS[0]} />
        </div>
        <div style={{ flex: 1, minWidth: 0, maxWidth: 450, height: 409, containerType: "inline-size" }}>
          <TestimonialFigmaCard {...TESTIMONIALS[1]} />
        </div>
        <div style={{ flex: 1, minWidth: 0, maxWidth: 450, height: 409, containerType: "inline-size" }}>
          <TestimonialFigmaCard {...TESTIMONIALS[2]} />
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MOBILE — fullscreen menu overlay
// ═══════════════════════════════════════════════════════════════════════════════

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col"
      style={{ background: "#181716" }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 py-5"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        <img src={LOGO_ICON_URL} alt="Logo" className="h-5 w-auto opacity-80" />
        <button onClick={onClose} aria-label="Close menu" className="p-1">
          <X size={20} className="text-[#dac5a7]" />
        </button>
      </div>

      {/* Nav items */}
      <nav className="flex flex-col px-6 mt-4">
        {NAV_ITEMS.map((item) => (
          <button
            key={item}
            className="flex items-center justify-between py-5 text-left transition-colors hover:text-white"
            style={{
              ...FIGTREE,
              color: "rgba(218,197,167,0.7)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
            onClick={onClose}
          >
            <span className="text-2xl font-light">{item}</span>
            <HiArrowUpRight size={16} style={{ opacity: 0.35 }} />
          </button>
        ))}
      </nav>

      {/* Social links */}
      <div className="mt-auto flex items-center gap-6 px-6 pb-12">
        <a href="#" aria-label="LinkedIn">
          <FaLinkedinIn size={18} className="text-[#827a72]" />
        </a>
        <a href="#" aria-label="GitHub">
          <FaGithub size={18} className="text-[#827a72]" />
        </a>
        <a href="#" aria-label="Email">
          <MdEmail size={20} className="text-[#827a72]" />
        </a>
      </div>
    </div>
  );
}

// ─── Mobile page layout ────────────────────────────────────────────────────────

function MobilePortfolioLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="w-screen min-h-screen flex flex-col"
      style={{
        background: "#181716",
        backgroundImage:
          "radial-gradient(circle, rgba(218,197,167,0.07) 1px, transparent 1px)",
        backgroundSize: "36px 36px",
      }}
    >
      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}

      {/* Sticky top nav */}
      <nav
        className="sticky top-0 z-10 flex items-center justify-between px-5 py-4"
        style={{
          background: "rgba(24,23,22,0.85)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <img src={LOGO_ICON_URL} alt="Logo" className="h-5 w-auto opacity-80" />
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="p-1.5"
        >
          <Menu size={20} className="text-[#dac5a7]" />
        </button>
      </nav>

      {/* Hero section */}
      <section className="flex flex-col items-center text-center px-6 pt-14 pb-12 gap-7">
        {/* File chip */}
        <div
          className="flex items-center gap-2 px-3 py-1.5 rounded-full"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "0.5px solid rgba(218,197,167,0.18)",
          }}
        >
          <IoMdDocument size={13} className="text-[#827a72]" />
          <span style={DM_MONO} className="text-[#827a72] text-xs tracking-wide">
            hero.page
          </span>
        </div>

        {/* Title — fluid 11vw so it fills small screens nicely */}
        <h1
          className="text-[#dac5a7] text-center"
          style={{ fontSize: "clamp(28px, 9vw, 52px)", lineHeight: "0.9" }}
        >
          <span style={DOT_GOTHIC}>Design Engineer</span>
          {` `}
          <span style={{ fontFamily: "'Dai Banna SIL', serif", fontWeight: 400 }}>
            &amp; UX Architect
          </span>
        </h1>

        {/* Description */}
        <p
          className="text-sm leading-[1.7] max-w-[300px]"
          style={{ ...FIGTREE, fontWeight: 300, color: "rgba(218,197,167,0.55)" }}
        >
          Interested in explainable AI, conversational agents and advanced context
          engineering. 0–1, agile, builder oriented mindset. Currently designing
          for the Siebel Center for Design.
        </p>

        {/* CTA buttons — stacked on mobile */}
        <div className="flex flex-col gap-3 w-full max-w-[280px]">
          <button
            className="flex items-center justify-between px-5 py-[18px] rounded-[18px]"
            style={{
              background: "#df7246",
              border: "0.5px solid rgba(255,255,255,0.3)",
            }}
          >
            <span style={{ ...FIGTREE, fontWeight: 300 }} className="text-white text-base">
              View my work
            </span>
            <HiArrowUpRight size={18} className="text-white" />
          </button>
          <button
            className="flex items-center justify-between px-5 py-[18px] rounded-[18px]"
            style={{
              background: "#302e2a",
              border: "0.5px solid rgba(255,255,255,0.3)",
            }}
          >
            <span
              style={{ ...FIGTREE, fontWeight: 300 }}
              className="text-[#dac5a7] text-base"
            >
              Say Hi
            </span>
            <RiHand size={18} className="text-[#dac5a7]" />
          </button>
        </div>
      </section>

      {/* Bottom social bar */}
      <div
        className="flex items-center justify-center gap-7 pb-12 mt-auto"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 28 }}
      >
        <a href="#" aria-label="LinkedIn">
          <FaLinkedinIn size={18} className="text-[#827a72] hover:text-[#dac5a7] transition-colors" />
        </a>
        <a href="#" aria-label="GitHub">
          <FaGithub size={18} className="text-[#827a72] hover:text-[#dac5a7] transition-colors" />
        </a>
        <a href="#" aria-label="Email">
          <MdEmail size={20} className="text-[#827a72] hover:text-[#dac5a7] transition-colors" />
        </a>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ROOT COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

export function PortfolioHomeScreen() {
  // ── Active screen ───────────────────────────────────────────────────────────
  const [activeScreen, setActiveScreen] = useState<"home" | "works" | "about">("home");
  // Ref so the non-React wheel handler can read the live value without re-subscribing
  const activeScreenRef = useRef<"home" | "works" | "about">("home");

  const handleNav = (item: string) => {
    if (item === "Work") {
      activeScreenRef.current = "works";
      setActiveScreen("works");
    } else if (item === "Home") {
      activeScreenRef.current = "home";
      setActiveScreen("home");
    } else if (item === "About") {
      activeScreenRef.current = "about";
      setActiveScreen("about");
    }
  };

  const handleSetActiveScreen = (screen: "home" | "works" | "about") => {
    activeScreenRef.current = screen;
    setActiveScreen(screen);
  };

  // ── Canvas pan/zoom state ───────────────────────────────────────────────────
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  // Refs hold the live values so the non-React wheel handler never goes stale
  const zoomRef = useRef(1);
  const panRef = useRef({ x: 0, y: 0 });
  const isPanning = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);

  // Keep refs in sync with state
  useEffect(() => { zoomRef.current = zoom; }, [zoom]);
  useEffect(() => { panRef.current = pan; }, [pan]);

  // Wheel zoom — must be non-passive to call preventDefault
  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      // Let WorksScreen handle its own scrolling when it's active
      if (activeScreenRef.current !== "home") return;
      e.preventDefault();
      const rect = el.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const factor = e.deltaY < 0 ? 1.1 : 0.9;
      const prev = zoomRef.current;
      const next = Math.min(Math.max(prev * factor, 0.15), 5);
      const pp = panRef.current;
      const newPan = {
        x: mx - (mx - pp.x) * (next / prev),
        y: my - (my - pp.y) * (next / prev),
      };
      zoomRef.current = next;
      panRef.current = newPan;
      setZoom(next);
      setPan(newPan);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // Mouse drag — pan on left-click drag over the canvas background
  const onMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest("button, a, input, [role='button']")) return;
    isPanning.current = true;
    lastMouse.current = { x: e.clientX, y: e.clientY };
    setDragging(true);
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!isPanning.current) return;
    const dx = e.clientX - lastMouse.current.x;
    const dy = e.clientY - lastMouse.current.y;
    lastMouse.current = { x: e.clientX, y: e.clientY };
    panRef.current = { x: panRef.current.x + dx, y: panRef.current.y + dy };
    setPan({ ...panRef.current });
  }, []);

  const onMouseUp = useCallback(() => {
    isPanning.current = false;
    setDragging(false);
  }, []);

  // Toolbar callbacks
  const zoomIn = useCallback(() => {
    setZoom(prev => {
      const next = Math.min(prev * 1.2, 5);
      zoomRef.current = next;
      return next;
    });
  }, []);

  const zoomOut = useCallback(() => {
    setZoom(prev => {
      const next = Math.max(prev / 1.2, 0.15);
      zoomRef.current = next;
      return next;
    });
  }, []);

  const zoomReset = useCallback(() => {
    zoomRef.current = 1;
    panRef.current = { x: 0, y: 0 };
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  return (
    <>
      {/* ─── Mobile page layout (<md) ─────────────────────────────────────────── */}
      <div className="md:hidden">
        <MobilePortfolioLayout />
      </div>

      {/* ─── Desktop canvas layout (md+) ─────────────────────────────────────── */}
      <div
        className="hidden md:block w-screen h-screen overflow-hidden"
        style={{ background: "#181716" }}
      >
        {/* Layout: toolbar | canvas+nav */}
        <div className="absolute inset-0 flex gap-3 p-4 pl-3">

          {/* ── Left vertical toolbar (contains zoom controls) ──────────────── */}
          <VerticalToolbar
            zoom={zoom}
            onZoomIn={zoomIn}
            onZoomOut={zoomOut}
            onZoomReset={zoomReset}
          />

          {/* ── Canvas column: floating window + navbar below ──────────────── */}
          <div className="flex flex-col gap-3 flex-1 min-h-0">

            {/* Floating canvas window */}
            <div
              ref={canvasRef}
              className="relative flex-1 min-h-0 rounded-[46px] overflow-hidden select-none"
              style={{
                border: "1px solid rgba(255,255,255,0.4)",
                cursor: activeScreen === "home" ? (dragging ? "grabbing" : "grab") : "default",
              }}
              onMouseDown={activeScreen === "home" ? onMouseDown : undefined}
              onMouseMove={activeScreen === "home" ? onMouseMove : undefined}
              onMouseUp={activeScreen === "home" ? onMouseUp : undefined}
              onMouseLeave={activeScreen === "home" ? onMouseUp : undefined}
            >
              {/* Frosted glass layer */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none rounded-[46px]"
                style={{
                  backdropFilter: "blur(50px)",
                  background: "rgba(128,128,128,0.3)",
                  mixBlendMode: "luminosity",
                }}
              />

              {/* Interactive DotGrid — fixed background, doesn't transform */}
              <DotGrid
                dotSize={3}
                gap={42}
                baseColor="#2e2b28"
                activeColor="#dac5a7"
                proximity={100}
                speedTrigger={80}
                shockRadius={200}
                shockStrength={3}
                className="absolute inset-0 rounded-[46px]"
                style={{ pointerEvents: "none" }}
              />

              {/* Canvas chrome — fixed, never transforms */}
              <CanvasTitle />
              <BatteryIndicator />

              {/* Works screen — absolute overlay, shown when activeScreen === 'works' */}
              {activeScreen === "works" && (
                <WorksScreen
                  works={WORKS}
                  onBack={() => handleSetActiveScreen("home")}
                />
              )}

              {/* About screen — absolute overlay, shown when activeScreen === 'about' */}
              {activeScreen === "about" && (
                <AboutScreen onBack={() => handleSetActiveScreen("home")} />
              )}

              {/*
                Content layer — CSS `zoom` instead of transform scale.
                Hidden when works screen is active so it doesn't intercept events.
              */}
              {activeScreen === "home" && (
                <div
                  className="absolute"
                  style={{
                    top: pan.y,
                    left: pan.x,
                    width: "100%",
                    height: "100%",
                    zoom: zoom,
                  } as React.CSSProperties & { zoom: number }}
                >
                  <BentoGrid />
                </div>
              )}
            </div>

            {/* Navbar: outside the canvas, below it */}
            <NavDock onNav={handleNav} activeScreen={activeScreen} />
          </div>
        </div>
      </div>{/* end hidden md:block */}
    </>
  );
}
