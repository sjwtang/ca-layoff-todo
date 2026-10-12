import { useEffect, useState } from 'react'

const STORAGE_KEY = 'laid-off-ca:visitor:v1'
const COUNTER_URL =
  'https://abacus.jasoncameron.dev/hit/i-got-laid-off/unique-visitors'

type VisitorRecord = {
  id: string
  number: number
}

function loadRecord(): VisitorRecord | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as VisitorRecord
    if (
      typeof parsed?.id === 'string' &&
      typeof parsed?.number === 'number' &&
      Number.isFinite(parsed.number) &&
      parsed.number > 0
    ) {
      return parsed
    }
    return null
  } catch {
    return null
  }
}

function saveRecord(record: VisitorRecord) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(record))
  } catch {
    // Ignore private-mode / quota failures.
  }
}

function createVisitorId() {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID()
  }
  return `v-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`
}

async function claimVisitorNumber(): Promise<number> {
  const res = await fetch(COUNTER_URL)
  if (!res.ok) throw new Error('counter unavailable')
  const data = (await res.json()) as { value?: number }
  if (typeof data.value !== 'number' || !Number.isFinite(data.value)) {
    throw new Error('invalid counter response')
  }
  return data.value
}

export function useVisitorNumber() {
  const [number, setNumber] = useState<number | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let cancelled = false

    async function resolveVisitor() {
      const existing = loadRecord()
      if (existing) {
        if (!cancelled) {
          setNumber(existing.number)
          setReady(true)
        }
        return
      }

      try {
        const claimed = await claimVisitorNumber()
        const record: VisitorRecord = {
          id: createVisitorId(),
          number: claimed,
        }
        saveRecord(record)
        if (!cancelled) {
          setNumber(record.number)
          setReady(true)
        }
      } catch {
        // Offline / blocked: still remember a local ID, but don't invent a
        // shared sequence number that could collide with the real counter.
        if (!cancelled) {
          setNumber(null)
          setReady(true)
        }
      }
    }

    void resolveVisitor()
    return () => {
      cancelled = true
    }
  }, [])

  return { number, ready }
}
