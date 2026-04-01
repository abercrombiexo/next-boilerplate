export function AboutHero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-24 lg:py-32">
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

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Our Story
        </p>
        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Building the future of developer tools
        </h1>
        <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          We started Acme with a simple belief: developers deserve better tools.
          Today, thousands of teams trust us to ship faster and with more
          confidence.
        </p>
      </div>
    </section>
  )
}
