import type { ChecklistItem as Item } from '../data/checklist'

type Props = {
  item: Item
  done: boolean
  open: boolean
  onToggleDone: (id: string, value: boolean) => void
  onToggleOpen: (id: string) => void
}

function sourcesHtml(item: Item) {
  if (item.sources.length === 0) return ''
  const links = item.sources
    .map(
      (s) =>
        `<a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.label}</a>`,
    )
    .join(' · ')
  const label = item.sources.length > 1 ? 'Official sources' : 'Official source'
  return `<p class="src">${label}: ${links}</p>`
}

export function ChecklistItem({
  item,
  done,
  open,
  onToggleDone,
  onToggleOpen,
}: Props) {
  const panelId = `panel-${item.id}`

  return (
    <li
      id={item.id}
      className="scroll-mt-24 list-none border-b border-[var(--line)] last:border-b-0"
    >
      <div className="flex items-start gap-3 py-3 sm:gap-4 sm:py-3.5">
        <label className="relative mt-1 flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center">
          <input
            type="checkbox"
            className="peer absolute inset-0 m-0 h-full w-full cursor-pointer opacity-0"
            checked={done}
            onChange={(e) => onToggleDone(item.id, e.target.checked)}
            aria-label={`Mark as done: ${item.title}`}
          />
          <span
            className={[
              'pointer-events-none flex h-[1.35rem] w-[1.35rem] items-center justify-center rounded-[3px] border-[1.75px] border-[var(--ink)] transition-colors duration-200',
              done ? 'bg-[var(--accent)] border-[var(--accent)]' : 'bg-transparent',
            ].join(' ')}
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              className={[
                'h-3.5 w-3.5 stroke-white stroke-[3] transition-opacity duration-200',
                done ? 'opacity-100' : 'opacity-0',
              ].join(' ')}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12.5l4.5 4.5L19 7.5" />
            </svg>
          </span>
        </label>

        <button
          type="button"
          className="group flex min-h-8 flex-1 items-start justify-between gap-3 bg-transparent p-0 text-left font-[inherit] text-[1.2rem] leading-snug text-[var(--ink)] sm:text-[1.3rem]"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => onToggleOpen(item.id)}
        >
          <span
            className={[
              'transition-colors duration-200',
              done
                ? 'text-[var(--muted)] line-through decoration-[1.5px]'
                : '',
            ].join(' ')}
          >
            {item.title}
          </span>
          <svg
            viewBox="0 0 24 24"
            className={[
              'mt-1 h-5 w-5 shrink-0 stroke-[var(--muted)] stroke-[2.2] transition-transform duration-250',
              open ? 'rotate-180' : '',
            ].join(' ')}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>

      <div
        id={panelId}
        role="region"
        aria-label={`${item.title} details`}
        className={[
          'grid transition-[grid-template-rows] duration-300 ease-out',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        ].join(' ')}
      >
        <div className="overflow-hidden">
          <div
            className="detail-body pb-4 pl-10 pr-1 text-[1.1rem] leading-relaxed text-[var(--muted)] sm:pl-11"
            dangerouslySetInnerHTML={{
              __html: item.body + sourcesHtml(item),
            }}
          />
        </div>
      </div>
    </li>
  )
}
