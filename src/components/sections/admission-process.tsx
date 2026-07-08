import { FileText, ClipboardCheck, Users, MailCheck } from "lucide-react"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"

const steps = [
  {
    icon: FileText,
    title: "Submit Application",
    description: "Complete the online application form and upload your academic documents, identification, and passport photographs.",
  },
  {
    icon: ClipboardCheck,
    title: "Screening & Review",
    description: "Our admissions team reviews your application to ensure you meet the program requirements and qualifications.",
  },
  {
    icon: Users,
    title: "Admission Interview",
    description: "Shortlisted candidates are invited for an interview to assess their aptitude, motivation, and fit for the program.",
  },
  {
    icon: MailCheck,
    title: "Acceptance & Enrollment",
    description: "Successful candidates receive an offer letter and proceed to complete enrollment, including fee payment and registration.",
  },
]

export function AdmissionProcess() {
  return (
    <section className="section-padding bg-light-gray">
      <Container>
        <SectionHeading
          title="Admission Process"
          subtitle="Our streamlined admission process makes it easy to begin your journey at Sky Meridian."
        />
        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.title} className="relative text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-meridian-navy text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <div className="absolute top-0 left-[calc(50%+2.5rem)] hidden h-0.5 w-[calc(100%-5rem)] bg-meridian-navy-200 md:block" />
                <div className="mx-auto mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-sky-gold text-xs font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-meridian-navy">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-gray">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
