import { useEffect, useState } from 'react'
import { SECTIONS } from '../data/checklist'
import { useCheckedItems } from '../hooks/useCheckedItems'
import { ChecklistItem } from './ChecklistItem'

export function Checklist() {
  const { checked, toggle } = useCheckedItems()
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set())

  useEffect(() => {
    const id = decodeURIComponent((location.hash || '').slice(1))
    if (!id || id === 'todo') return
    const exists = SECTIONS.some((s) => s.items.some((it) => it.id === id))
    if (exists) {
      setOpenIds(new Set([id]))
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ block: 'start' })
      })
    }
  }, [])

  function setHash(id: string | null) {
    try {
      if (id) {
        history.replaceState(null, '', `#${id}`)
      } else {
        history.replaceState(null, '', `${location.pathname}${location.search}`)
      }
    } catch {
      // ignore
    }
  }

  function handleToggleOpen(id: string) {
    setOpenIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
        const remaining = next.values().next().value as string | undefined
        setHash(remaining ?? null)
      } else {
        next.add(id)
        setHash(id)
      }
      return next
    })
  }

  function collapseAll() {
    setOpenIds(new Set())
    setHash(null)
  }

  const hasOpen = openIds.size > 0

  return (
    <section
      id="todo"
      className="animate-fade-up-late mx-auto w-full max-w-3xl px-5 pt-16 sm:pt-24"
      aria-labelledby="todo-heading"
    >
      <div className="mb-3 flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
        <h2
          id="todo-heading"
          className="m-0 font-[family-name:var(--font-brand)] text-[2.4rem] leading-none sm:text-[2.85rem]"
        >
          To-do list
        </h2>
        {hasOpen ? (
          <button
            type="button"
            onClick={collapseAll}
            className="mb-0.5 cursor-pointer border-0 bg-transparent p-0 font-[inherit] text-[1.05rem] text-[var(--accent)] underline underline-offset-3 transition-opacity hover:opacity-70 sm:text-[1.1rem]"
          >
            Collapse all
          </button>
        ) : null}
      </div>
      <p className="mb-10 mt-0 max-w-2xl text-[1.05rem] leading-snug text-[var(--muted)] sm:text-[1.1rem]">
        This checklist is designed for individuals navigating layoffs in
        California. If you&apos;re in another state, check your state&apos;s
        official government websites for location-specific guidance.
      </p>

      <div className="flex flex-col gap-12">
        {SECTIONS.map((section) => (
          <div key={section.id} aria-labelledby={`h-${section.id}`}>
            <h3
              id={`h-${section.id}`}
              className="mb-4 m-0 font-[family-name:var(--font-brand)] text-[1.85rem] leading-none sm:text-[2.05rem]"
            >
              {section.title}
            </h3>
            <ul className="m-0 list-none p-0">
              {section.items.map((item) => (
                <ChecklistItem
                  key={item.id}
                  item={item}
                  done={!!checked[item.id]}
                  open={openIds.has(item.id)}
                  onToggleDone={toggle}
                  onToggleOpen={handleToggleOpen}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
