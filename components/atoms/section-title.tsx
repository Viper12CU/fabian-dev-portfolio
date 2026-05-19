type SectionTitleProps = {
  title: string
  subtitle?: string
  subtitleClassName?: string
  className?: string
}

export function SectionTitle({
  title,
  subtitle,
  subtitleClassName,
  className,
}: SectionTitleProps) {
  return (
    <div className={`section-title ${className ?? ''}`.trim()}>
      <h1>{title}</h1>
      {subtitle ? <p className={subtitleClassName}>{subtitle}</p> : null}
    </div>
  )
}
