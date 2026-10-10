import { useEffect, useId, useRef, useState } from 'react'

type DogBubble = 'orange' | 'yellow'

const BUBBLES: Record<
  DogBubble,
  { label: string; text: string; left: string; hitLeft: string }
> = {
  orange: {
    label: 'Orange dog',
    text: 'the job market is whack',
    left: '17%',
    hitLeft: '0%',
  },
  yellow: {
    label: 'Yellow dog',
    text: 'Take a deep breath..',
    left: '50%',
    hitLeft: '33%',
  },
}

export function Hero() {
  const [activeDog, setActiveDog] = useState<DogBubble | null>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const bubbleId = useId()

  useEffect(() => {
    if (!activeDog) return

    function handlePointerDown(event: PointerEvent) {
      if (!wrapRef.current?.contains(event.target as Node)) {
        setActiveDog(null)
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setActiveDog(null)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeDog])

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
          {activeDog ? (
            <div
              id={bubbleId}
              role="status"
              className="speech-bubble absolute bottom-[calc(100%+0.35rem)] z-10"
              style={{ left: BUBBLES[activeDog].left }}
            >
              {BUBBLES[activeDog].text}
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

          {(Object.keys(BUBBLES) as DogBubble[]).map((dog) => (
            <button
              key={dog}
              type="button"
              className="absolute top-[8%] h-[84%] w-[34%] cursor-pointer border-0 bg-transparent p-0"
              style={{ left: BUBBLES[dog].hitLeft }}
              aria-label={BUBBLES[dog].label}
              aria-expanded={activeDog === dog}
              aria-controls={activeDog === dog ? bubbleId : undefined}
              onClick={() =>
                setActiveDog((current) => (current === dog ? null : dog))
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}
