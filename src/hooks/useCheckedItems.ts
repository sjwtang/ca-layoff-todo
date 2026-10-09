import { useEffect, useState } from 'react'
import { STORAGE_KEY } from '../data/checklist'

function loadChecked(): Record<string, boolean> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    return (JSON.parse(raw) as Record<string, boolean>) || {}
  } catch {
    return {}
  }
}

export function useCheckedItems() {
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setChecked(loadChecked())
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checked))
    } catch {
      // Ignore quota / private mode failures.
    }
  }, [checked, ready])

  function toggle(id: string, value: boolean) {
    setChecked((prev) => {
      const next = { ...prev }
      if (value) next[id] = true
      else delete next[id]
      return next
    })
  }

  function clearAll() {
    setChecked({})
  }

  return { checked, toggle, clearAll }
}
