export function SiteFooter() {
  return (
    <footer className="mx-auto mt-16 w-full max-w-3xl border-t border-[var(--line)] px-5 py-6 sm:mt-20">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
        <p className="m-0 shrink-0 text-[1.1rem]">Made by Shirley</p>
        <p className="m-0 max-w-md text-left text-[0.95rem] leading-snug text-[var(--muted)] sm:text-right">
          This website has been created for informational purposes only and is
          not offered, nor should be construed, as legal advice.
        </p>
      </div>
    </footer>
  )
}
