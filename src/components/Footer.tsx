export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border/80 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Marvy Nwaokobia
        </p>
        <a
          href="https://github.com/MarvyNwaokobia"
          target="_blank"
          rel="noreferrer noopener"
          className="font-mono text-xs text-muted-foreground hover:text-accent transition-colors"
        >
          github.com/MarvyNwaokobia
        </a>
      </div>
    </footer>
  );
}
