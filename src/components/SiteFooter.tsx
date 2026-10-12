export function SiteFooter() {
  return (
    <footer className="mx-auto mt-[160px] w-full max-w-3xl border-t border-[var(--line)] px-5 py-6">
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:justify-between sm:gap-8">
        <div className="flex shrink-0 items-start gap-2.5">
          <img
            src="/shirley-avatar.png"
            alt=""
            width={32}
            height={38}
            className="mt-0.5 h-[1.9rem] w-auto object-contain"
          />
          <p className="m-0 text-[1.1rem] leading-snug">
            Made by{' '}
            <a
              href="https://www.linkedin.com/in/shirleyjtang/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-3 transition-opacity hover:opacity-70"
            >
              Shirley
            </a>
          </p>
        </div>
        <p className="m-0 max-w-md text-left text-[0.95rem] leading-snug text-[var(--muted)] sm:text-right">
          This website has been created for informational purposes only and is
          not offered, nor should be construed, as legal advice.
        </p>
      </div>
    </footer>
  )
}
