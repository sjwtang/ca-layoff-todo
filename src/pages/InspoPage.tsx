import { useState, type FormEvent } from 'react'

type WallMessage = {
  id: string
  name: string
  note: string
  createdAt: number
}

const STORAGE_KEY = 'laid-off-ca:inspo-messages:v1'

function loadMessages(): WallMessage[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as WallMessage[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function InspoPage() {
  const [messages, setMessages] = useState<WallMessage[]>(() => loadMessages())
  const [name, setName] = useState('')
  const [note, setNote] = useState('')
  const [justPosted, setJustPosted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const trimmed = note.trim()
    if (!trimmed) return

    const next: WallMessage = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: name.trim() || 'Anonymous',
      note: trimmed,
      createdAt: Date.now(),
    }
    const updated = [next, ...messages].slice(0, 40)
    setMessages(updated)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    } catch {
      // ignore
    }
    setName('')
    setNote('')
    setJustPosted(true)
  }

  return (
    <section className="animate-fade-up mx-auto w-full max-w-3xl px-5 pt-14 sm:pt-16">
      <h1 className="m-0 font-[family-name:var(--font-brand)] text-[2.4rem] leading-none sm:text-[2.85rem]">
        Inspo
      </h1>
      <p className="mt-4 max-w-lg text-[1.2rem] text-[var(--muted)]">
        Leave a short note for someone else going through it — a tip, a
        reminder, or just &ldquo;you&apos;ll get through this.&rdquo;
      </p>
      <p className="mt-2 max-w-lg text-[1.05rem] text-[var(--muted)]">
        Work in progress: messages stay on this device for now, not a shared
        wall yet.
      </p>

      <form
        className="mt-10 flex max-w-lg flex-col gap-5"
        onSubmit={handleSubmit}
      >
        <label className="flex flex-col gap-1.5">
          <span className="text-[1.1rem]">Name (optional)</span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-none border-0 border-b border-[var(--line)] bg-transparent px-0 py-2 font-[inherit] text-[1.2rem] text-[var(--ink)] outline-none transition-colors focus:border-[var(--accent)]"
          />
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-[1.1rem]">Your message</span>
          <textarea
            name="note"
            required
            rows={4}
            maxLength={500}
            value={note}
            onChange={(e) => {
              setNote(e.target.value)
              setJustPosted(false)
            }}
            className="resize-y rounded-none border border-[var(--line)] bg-[rgba(255,255,255,0.35)] px-3 py-2.5 font-[inherit] text-[1.15rem] leading-relaxed text-[var(--ink)] outline-none transition-colors focus:border-[var(--accent)]"
          />
        </label>

        <button
          type="submit"
          className="mt-1 w-fit cursor-pointer border-0 bg-transparent p-0 font-[family-name:var(--font-brand)] text-[1.65rem] text-[var(--accent)] underline underline-offset-4 transition-opacity hover:opacity-80"
        >
          Leave a message
        </button>
        {justPosted ? (
          <p className="m-0 text-[1.1rem] text-[var(--muted)]" role="status">
            Saved on this device.
          </p>
        ) : null}
      </form>

      <div className="mt-14">
        <h2 className="m-0 font-[family-name:var(--font-brand)] text-[1.9rem] leading-none">
          Recent notes
        </h2>
        {messages.length === 0 ? (
          <p className="mt-4 text-[1.15rem] text-[var(--muted)]">
            No messages yet — be the first.
          </p>
        ) : (
          <ul className="mt-6 m-0 flex list-none flex-col gap-6 p-0">
            {messages.map((msg) => (
              <li key={msg.id} className="border-b border-[var(--line)] pb-5">
                <p className="m-0 text-[1.25rem] leading-snug">&ldquo;{msg.note}&rdquo;</p>
                <p className="mt-2 mb-0 text-[1.05rem] text-[var(--muted)]">
                  — {msg.name}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
