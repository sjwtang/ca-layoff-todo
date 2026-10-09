import { Checklist } from '../components/Checklist'
import { Hero } from '../components/Hero'

export function HomePage() {
  return (
    <>
      <Hero />
      <Checklist />
      <p className="mx-auto mt-16 mb-2 max-w-3xl px-5 text-center font-[family-name:var(--font-brand)] text-[1.65rem] leading-tight text-[var(--ink)] sm:mt-20 sm:text-[1.9rem]">
        Take a deep breath.. it&apos;ll be okay
      </p>
    </>
  )
}
