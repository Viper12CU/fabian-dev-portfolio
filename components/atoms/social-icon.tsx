type SocialIconProps = {
  href: string
  icon: string
}

export function SocialIcon({ href, icon }: SocialIconProps) {
  return (
    <li>
      <a href={href} aria-label={icon}>
        <span className={`fa ${icon}`} aria-hidden="true" />
      </a>
    </li>
  )
}
