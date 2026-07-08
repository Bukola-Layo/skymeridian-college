import { Library, Microscope, Monitor, Building, Utensils, Dumbbell } from "lucide-react"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"

const facilities = [
  { icon: Microscope, title: "Science Laboratories", description: "Fully equipped labs for anatomy, microbiology, chemistry, and clinical simulation." },
  { icon: Library, title: "Resource Centre", description: "A modern library with extensive collections, e-resources, and quiet study spaces." },
  { icon: Monitor, title: "Computer Labs", description: "State-of-the-art computer labs with health IT and management software." },
  { icon: Building, title: "Lecture Halls", description: "Spacious, air-conditioned lecture theatres with modern audio-visual equipment." },
  { icon: Utensils, title: "Cafeteria", description: "A clean, welcoming cafeteria serving nutritious meals and refreshments." },
  { icon: Dumbbell, title: "Sports Facilities", description: "Recreational areas for sports and physical well-being including a gymnasium." },
]

export function CampusFacilities() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          title="Campus Facilities"
          subtitle="Our campus provides an environment conducive to learning, research, and personal development."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => {
            const Icon = facility.icon
            return (
              <div
                key={facility.title}
                className="flex gap-4 rounded-2xl border border-soft-blue-gray bg-white p-6 transition-all duration-300 hover:border-meridian-navy/20 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-sky-gold/10 text-sky-gold">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-meridian-navy">{facility.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-gray">{facility.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
