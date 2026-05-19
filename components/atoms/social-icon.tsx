type SocialIconProps = {
  href: string
  icon: string
}

export function SocialIcon({ href, icon }: SocialIconProps) {
  return (
    <li>
      <a href={href} className={`fa ${icon}`} aria-label={icon} />
    </li>
  )
}
