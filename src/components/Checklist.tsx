import { useEffect, useState } from 'react'
import { SECTIONS, TOTAL_ITEMS } from '../data/checklist'
import { useCheckedItems } from '../hooks/useCheckedItems'
import { ChecklistItem } from './ChecklistItem'

export function Checklist() {
  const { checked, toggle, clearAll } = useCheckedItems()
  const [openId, setOpenId] = useState<string | null>(null)

  useEffect(() => {
    const id = decodeURIComponent((location.hash || '').slice(1))
    if (!id || id === 'todo') return
    const exists = SECTIONS.some((s) => s.items.some((it) => it.id === id))
    if (exists) {
      setOpenId(id)
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ block: 'start' })
      })
    }
  }, [])

  function handleToggleOpen(id: string) {
    setOpenId((prev) => {
      const next = prev === id ? null : id
      if (next) {
        try {
          history.replaceState(null, '', `#${next}`)
        } catch {
          // ignore
        }
      }
      return next
    })
  }

  const doneCount = Object.keys(checked).filter((k) => checked[k]).length

  return (
    <section
      id="todo"
      className="animate-fade-up-late mx-auto w-full max-w-3xl px-5 pt-16 sm:pt-20"
      aria-labelledby="todo-heading"
    >
      <div className="mb-8 flex items-baseline justify-between gap-4">
        <h2
          id="todo-heading"
          className="m-0 font-[family-name:var(--font-brand)] text-[2.4rem] leading-none sm:text-[2.85rem]"
        >
          To-do list
        </h2>
        <p className="m-0 text-[1.05rem] text-[var(--muted)]" aria-live="polite">
          {doneCount} of {TOTAL_ITEMS} done
        </p>
      </div>

      <p className="mb-10 mt-0 max-w-xl text-[1.1rem] text-[var(--muted)]">
        Open any step for details. Check it off when it&apos;s done — nothing is
        saved to a server; your checkmarks stay on this device.
      </p>

      <div className="flex flex-col gap-12">
        {SECTIONS.map((section) => {
          const sectionDone = section.items.filter((it) => checked[it.id]).length
          return (
            <div key={section.id} aria-labelledby={`h-${section.id}`}>
              <div className="mb-1 flex items-baseline justify-between gap-3">
                <h3
                  id={`h-${section.id}`}
                  className="m-0 font-[family-name:var(--font-brand)] text-[1.85rem] leading-none sm:text-[2.05rem]"
                >
                  {section.title}
                </h3>
                <span className="text-[1rem] text-[var(--muted)]">
                  {sectionDone} of {section.items.length}
                </span>
              </div>
              <p className="mb-4 mt-1 max-w-xl text-[1.05rem] text-[var(--muted)]">
                {section.note}
              </p>
              <ul className="m-0 list-none p-0">
                {section.items.map((item) => (
                  <ChecklistItem
                    key={item.id}
                    item={item}
                    done={!!checked[item.id]}
                    open={openId === item.id}
                    onToggleDone={toggle}
                    onToggleOpen={handleToggleOpen}
                  />
                ))}
              </ul>
            </div>
          )
        })}
      </div>

      <p className="mt-8 mb-0">
        <button
          type="button"
          onClick={clearAll}
          className="cursor-pointer border-0 bg-transparent p-0 font-[inherit] text-[1.1rem] text-[var(--accent)] underline underline-offset-3"
        >
          Clear all checkmarks
        </button>
      </p>
    </section>
  )
}
