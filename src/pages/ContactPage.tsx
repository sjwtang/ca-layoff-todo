import { useState, type FormEvent } from 'react'

type Status = 'idle' | 'sent'

export function ContactPage() {
  const [status, setStatus] = useState<Status>('idle')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    // Form delivery isn't wired yet — keep the UX ready for a real endpoint later.
    setStatus('sent')
  }

  return (
    <section className="animate-fade-up mx-auto w-full max-w-3xl px-5 pt-14 sm:pt-16">
      <h1 className="m-0 font-[family-name:var(--font-brand)] text-[2.4rem] leading-none sm:text-[2.85rem]">
        Contact
      </h1>
      <p className="mt-4 max-w-lg text-[1.2rem] text-[var(--muted)]">
        Feedback welcome — tell me what helped, what&apos;s missing, or how this
        guide could be clearer.
      </p>

      {status === 'sent' ? (
        <div className="mt-10 max-w-lg" role="status">
          <p className="m-0 text-[1.3rem]">Thanks for the note.</p>
          <p className="mt-3 text-[1.15rem] text-[var(--muted)]">
            Your feedback was captured on this page for now. A real send path
            is still being hooked up — feel free to come back later.
          </p>
          <button
            type="button"
            className="mt-6 cursor-pointer border-0 bg-transparent p-0 font-[inherit] text-[1.15rem] text-[var(--accent)] underline underline-offset-3"
            onClick={() => {
              setStatus('idle')
              setName('')
              setEmail('')
              setMessage('')
            }}
          >
            Send another
          </button>
        </div>
      ) : (
        <form
          className="mt-10 flex max-w-lg flex-col gap-5"
          onSubmit={handleSubmit}
          noValidate={false}
        >
          <label className="flex flex-col gap-1.5">
            <span className="text-[1.1rem]">Name</span>
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
            <span className="text-[1.1rem]">How can we improve this site?</span>
            <textarea
              name="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="resize-y rounded-none border border-[var(--line)] bg-[rgba(255,255,255,0.35)] px-3 py-2.5 font-[inherit] text-[1.15rem] leading-relaxed text-[var(--ink)] outline-none transition-colors focus:border-[var(--accent)]"
            />
          </label>

          <button
            type="submit"
            className="mt-2 w-fit cursor-pointer border-0 bg-transparent p-0 font-[family-name:var(--font-brand)] text-[1.65rem] text-[var(--accent)] underline underline-offset-4 transition-opacity hover:opacity-80"
          >
            Send feedback
          </button>
        </form>
      )}
    </section>
  )
}
