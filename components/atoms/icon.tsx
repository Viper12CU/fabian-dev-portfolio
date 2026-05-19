type IconProps = {
  name: string
  className?: string
}

export function Icon({ name, className }: IconProps) {
  return <i className={`fa ${name} ${className ?? ''}`.trim()} aria-hidden="true" />
}
