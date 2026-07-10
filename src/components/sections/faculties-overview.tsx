import Link from "next/link"
import { ArrowRight, Building2 } from "lucide-react"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import { Button } from "@/components/ui/button"
import { faculties } from "@/data/faculties"

const featuredFaculties = faculties.slice(0, 6)

export function FacultiesOverview() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          title="Our Colleges"
          subtitle="Ten specialised colleges delivering exceptional education across health sciences, management, law, and technology."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredFaculties.map((faculty) => (
            <div
              key={faculty.id}
              className="group rounded-2xl border border-soft-blue-gray bg-white p-6 shadow-sm transition-all duration-300 hover:border-meridian-navy/20 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-meridian-navy-50 text-meridian-navy transition-colors group-hover:bg-meridian-navy group-hover:text-white">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-meridian-navy">
                {faculty.name}
              </h3>
              <p className="mb-3 line-clamp-2 leading-relaxed text-muted-gray">
                {faculty.description}
              </p>
              <ul className="mb-4 space-y-1.5">
                {faculty.departments.slice(0, 3).map((dept) => (
                  <li key={dept} className="flex items-center gap-2 text-sm text-muted-gray">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sky-gold" />
                    {dept}
                  </li>
                ))}
                {faculty.departments.length > 3 && (
                  <li className="text-sm text-meridian-navy/60">
                    +{faculty.departments.length - 3} more
                  </li>
                )}
              </ul>
              <Button asChild variant="ghost" size="sm">
                <Link href="/faculties">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/faculties">
              View All Colleges <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}
