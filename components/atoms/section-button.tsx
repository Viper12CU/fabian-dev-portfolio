type SectionButtonProps = {
  href: string
  label: string
  className?: string
}

export function SectionButton({ href, label, className }: SectionButtonProps) {
  return (
    <a href={href} className={`section-btn ${className ?? ''}`.trim()}>
      {label}
    </a>
  )
}
