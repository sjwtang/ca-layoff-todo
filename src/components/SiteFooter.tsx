export function SiteFooter() {
  return (
    <footer className="mx-auto mt-28 w-full max-w-3xl border-t border-[var(--line)] px-5 py-6 sm:mt-36">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
        <p className="m-0 shrink-0 text-[1.1rem]">
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
        <p className="m-0 max-w-md text-left text-[0.95rem] leading-snug text-[var(--muted)] sm:text-right">
          This website has been created for informational purposes only and is
          not offered, nor should be construed, as legal advice.
        </p>
      </div>
    </footer>
  )
}
