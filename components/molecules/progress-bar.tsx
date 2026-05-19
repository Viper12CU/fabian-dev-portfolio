type ProgressBarProps = {
  label: string
  value: number
}

export function ProgressBar({ label, value }: ProgressBarProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between">
        <strong className="pb-2">{label}</strong>
        <span className="pb-2 color-white">{value}%</span>
      </div>
      <div className="h-0.5 bg-white">
        <div
          className="h-0.5 bg-[#232B2B]"
          style={{ width: `${value}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  )
}
