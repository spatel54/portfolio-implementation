import Link from "next/link";
import { FiFigma } from "react-icons/fi";

export function PortfolioHomeScreen() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <p className="text-muted-foreground text-xs font-medium uppercase tracking-widest">
          Portfolio scaffold
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Your work lives here
        </h1>
        <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed sm:text-base">
          Replace this placeholder with Figma-imported screens under{" "}
          <code className="bg-muted rounded px-1 py-0.5 text-xs">
            components/screens
          </code>
          . Use{" "}
          <code className="bg-muted rounded px-1 py-0.5 text-xs">
            components/branding
          </code>{" "}
          for atoms → templates and{" "}
          <code className="bg-muted rounded px-1 py-0.5 text-xs">
            public/assets
          </code>{" "}
          for raster and custom icons.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Link
          href="/"
          className="bg-primary text-primary-foreground inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium"
        >
          Explore UIArchives
        </Link>
        <a
          href="https://www.figma.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="border-border text-muted-foreground hover:text-foreground inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium"
        >
          <FiFigma aria-hidden className="size-4" />
          Open Figma
        </a>
      </div>
    </section>
  );
}
