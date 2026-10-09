import { Link } from 'react-router-dom'

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-36 w-full max-w-3xl border-t border-[var(--line)] px-5 py-6 sm:mt-44">
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
        <div className="max-w-md text-left sm:text-right">
          <p className="m-0 text-[1.05rem] leading-snug text-[var(--ink)]">
            Have a suggestion on how to improve this site?{' '}
            <Link
              to="/contact"
              className="underline underline-offset-3 transition-opacity hover:opacity-70"
            >
              Send it here
            </Link>
          </p>
          <p className="mt-3 mb-0 text-[0.95rem] leading-snug text-[var(--muted)]">
            This website has been created for informational purposes only and is
            not offered, nor should be construed, as legal advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
