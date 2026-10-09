import { NavLink } from 'react-router-dom'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'text-[1.15rem] sm:text-[1.25rem] tracking-wide transition-opacity duration-200',
    isActive ? 'opacity-100 underline underline-offset-4 decoration-1' : 'opacity-70 hover:opacity-100',
  ].join(' ')

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-3xl items-baseline justify-between gap-4 px-5 pt-6 sm:pt-8">
      <NavLink
        to="/"
        className="font-[family-name:var(--font-brand)] text-[1.85rem] leading-none tracking-tight sm:text-[2.15rem]"
      >
        i got laid off
      </NavLink>
      <nav aria-label="Primary" className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 sm:gap-x-6">
        <a
          href="/#todo"
          className="text-[1.15rem] opacity-70 transition-opacity duration-200 hover:opacity-100 sm:text-[1.25rem]"
        >
          To-do list
        </a>
        <NavLink to="/inspo" className={linkClass}>
          Inspo
        </NavLink>
      </nav>
    </header>
  )
}
