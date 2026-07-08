import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
  className?: string
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl md:mb-16",
        centered && "mx-auto text-center",
        className
      )}
    >
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl",
          light ? "text-white" : "text-meridian-navy"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed md:text-xl",
            light ? "text-white/80" : "text-muted-gray"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
