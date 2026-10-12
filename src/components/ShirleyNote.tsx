type Props = {
  note: string
}

export function ShirleyNote({ note }: Props) {
  return (
    <aside
      className="shirley-note mt-4 flex items-start gap-3 rounded-xl border border-[var(--note-border)] bg-[var(--note-bg)] px-3.5 py-3 sm:gap-3.5 sm:px-4 sm:py-3.5"
      aria-label="Shirley's note"
    >
      <img
        src="/shirley-avatar.png"
        alt=""
        width={48}
        height={56}
        className="mt-0.5 h-11 w-11 shrink-0 object-contain sm:h-12 sm:w-12"
      />
      <p className="m-0 text-[1.02rem] leading-snug text-[var(--ink)] sm:text-[1.05rem]">
        <strong className="font-semibold">Shirley&apos;s note:</strong> {note}
      </p>
    </aside>
  )
}
