import { Icon } from '@/components/atoms/icon'

type EducationItemProps = {
  title: string
  period: string
  copy: {
    label: string
    href: string
  }
}

export function EducationItem({ title, period, copy }: EducationItemProps) {
  return (
    <div className="flex items-start gap-4 mb-6">
      <div className="text-[42px]">
        <Icon name="fa-laptop" />
      </div>
      <div>
        <h3 className="mb-0">
          {title} <small className="text-[#886D1E] font-bold">{period}</small>
        </h3>
        <p className="color-white">
          <a href={copy.href} className="color-white hover:underline">
            {copy.label}
          </a>
        </p>
      </div>
    </div>
  )
}
