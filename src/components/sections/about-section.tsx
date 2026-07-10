import Link from "next/link"
import { ArrowRight, GraduationCap, Users, Award, Building2 } from "lucide-react"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import { Button } from "@/components/ui/button"

const highlights = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description: "Rigorous curricula designed in consultation with industry experts and accreditation bodies.",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Learn from experienced professionals and academics with proven industry credentials.",
  },
  {
    icon: Award,
    title: "Wesley University Affiliation",
    description: "All programmes in affiliation with Wesley University, Ondo State — fully accredited and recognised.",
  },
  {
    icon: Building2,
    title: "Modern Facilities",
    description: "State-of-the-art labs, libraries, and learning environments for optimal education.",
  },
]

export function AboutSection() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-medium uppercase tracking-wider text-sky-gold">
              About Us
            </span>
            <h2 className="mt-2 text-3xl font-bold text-meridian-navy md:text-4xl lg:text-5xl">
              Shaping the Next Generation of Healthcare &amp; Management Leaders
            </h2>
            <p className="mt-6 leading-relaxed text-muted-gray">
              Sky Meridian College of Health Sciences and Management Technology is a premier
              institution dedicated to providing world-class education that bridges the gap
              between academic knowledge and practical industry demands.
            </p>
            <p className="mt-4 leading-relaxed text-muted-gray">
              Our mission is to produce highly skilled, ethical, and innovative professionals
              who will transform healthcare delivery and business management across Nigeria
              and beyond. We achieve this through a blend of rigorous academics, hands-on
              training, and strong industry partnerships.
            </p>
            <div className="mt-8">
              <Button asChild variant="outline">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-soft-blue-gray bg-light-gray p-5 shadow-sm transition-all duration-300 hover:border-meridian-navy/20 hover:shadow-md"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-meridian-navy-50 text-meridian-navy">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-1 text-sm font-semibold text-meridian-navy">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-gray">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
