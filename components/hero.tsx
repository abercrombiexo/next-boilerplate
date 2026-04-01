import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-start  overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col px-6 py-24 lg:py-32">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5">
          <span className="text-xs font-medium text-muted-foreground">
            Now in public beta
          </span>
          <ArrowRight className="size-3 text-muted-foreground" />
        </div>

        {/* Heading */}
        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Build faster. Ship with confidence.
        </h1>

        {/* Subheading */}
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          The modern platform for teams who want to move fast without breaking things. Start building today with our powerful developer tools.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="#signup">
              Get Started
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="#docs">View Documentation</Link>
          </Button>
        </div>

        {/* Terminal snippet */}
        <div className="mt-16 w-full max-w-md">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-3 flex items-center gap-1.5">
              <div className="size-2.5 rounded-full bg-muted-foreground/30" />
              <div className="size-2.5 rounded-full bg-muted-foreground/30" />
              <div className="size-2.5 rounded-full bg-muted-foreground/30" />
            </div>
            <code className="text-sm text-muted-foreground">
              <span className="text-foreground">$</span>{" "}
              npx create-next-app@latest
            </code>
          </div>
        </div>
      </div>
    </section>
  )
}
