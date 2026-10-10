import { Checklist } from '../components/Checklist'
import { Hero } from '../components/Hero'

export function HomePage() {
  return (
    <>
      <Hero />
      <Checklist />
      <section
        className="mx-auto flex min-h-[100svh] w-full max-w-3xl flex-col items-center px-5 pt-28 text-center sm:pt-36"
        aria-label="Closing note"
      >
        <p className="m-0 max-w-md font-[family-name:var(--font-brand)] text-[1.75rem] leading-tight sm:text-[2.15rem]">
          Ease back into the job search when you&apos;re ready and it feels
          right.
        </p>
      </section>
    </>
  )
}
