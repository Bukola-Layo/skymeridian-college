import type { Metadata } from "next"
import { Building2, ArrowRight, Users, BookOpen } from "lucide-react"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import { faculties } from "@/data/faculties"

export const metadata: Metadata = {
  title: "Faculties",
  description:
    "Explore our ten specialised colleges delivering excellence in education, research, and professional development across health sciences, management, law, and technology.",
}

export default function FacultiesPage() {
  return (
    <>
      <section className="gradient-navy section-padding pt-32">
        <Container>
          <SectionHeading
            title="Our Faculties"
            subtitle="Ten specialised colleges dedicated to academic excellence, research innovation, and professional development across multiple disciplines."
            light
          />
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <div className="space-y-20">
            {faculties.map((faculty, index) => (
              <div key={faculty.id} className="grid items-start gap-10 lg:grid-cols-2">
                <div className={index === 1 ? "lg:order-2" : ""}>
                  <div className="mb-2 flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-sky-gold">
                    <Building2 className="h-4 w-4" />
                    Faculty
                  </div>
                  <h2 className="text-2xl font-bold text-meridian-navy md:text-3xl lg:text-4xl">
                    {faculty.name}
                  </h2>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 rounded-lg bg-meridian-navy-50 px-4 py-2 text-sm text-meridian-navy">
                      <Users className="h-4 w-4" />
                      <span>{faculty.departments.length} Departments</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg bg-sky-gold/10 px-4 py-2 text-sm text-sky-gold-700">
                      <BookOpen className="h-4 w-4" />
                      <span>Affiliated with Wesley University</span>
                    </div>
                  </div>
                  <p className="mt-6 leading-relaxed text-muted-gray">
                    {faculty.description}
                  </p>
                  <div className="mt-8">
                    <h3 className="mb-4 text-lg font-semibold text-meridian-navy">
                      Departments
                    </h3>
                    <div className="space-y-3">
                      {faculty.departments.map((dept) => (
                        <div
                          key={dept}
                          className="flex items-center gap-3 rounded-xl border border-soft-blue-gray p-4 transition-colors hover:border-meridian-navy/20 hover:bg-meridian-navy-50/50"
                        >
                          <ArrowRight className="h-4 w-4 shrink-0 text-sky-gold" />
                          <span className="text-sm text-muted-gray">{dept}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  className={`aspect-[4/3] overflow-hidden rounded-2xl shadow-lg ${
                    index === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
