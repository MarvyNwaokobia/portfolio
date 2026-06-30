import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="border-b border-border/80 px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="font-mono text-sm font-medium uppercase tracking-wider text-accent">
            About
          </h2>
        </Reveal>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
          <Reveal delay={0.05}>
            <p>
              I work across the stack: designing on-chain protocols and the
              cryptographic primitives underneath them, writing the backend
              services that support them, and building the frontends people
              actually use. I care most about correctness and security in
              systems handling money, identity, or private data.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p>
              I lead{" "}
              <a
                href="https://github.com/Shielded-Protocol"
                target="_blank"
                rel="noreferrer noopener"
                className="text-foreground underline decoration-border underline-offset-4 hover:decoration-accent hover:text-accent transition-colors"
              >
                Shielded Protocol
              </a>
              , a zero-knowledge privacy protocol built on Stellar/Soroban —
              covering the ZK circuits, contracts, SDK, and frontend. Most of
              my independent work explores the same problem from different
              angles: how to make systems verifiable without making them
              transparent, particularly for payments, payroll, and
              cross-border financial infrastructure.
            </p>
          </Reveal>
          <Reveal delay={0.19}>
            <p>
              I also build outside of any specific stack or chain —
              implementing cryptographic primitives, a toy EVM, and other
              systems from scratch to understand how the tools I rely on
              actually work.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
