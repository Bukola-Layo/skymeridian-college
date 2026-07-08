import { Eye, Target, Shield } from "lucide-react"
import { Container } from "@/components/shared/container"

const items = [
  {
    icon: Eye,
    title: "Our Vision",
    content:
      "To be a leading institution in health sciences and management technology education, producing globally competitive professionals who transform healthcare delivery and business innovation across Africa and beyond.",
  },
  {
    icon: Target,
    title: "Our Mission",
    content:
      "To provide accessible, high-quality education that integrates theoretical knowledge with practical skills, fosters research and innovation, and develops ethical leaders committed to improving human well-being and organisational excellence.",
  },
  {
    icon: Shield,
    title: "Our Values",
    content:
      "Excellence, Integrity, Innovation, Compassion, Professionalism, and Community Service guide everything we do — from curriculum design to student support and community engagement.",
  },
]

export function VisionMission() {
  return (
    <section className="section-padding bg-light-gray">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-sky-gold/10 text-sky-gold">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-meridian-navy">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-muted-gray">{item.content}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
