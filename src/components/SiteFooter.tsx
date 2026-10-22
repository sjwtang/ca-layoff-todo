export function SiteFooter() {
  return (
    <footer className="mx-auto mt-[160px] w-full max-w-3xl border-t border-[var(--line)] px-5 py-6">
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="flex items-center justify-center gap-2.5">
          <img
            src="/shirley-avatar.png"
            alt=""
            width={32}
            height={38}
            className="h-[1.9rem] w-auto object-contain"
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
              <span className="sr-only"> (opens in a new tab)</span>
            </a>{' '}
            (your fellow laid off buddy)
          </p>
        </div>
        <p className="m-0 max-w-md text-center text-[0.95rem] leading-snug text-[var(--muted)]">
          This website has been created for informational purposes only and is
          not offered, nor should be construed, as legal advice.
        </p>
      </div>
    </footer>
  )
}
