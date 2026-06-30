export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/80 px-6 py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[480px] w-[680px] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]"
      />
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-sm text-accent">Hi, I&apos;m Marvy</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Full-stack &amp; protocol engineer.
        </h1>
        <p className="mt-6 text-balance text-lg leading-relaxed text-muted-foreground">
          I build secure systems end-to-end — smart contracts, cryptography,
          backends, and the apps on top of them. Most of my work sits at the
          intersection of applied cryptography and financial infrastructure:
          zero-knowledge proofs, fully homomorphic encryption, and the
          payments and protocol rails built on top of them.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex h-11 items-center justify-center rounded-md bg-accent px-6 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="inline-flex h-11 items-center justify-center rounded-md border border-border px-6 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
