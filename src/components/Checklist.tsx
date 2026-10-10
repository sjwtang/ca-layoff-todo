import { useEffect, useState } from 'react'
import { SECTIONS } from '../data/checklist'
import { useCheckedItems } from '../hooks/useCheckedItems'
import { ChecklistItem } from './ChecklistItem'

export function Checklist() {
  const { checked, toggle } = useCheckedItems()
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

  return (
    <section
      id="todo"
      className="animate-fade-up-late mx-auto w-full max-w-3xl px-5 pt-16 sm:pt-24"
      aria-labelledby="todo-heading"
    >
      <h2
        id="todo-heading"
        className="mb-10 m-0 font-[family-name:var(--font-brand)] text-[2.4rem] leading-none sm:text-[2.85rem]"
      >
        To-do list
      </h2>

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
                  open={openId === item.id}
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
