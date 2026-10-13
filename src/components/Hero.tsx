import { useEffect, useId, useRef, useState } from 'react'

type Speech = 'orange' | 'yellow' | 'black'

const SPEECHES: Record<Speech, { label: string; text: string }> = {
  orange: {
    label: 'Message 1 of 3',
    text: 'the job market is wack',
  },
  yellow: {
    label: 'Message 2 of 3',
    text: 'take a deep breath..',
  },
  black: {
    label: 'Message 3 of 3',
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
    <header
      className="mx-auto flex min-h-[100svh] w-full max-w-3xl flex-col items-center px-5 pt-28 text-center sm:pt-36"
      aria-labelledby="hero-heading"
    >
      <h1
        id="hero-heading"
        className="animate-fade-up m-0 max-w-md font-[family-name:var(--font-brand)] text-[2.4rem] leading-none sm:text-[2.85rem]"
      >
        I just got laid off,
        <br />
        now what?
      </h1>

      <div className="flex flex-1 flex-col items-center justify-center pb-24 pt-20 sm:pb-28 sm:pt-28">
        <div
          ref={wrapRef}
          className="animate-fade-up-delay relative w-full max-w-[8.5rem] sm:max-w-[9.5rem]"
        >
          {activeSpeech ? (
            <div
              id={bubbleId}
              role="status"
              aria-live="polite"
              aria-atomic="true"
              className="speech-bubble absolute bottom-[calc(100%+0.85rem)] left-1/2 z-10"
            >
              {SPEECHES[activeSpeech].text}
            </div>
          ) : null}

          <button
            type="button"
            className="block w-full cursor-pointer rounded-full border-0 bg-transparent p-0"
            aria-label={
              activeSpeech
                ? `Show next encouragement message. ${SPEECHES[activeSpeech].label}: ${SPEECHES[activeSpeech].text}`
                : 'Show an encouragement message'
            }
            aria-expanded={activeSpeech !== null}
            aria-controls={activeSpeech ? bubbleId : undefined}
            onClick={advanceSpeech}
          >
            <img
              src="/sad-face.png"
              alt=""
              width={512}
              height={512}
              className="w-full object-contain"
              draggable={false}
            />
          </button>
        </div>
      </div>
    </header>
  )
}
