import { GraduationCap, TrendingUp, HeartHandshake } from "lucide-react"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"

const features = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description:
      "Rigorous curricula designed in consultation with industry experts and accreditation bodies to meet global standards.",
  },
  {
    icon: TrendingUp,
    title: "Career-Focused Training",
    description:
      "Practical, hands-on learning with clinical placements, internships, and industry exposure from day one.",
  },
  {
    icon: HeartHandshake,
    title: "Holistic Development",
    description:
      "We nurture not just academic competence but character, leadership, and ethical professional values.",
  },
]

export function Welcome() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          title="Welcome to Sky Meridian"
          subtitle="Where academic rigour meets practical excellence in health sciences and management technology."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-soft-blue-gray bg-white p-8 transition-all duration-300 hover:border-meridian-navy/20 hover:shadow-lg"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-meridian-navy-50 text-meridian-navy transition-colors group-hover:bg-meridian-navy group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-meridian-navy">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-muted-gray">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
