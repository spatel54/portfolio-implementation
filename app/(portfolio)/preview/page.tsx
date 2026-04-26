"use client";

import { IoMdDocument } from "react-icons/io";
import { HiArrowUpRight } from "react-icons/hi2";
import { RiHand } from "react-icons/ri";

const DOT_GOTHIC: React.CSSProperties = { fontFamily: "'DotGothic16', monospace" };
const FIGTREE: React.CSSProperties = { fontFamily: "'Figtree', sans-serif" };
const DM_MONO: React.CSSProperties = { fontFamily: "'DM Mono', monospace" };
const DAI_BANNA: React.CSSProperties = { fontFamily: "'Dai Banna SIL', serif" };

export default function PreviewPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-10"
      style={{
        background: "#181716",
        backgroundImage:
          "radial-gradient(circle, rgba(218,197,167,0.12) 1.2px, transparent 1.2px)",
        backgroundSize: "45px 45px",
      }}
    >
      {/* Isolated HeroCard — fixed size matching the bento cell */}
      <div className="w-[480px] h-[520px] relative rounded-[32px] overflow-hidden flex flex-col">
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

        {/* Tab — DM Mono + document icon */}
        <div className="absolute top-[14px] left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 whitespace-nowrap">
          <IoMdDocument className="text-[#827a72] size-[14px]" />
          <span className="text-[#827a72] text-[12px]" style={DM_MONO}>
            hero.page
          </span>
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
          <div className="flex flex-col items-center justify-center gap-5 h-full px-8 text-center">
            {/* Heading */}
            <div className="space-y-1">
              <h1 className="text-[#dac5a7] leading-[0.92]">
                <span className="block text-5xl" style={DOT_GOTHIC}>
                  Design Engineer
                </span>
                <span className="block text-5xl" style={DAI_BANNA}>
                  &amp; UX Architect
                </span>
              </h1>
              <p
                className="text-[rgba(218,197,167,0.6)] text-sm leading-relaxed max-w-sm mx-auto pt-2"
                style={{ ...FIGTREE, fontWeight: 300 }}
              >
                Interested in explainable AI, conversational agents and advanced
                context engineering using emerging technologies. 0→1, agile,
                builder oriented mindset. Currently designing for the Siebel
                Center for Design.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3">
              {/* View my work */}
              <button
                className="group relative flex items-center gap-2 h-[52px] px-5 rounded-[18px] overflow-hidden"
                style={{ background: "#df7246", border: "0.5px solid rgba(255,255,255,0.4)" }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none rounded-[18px]"
                  style={{ backdropFilter: "blur(25px)" }}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ boxShadow: "0 0 22px 4px rgba(223,114,70,0.45)" }}
                />
                <span
                  className="text-white text-base relative z-10 whitespace-nowrap"
                  style={{ ...FIGTREE, fontWeight: 300 }}
                >
                  View my work
                </span>
                <HiArrowUpRight className="text-white size-4 relative z-10 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              {/* Say Hi */}
              <button
                className="group relative flex items-center gap-2 h-[52px] px-5 rounded-[18px] overflow-hidden"
                style={{ background: "#302e2a", border: "0.5px solid rgba(255,255,255,0.4)" }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none rounded-[18px]"
                  style={{ backdropFilter: "blur(25px)" }}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ background: "rgba(218,197,167,0.07)" }}
                />
                <span
                  className="text-[#dac5a7] text-base relative z-10 whitespace-nowrap"
                  style={{ ...FIGTREE, fontWeight: 300 }}
                >
                  Say Hi
                </span>
                <RiHand className="text-[#dac5a7] size-4 relative z-10 transition-transform duration-200 group-hover:rotate-12 group-hover:scale-110" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
