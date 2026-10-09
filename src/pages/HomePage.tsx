import { Checklist } from '../components/Checklist'
import { Hero } from '../components/Hero'

export function HomePage() {
  return (
    <>
      <Hero />
      <Checklist />
      <p className="mx-auto mt-32 max-w-md px-5 text-center font-[family-name:var(--font-brand)] text-[1.75rem] leading-tight sm:mt-40 sm:text-[2.15rem]">
        Ease back into the job search when you&apos;re ready and it feels right.
      </p>
    </>
  )
}
