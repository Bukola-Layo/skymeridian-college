import { ArrowRight } from "lucide-react"
import type { LeadershipMember } from "@/types"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"

interface CoreLeadershipProps {
  title?: string
  subtitle?: string
  members: LeadershipMember[]
}

export function CoreLeadership({
  title = "Core Leadership",
  subtitle = "Meet the dedicated team driving academic excellence and institutional growth at Sky Meridian College.",
  members,
}: CoreLeadershipProps) {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading title={title} subtitle={subtitle} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {members.map((member) => (
            <div key={member.id} className="group relative min-h-[27rem] overflow-hidden rounded-xl">
              <img
                src={member.image}
                alt={member.name}
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-meridian-navy/90 via-meridian-navy/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8">
                <p className="mb-1 text-sm font-medium text-sky-gold">{member.role}</p>
                <h3 className="mb-2 text-xl font-semibold">{member.name}</h3>
                <p className="mb-6 line-clamp-2 text-sm text-white/80">
                  {member.description}
                </p>
                <div className="flex items-center text-sm font-medium text-white/90 group-hover:underline">
                  View profile
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
