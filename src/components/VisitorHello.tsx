import { useVisitorNumber } from '../hooks/useVisitorNumber'

export function VisitorHello() {
  const { number, ready } = useVisitorNumber()

  const label =
    ready && number != null
      ? `Hello visitor #${number}`
      : ready
        ? 'Hello visitor'
        : 'Hello visitor #…'

  return (
    <p
      className="pointer-events-none fixed top-4 right-4 z-20 m-0 text-right text-[0.95rem] tracking-tight text-[var(--muted)] sm:top-5 sm:right-6 sm:text-[1.05rem]"
      aria-live="polite"
    >
      {label}
    </p>
  )
}
