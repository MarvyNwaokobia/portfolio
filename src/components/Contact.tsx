const links = [
  { label: "GitHub", href: "https://github.com/MarvyNwaokobia" },
  { label: "Twitter / X", href: "https://twitter.com/Marvysmind" },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-mono text-sm font-medium uppercase tracking-wider text-accent">
          Contact
        </h2>
        <p className="mt-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Open to interesting protocol &amp; full-stack work.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-11 items-center justify-center rounded-md border border-border px-6 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
