import type { Metadata } from "next"
import {
  FileText,
  ClipboardCheck,
  Users,
  MailCheck,
  CreditCard,
} from "lucide-react"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import { AdmissionPathways } from "@/components/sections/admission-pathways"
import { ImportantDates } from "@/components/sections/important-dates"
import { admissionPathways } from "@/data/admission-pathways"

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
          <p className="mx-auto mt-6 max-w-2xl text-center text-white/80">
            Sky Meridian College runs two admission intakes each year —{" "}
            <span className="font-semibold text-sky-gold">September</span> and{" "}
            <span className="font-semibold text-sky-gold">January</span>.
            Select your preferred intake below to view the corresponding
            deadlines and important dates.
          </p>
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
                for JUPEB, Part Time, and Direct Entry into Sky Meridian College.
              </p>
              <div className="mt-8">
                <AdmissionPathways pathways={admissionPathways} />
              </div>
            </div>
            <div className="lg:col-span-2">
              <ImportantDates />
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
