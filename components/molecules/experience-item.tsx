import { Icon } from '@/components/atoms/icon'

type ExperienceItemProps = {
  title: string
  period: string
  copy: string
}

export function ExperienceItem({ title, period, copy }: ExperienceItemProps) {
  return (
    <div className="flex items-start gap-4 mb-6">
      <div className="text-[42px]">
        <Icon name="fa-laptop" />
      </div>
      <div>
        <h3 className="mb-0">
          {title} <small className="text-[#633] font-bold">{period}</small>
        </h3>
        <p className="color-white">{copy}</p>
      </div>
    </div>
  )
}
