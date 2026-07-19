import type { Metadata } from "next"
import { Download, Building2, CreditCard, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Container } from "@/components/shared/container"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/data/site"

export const metadata: Metadata = {
  title: "Apply Now",
  description:
    "Complete your application to Sky Meridian College. View payment account details and download the application form.",
}

const bankDetails = [
  {
    bank: "Kuda Bank",
    accountName: "Sky Meridian collge of health sciences and management technology",
    accountNumber: "3002634523",
  },
]

export default function ApplyPage() {
  return (
    <>
      <section className="gradient-navy section-padding pt-32">
        <Container>
          <Link
            href="/admissions"
            className="mb-6 inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-sky-gold"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Admissions
          </Link>
          <div className="mx-auto max-w-3xl">
            <span className="text-sm font-medium uppercase tracking-wider text-sky-gold">
              Application
            </span>
            <h1 className="mt-3 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Complete Your Application
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              Follow the steps below to apply to {siteConfig.shortName}. Pay the
              application fee through any of our designated bank accounts, then
              submit your completed application form.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-gold text-meridian-navy">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold text-meridian-navy">
                    Payment Account Details
                  </h2>
                </div>
                <p className="mt-4 text-muted-gray">
                  Pay the non-refundable application fee of{" "}
                  <span className="font-semibold text-meridian-navy">
                    ₦35,000
                  </span>{" "}
                  into any of the following bank accounts. After payment, attach
                  your deposit teller or bank transfer receipt to your
                  application form.
                </p>

                <div className="mt-6 space-y-4">
                  {bankDetails.map((bank) => (
                    <div
                      key={bank.accountNumber}
                      className="rounded-xl border border-soft-blue-gray bg-light-gray p-5 transition-shadow hover:shadow-md"
                    >
                      <div className="mb-3 flex items-center gap-2">
                        <CreditCard className="h-4 w-4 text-sky-gold" />
                        <h3 className="font-semibold text-meridian-navy">
                          {bank.bank}
                        </h3>
                      </div>
                      <dl className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <dt className="text-muted-gray">Account Name</dt>
                          <dd className="font-medium text-meridian-navy text-right max-w-[60%]">
                            {bank.accountName}
                          </dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-muted-gray">Account Number</dt>
                          <dd className="font-mono text-lg font-bold text-meridian-navy">
                            {bank.accountNumber}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="sticky top-24 rounded-2xl border border-soft-blue-gray bg-light-gray p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-meridian-navy text-white">
                      <Download className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-meridian-navy">
                      Application Form
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-gray">
                    Download the application form below, fill it out, and attach
                    your payment receipt and required documents. Submit the
                    completed form to the admissions office or email it to{" "}
                    <a
                      href={`mailto:${siteConfig.contact.admissionsEmail}`}
                      className="text-sky-gold underline underline-offset-2 hover:text-sky-gold-700"
                    >
                      {siteConfig.contact.admissionsEmail}
                    </a>
                    .
                  </p>
                  <Button asChild variant="primary" size="lg" className="mt-6 w-full">
                    <a href="/forms/Sky%20meridian%20application%20form.pdf" download>
                      <Download className="h-5 w-5" />
                      Download Form
                    </a>
                  </Button>
                  <p className="mt-3 text-xs text-muted-gray">
                    PDF format — print or fill digitally
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-light-gray">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-meridian-navy md:text-3xl">
              Submission Instructions
            </h2>
            <div className="mt-8 space-y-6">
              {[
                {
                  step: 1,
                  title: "Download the Application Form",
                  description:
                    "Click the download button above to get the Sky Meridian College application form.",
                },
                {
                  step: 2,
                  title: "Pay the Application Fee",
                  description:
                    "Make a payment of ₦35,000 into any of the bank accounts listed above. Keep your payment receipt.",
                },
                {
                  step: 3,
                  title: "Complete the Form",
                  description:
                    "Fill out all sections of the application form neatly. Attach copies of your payment receipt, academic credentials, and other required documents.",
                },
                {
                  step: 4,
                  title: "Submit Your Application",
                  description:
                    "Submit the completed form in person at the college admissions office or email a scanned copy to {siteConfig.contact.admissionsEmail}.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-meridian-navy text-sm font-bold text-white">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-meridian-navy">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-muted-gray">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
