export function Hero() {
  return (
    <section
      className="mx-auto flex min-h-[100svh] w-full max-w-3xl flex-col items-center px-5 pt-28 text-center sm:pt-36"
      aria-label="Welcome"
    >
      <p className="animate-fade-up m-0 max-w-md font-[family-name:var(--font-brand)] text-[1.75rem] leading-tight sm:text-[2.15rem]">
        I just got laid off, now what?
      </p>

      <div className="flex flex-1 flex-col items-center justify-center pb-24 pt-20 sm:pb-28 sm:pt-28">
        <img
          src="/dogs.png"
          alt="Three illustrated dogs standing side by side"
          width={849}
          height={388}
          className="animate-fade-up-delay w-full max-w-[9.5rem] object-contain sm:max-w-[11rem]"
        />
      </div>
    </section>
  )
}
