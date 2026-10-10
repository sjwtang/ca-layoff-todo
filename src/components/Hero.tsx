import { useEffect, useId, useRef, useState } from 'react'

export function Hero() {
  const [bubbleOpen, setBubbleOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)
  const bubbleId = useId()

  useEffect(() => {
    if (!bubbleOpen) return

    function handlePointerDown(event: PointerEvent) {
      if (!wrapRef.current?.contains(event.target as Node)) {
        setBubbleOpen(false)
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setBubbleOpen(false)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [bubbleOpen])

  return (
    <section
      className="mx-auto flex min-h-[100svh] w-full max-w-3xl flex-col items-center px-5 pt-28 text-center sm:pt-36"
      aria-label="Welcome"
    >
      <p className="animate-fade-up m-0 max-w-md font-[family-name:var(--font-brand)] text-[1.75rem] leading-tight sm:text-[2.15rem]">
        I just got laid off, now what?
      </p>

      <div className="flex flex-1 flex-col items-center justify-center pb-24 pt-20 sm:pb-28 sm:pt-28">
        <div
          ref={wrapRef}
          className="animate-fade-up-delay relative w-full max-w-[9.5rem] sm:max-w-[11rem]"
        >
          {bubbleOpen ? (
            <div
              id={bubbleId}
              role="status"
              className="speech-bubble absolute bottom-[92%] left-[8%] z-10 w-[9.5rem] -translate-x-1/2 sm:w-[11rem]"
            >
              the job market is whack
            </div>
          ) : null}

          <img
            src="/dogs.png"
            alt="Three illustrated dogs standing side by side"
            width={849}
            height={388}
            className="w-full object-contain"
            draggable={false}
          />

          <button
            type="button"
            className="absolute top-[8%] left-0 h-[84%] w-[34%] cursor-pointer border-0 bg-transparent p-0"
            aria-label="Orange dog"
            aria-expanded={bubbleOpen}
            aria-controls={bubbleOpen ? bubbleId : undefined}
            onClick={() => setBubbleOpen((open) => !open)}
          />
        </div>
      </div>
    </section>
  )
}
