import Link from "next/link"
import { ArrowRight, Clock, GraduationCap } from "lucide-react"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import { Button } from "@/components/ui/button"
import { featuredPrograms } from "@/data/programs"

export function FeaturedPrograms() {
  return (
    <section className="section-padding bg-light-gray">
      <Container>
        <SectionHeading
          title="Featured Programs"
          subtitle="Explore our flagship programs designed to meet the demands of the modern healthcare and management sectors."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {featuredPrograms.map((program) => (
            <Link
              key={program.id}
              href="/programs"
              className="group rounded-2xl border border-soft-blue-gray bg-white p-6 transition-all duration-300 hover:border-meridian-navy/20 hover:shadow-lg md:p-8"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="inline-block rounded-full bg-meridian-navy-50 px-3 py-1 text-xs font-medium text-meridian-navy">
                    {program.type}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-meridian-navy transition-colors group-hover:text-meridian-navy-600">
                    {program.title}
                  </h3>
                </div>
                <ArrowRight className="mt-2 h-5 w-5 shrink-0 text-muted-gray transition-colors group-hover:text-meridian-navy" />
              </div>
              <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-gray">
                {program.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-gray">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {program.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <GraduationCap className="h-4 w-4" />
                  {program.faculty}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/programs">
              View All Programs <ArrowRight className="ml-1 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}
