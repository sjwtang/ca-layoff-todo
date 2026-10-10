export function Hero() {
  return (
    <section
      className="mx-auto flex w-full max-w-3xl flex-col items-center px-5 pt-14 text-center sm:pt-20"
      aria-label="Welcome"
    >
      <div className="animate-fade-up m-0 max-w-md font-[family-name:var(--font-brand)] text-[1.75rem] leading-tight sm:text-[2.15rem]">
        <p className="m-0">I just got laid off, now what?</p>
        <p className="m-0 mt-2">Here are a few steps to get started.</p>
      </div>

      <img
        src="/dogs.png"
        alt="Three illustrated dogs standing side by side"
        width={849}
        height={388}
        className="animate-fade-up-delay mt-10 w-full max-w-[9.5rem] object-contain sm:max-w-[11rem]"
      />
    </section>
  )
}
