import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as
  | string
  | undefined

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function ContactPage() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!FORMSPREE_ENDPOINT) {
      setStatus('error')
      setErrorMessage(
        'The contact form isn’t connected yet. Add your Formspree endpoint to enable email delivery.',
      )
      return
    }

    setStatus('sending')
    setErrorMessage('')

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim() || undefined,
          email,
          message,
          _subject: 'I Got Laid Off — site suggestion',
        }),
      })

      if (!res.ok) {
        throw new Error('Something went wrong sending your note.')
      }

      setStatus('sent')
      setName('')
      setEmail('')
      setMessage('')
    } catch {
      setStatus('error')
      setErrorMessage(
        'Couldn’t send that just now. Please try again in a moment.',
      )
    }
  }

  return (
    <section className="animate-fade-up mx-auto w-full max-w-3xl px-5 pt-14 sm:pt-16">
      <Link
        to="/"
        className="text-[1.1rem] text-[var(--muted)] underline underline-offset-3 transition-opacity hover:opacity-70"
      >
        ← Back
      </Link>

      <h1 className="mt-8 m-0 font-[family-name:var(--font-brand)] text-[2.4rem] leading-none sm:text-[2.85rem]">
        Send a suggestion
      </h1>
      <p className="mt-4 max-w-lg text-[1.2rem] text-[var(--muted)]">
        Have an idea for how to improve this site? Share it below.
      </p>

      {status === 'sent' ? (
        <div className="mt-10 max-w-lg" role="status">
          <p className="m-0 text-[1.3rem]">Thanks — your note was sent.</p>
          <p className="mt-3 text-[1.15rem] text-[var(--muted)]">
            Appreciate you taking the time.
          </p>
          <button
            type="button"
            className="mt-6 cursor-pointer border-0 bg-transparent p-0 font-[inherit] text-[1.15rem] text-[var(--accent)] underline underline-offset-3"
            onClick={() => setStatus('idle')}
          >
            Send another
          </button>
        </div>
      ) : (
        <form
          className="mt-10 flex max-w-lg flex-col gap-5"
          onSubmit={handleSubmit}
        >
          <label className="flex flex-col gap-1.5">
            <span className="text-[1.1rem]">Name (optional)</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-none border-0 border-b border-[var(--line)] bg-transparent px-0 py-2 font-[inherit] text-[1.2rem] text-[var(--ink)] outline-none transition-colors focus:border-[var(--accent)]"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-[1.1rem]">Email</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-none border-0 border-b border-[var(--line)] bg-transparent px-0 py-2 font-[inherit] text-[1.2rem] text-[var(--ink)] outline-none transition-colors focus:border-[var(--accent)]"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-[1.1rem]">Your suggestion</span>
            <textarea
              name="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="resize-y rounded-none border border-[var(--line)] bg-[rgba(255,255,255,0.35)] px-3 py-2.5 font-[inherit] text-[1.15rem] leading-relaxed text-[var(--ink)] outline-none transition-colors focus:border-[var(--accent)]"
            />
          </label>

          {status === 'error' ? (
            <p className="m-0 text-[1.05rem] text-[#8a3a2a]" role="alert">
              {errorMessage}
            </p>
          ) : null}

          {!FORMSPREE_ENDPOINT ? (
            <p className="m-0 text-[1.05rem] text-[var(--muted)]">
              Email delivery needs a Formspree form ID in{' '}
              <code className="text-[0.95rem]">VITE_FORMSPREE_ENDPOINT</code>{' '}
              (see the README).
            </p>
          ) : null}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-2 w-fit cursor-pointer border-0 bg-transparent p-0 font-[family-name:var(--font-brand)] text-[1.65rem] text-[var(--accent)] underline underline-offset-4 transition-opacity hover:opacity-80 disabled:cursor-wait disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending…' : 'Send suggestion'}
          </button>
        </form>
      )}
    </section>
  )
}
