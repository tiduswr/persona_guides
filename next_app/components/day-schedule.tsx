import { SocialLink } from "@/types/social-links-entities"

export function DaySchedule({ available }: { available: SocialLink["rankUp"]["available"] }) {
  const days = [
    { label: "M", value: available.monday },
    { label: "T", value: available.tuesday },
    { label: "W", value: available.wednesday },
    { label: "T", value: available.thursday },
    { label: "F", value: available.friday },
    { label: "S", value: available.saturday },
    { label: "S", value: available.sunday },
  ]

  return (
    <div className="flex gap-1">
      {days.map((day, i) => (
        <span
          key={i}
          className={`flex h-5 w-5 items-center justify-center rounded text-[9px] font-bold border ${
            day.value 
              ? "bg-primary/20 border-primary/40 text-primary" 
              : "bg-secondary/20 border-border text-muted-foreground/40"
          }`}
        >
          {day.label}
        </span>
      ))}
    </div>
  )
}