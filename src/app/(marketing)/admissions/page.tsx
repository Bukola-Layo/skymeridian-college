import type { Metadata } from "next"
import {
  FileText,
  ClipboardCheck,
  Users,
  MailCheck,
  CreditCard,
  Download,
  Calendar,
} from "lucide-react"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import { Button } from "@/components/ui/button"
import { AdmissionPathways } from "@/components/sections/admission-pathways"
import { admissionPathways } from "@/data/admission-pathways"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Learn about admission requirements, the application process, tuition, and how to apply to Sky Meridian College of Health Sciences and Management Technology.",
}

const process = [
  {
    icon: FileText,
    title: "Complete Application",
    description:
      "Fill out the online application form and upload all required documents.",
  },
  {
    icon: CreditCard,
    title: "Pay Application Fee",
    description:
      "Pay the non-refundable application fee through any of our designated payment channels.",
  },
  {
    icon: ClipboardCheck,
    title: "Application Review",
    description:
      "The admissions committee reviews your application for completeness and eligibility.",
  },
  {
    icon: Users,
    title: "Admission Interview",
    description:
      "Shortlisted candidates are invited for an interview with the admissions panel.",
  },
  {
    icon: MailCheck,
    title: "Admission Decision",
    description:
      "Successful candidates receive an offer letter and proceed to enrollment.",
  },
]

const importantDates = [
  { label: "Application Opens", date: "August 1, 2026" },
  { label: "Application Deadline", date: "October 31, 2026" },
  { label: "Interview Period", date: "November 2026" },
  { label: "Admission Decisions", date: "December 2026" },
  { label: "Session Begins", date: "January 2027" },
]

export default function AdmissionsPage() {
  return (
    <>
      <section className="gradient-navy section-padding pt-32">
        <Container>
          <SectionHeading
            title="Admissions"
            subtitle="Begin your journey at Sky Meridian College. Find everything you need to know about requirements, deadlines, and how to apply."
            light
          />
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <span className="text-sm font-medium uppercase tracking-wider text-sky-gold">
                Admission Pathways
              </span>
              <h2 className="mt-2 text-2xl font-bold text-meridian-navy md:text-3xl">
                Choose Your Entry Route
              </h2>
              <p className="mt-4 text-muted-gray">
                Select your preferred admission pathway below to view the specific requirements
                for JAMB, JUPEB, Part Time, and Direct Entry into Sky Meridian College.
              </p>
              <div className="mt-8">
                <AdmissionPathways pathways={admissionPathways} />
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-soft-blue-gray bg-light-gray p-6 md:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-sky-gold" />
                  <h3 className="text-xl font-semibold text-meridian-navy">
                    Important Dates
                  </h3>
                </div>
                <div className="space-y-4">
                  {importantDates.map((d) => (
                    <div
                      key={d.label}
                      className="flex items-center justify-between border-b border-soft-blue-gray pb-4 last:border-0 last:pb-0"
                    >
                      <span className="text-sm text-muted-gray">{d.label}</span>
                      <span className="text-sm font-medium text-meridian-navy">
                        {d.date}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 space-y-3">
                  <Button asChild variant="primary" className="w-full">
                    <Link href="/contact">Apply Now</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact">
                      <Download className="h-4 w-4" />
                      Download Brochure
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-light-gray">
        <Container>
          <SectionHeading
            title="Application Process"
            subtitle="Follow these simple steps to apply to Sky Meridian College."
          />
          <div className="mx-auto max-w-3xl">
            <div className="space-y-8">
              {process.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={step.title} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-meridian-navy text-white shadow-md">
                        <Icon className="h-6 w-6" />
                      </div>
                      {index < process.length - 1 && (
                        <div className="mt-2 h-full w-0.5 bg-meridian-navy-200" />
                      )}
                    </div>
                    <div className="pb-8">
                      <div className="mb-1 flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-gold text-xs font-bold text-white">
                          {index + 1}
                        </span>
                        <h3 className="text-lg font-semibold text-meridian-navy">
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-muted-gray">
                        {step.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
