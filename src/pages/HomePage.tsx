import { Checklist } from '../components/Checklist'
import { Hero } from '../components/Hero'

export function HomePage() {
  return (
    <>
      <Hero />
      <Checklist />
      <p
        className="mx-auto mt-32 max-w-md px-5 text-center text-[1.2rem] leading-snug sm:mt-40 sm:text-[1.3rem]"
        role="note"
      >
        Ease back into the job search when you&apos;re ready and it feels right.
      </p>
    </>
  )
}
