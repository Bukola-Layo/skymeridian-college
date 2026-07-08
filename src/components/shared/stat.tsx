import type { Stat } from "@/types"

interface StatsProps {
  stats: Stat[]
}

export function Stats({ stats }: StatsProps) {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="text-3xl font-bold text-sky-gold md:text-4xl">
            {stat.value}
          </div>
          <div className="mt-1 text-sm text-white/80">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
