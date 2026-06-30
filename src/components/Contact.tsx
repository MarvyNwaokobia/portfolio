import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";

const links = [
  { label: "Email", href: "mailto:marvynwaokobia@gmail.com" },
  { label: "GitHub", href: "https://github.com/MarvyNwaokobia" },
  { label: "Twitter / X", href: "https://twitter.com/Marvysmind" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24">
      <div
        aria-hidden
        className="animate-aurora-slow pointer-events-none absolute left-1/2 top-0 -z-10 h-90 w-140 -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="font-mono text-sm font-medium uppercase tracking-wider text-accent">
          Contact
        </h2>
        <p className="mt-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Open to interesting protocol &amp; full-stack work.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {links.map((link) => (
            <MagneticButton
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto:")
                  ? undefined
                  : "noreferrer noopener"
              }
              className="inline-flex h-11 items-center justify-center rounded-md border border-border px-6 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {link.label}
            </MagneticButton>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
