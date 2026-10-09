export function Hero() {
  return (
    <section
      className="mx-auto flex w-full max-w-3xl flex-col items-center px-5 pt-14 text-center sm:pt-20"
      aria-label="Welcome"
    >
      <div className="animate-fade-up m-0 max-w-md font-[family-name:var(--font-brand)] text-[1.75rem] leading-tight sm:text-[2.15rem]">
        <p className="m-0">I just got laid off, now what?</p>
        <p className="m-0 mt-2">Here&apos;s a few steps to get started.</p>
      </div>

      <div
        className="animate-fade-up-delay mt-10 flex h-40 w-40 items-center justify-center rounded-full bg-[#e8e4da] text-center text-[1.05rem] leading-snug text-[var(--muted)] sm:h-48 sm:w-48"
        role="img"
        aria-label="Placeholder for a dog drawing holding a banner"
      >
        <span className="max-w-[7.5rem]">dog drawing holding banner</span>
      </div>
    </section>
  )
}
