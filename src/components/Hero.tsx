import { useEffect, useId, useRef, useState } from 'react'

type Speech = 'orange' | 'yellow' | 'black'

const SPEECHES: Record<Speech, { label: string; text: string }> = {
  orange: {
    label: 'Orange dog',
    text: 'the job market is wack',
  },
  yellow: {
    label: 'Yellow dog',
    text: 'take a deep breath..',
  },
  black: {
    label: 'Black dog',
    text: "you'll be okay!",
  },
}

const SPEECH_ORDER: Speech[] = ['orange', 'yellow', 'black']

export function Hero() {
  const [activeSpeech, setActiveSpeech] = useState<Speech | null>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const bubbleId = useId()

  useEffect(() => {
    if (!activeSpeech) return

    function handlePointerDown(event: PointerEvent) {
      if (!wrapRef.current?.contains(event.target as Node)) {
        setActiveSpeech(null)
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setActiveSpeech(null)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeSpeech])

  function advanceSpeech() {
    setActiveSpeech((current) => {
      if (current === null) return SPEECH_ORDER[0]
      const index = SPEECH_ORDER.indexOf(current)
      return SPEECH_ORDER[(index + 1) % SPEECH_ORDER.length]
    })
  }

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
          className="animate-fade-up-delay relative w-full max-w-[8.5rem] sm:max-w-[9.5rem]"
        >
          {activeSpeech ? (
            <div
              id={bubbleId}
              role="status"
              className="speech-bubble absolute bottom-[calc(100%+0.35rem)] left-1/2 z-10"
            >
              {SPEECHES[activeSpeech].text}
            </div>
          ) : null}

          <button
            type="button"
            className="block w-full cursor-pointer border-0 bg-transparent p-0"
            aria-label={
              activeSpeech
                ? `Show next message (currently ${SPEECHES[activeSpeech].label})`
                : 'Show a message'
            }
            aria-expanded={activeSpeech !== null}
            aria-controls={activeSpeech ? bubbleId : undefined}
            onClick={advanceSpeech}
          >
            <img
              src="/sad-face.png"
              alt="Crying yellow smiley face"
              width={512}
              height={512}
              className="w-full object-contain"
              draggable={false}
            />
          </button>
        </div>
      </div>
    </section>
  )
}
