import type { Metadata } from "next"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/data/site"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Sky Meridian College. Find our address, phone, email, and send us a message.",
}

const contactDetails = [
  { icon: MapPin, label: "Address", value: siteConfig.contact.address },
  { icon: Phone, label: "Phone", value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone}` },
  { icon: Mail, label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
  { icon: Mail, label: "Admissions Email", value: siteConfig.contact.admissionsEmail, href: `mailto:${siteConfig.contact.admissionsEmail}` },
  { icon: Clock, label: "Office Hours", value: "Monday - Friday: 8:00 AM - 5:00 PM" },
]

export default function ContactPage() {
  return (
    <>
      <section className="gradient-navy section-padding pt-32">
        <Container>
          <SectionHeading
            title="Contact Us"
            subtitle="We'd love to hear from you. Reach out with questions, inquiries, or feedback."
            light
          />
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-meridian-navy md:text-3xl">
                Get in Touch
              </h2>
              <p className="mt-4 text-muted-gray">
                Have a question about our programs, admissions, or anything else? 
                Fill out the form and our team will get back to you promptly.
              </p>
              <div className="mt-8 space-y-6">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon
                  const content = (
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-meridian-navy-50 text-meridian-navy">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-meridian-navy">
                          {detail.label}
                        </p>
                        <p className="text-sm text-muted-gray">{detail.value}</p>
                      </div>
                    </div>
                  )
                  return detail.href ? (
                    <a key={detail.label} href={detail.href} className="block transition-opacity hover:opacity-80">
                      {content}
                    </a>
                  ) : (
                    <div key={detail.label}>{content}</div>
                  )
                })}
              </div>
            </div>
            <div className="rounded-2xl border border-soft-blue-gray bg-light-gray p-8 shadow-sm">
              <h3 className="mb-6 text-xl font-semibold text-meridian-navy">
                Send Us a Message
              </h3>
              <form className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-meridian-navy">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      className="w-full rounded-lg border border-soft-blue-gray bg-white px-4 py-2.5 text-sm text-dark-slate placeholder:text-muted-gray focus:border-meridian-navy focus:outline-none focus:ring-2 focus:ring-meridian-navy/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-meridian-navy">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="w-full rounded-lg border border-soft-blue-gray bg-white px-4 py-2.5 text-sm text-dark-slate placeholder:text-muted-gray focus:border-meridian-navy focus:outline-none focus:ring-2 focus:ring-meridian-navy/20"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-meridian-navy">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full rounded-lg border border-soft-blue-gray bg-white px-4 py-2.5 text-sm text-dark-slate focus:border-meridian-navy focus:outline-none focus:ring-2 focus:ring-meridian-navy/20"
                  >
                    <option value="">Select a subject</option>
                    <option value="admissions">Admissions Inquiry</option>
                    <option value="programs">Program Information</option>
                    <option value="scholarships">Scholarships</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-meridian-navy">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Your message..."
                    className="w-full rounded-lg border border-soft-blue-gray bg-white px-4 py-2.5 text-sm text-dark-slate placeholder:text-muted-gray focus:border-meridian-navy focus:outline-none focus:ring-2 focus:ring-meridian-navy/20 resize-y"
                  />
                </div>
                <Button type="submit" variant="primary" size="lg" className="w-full">
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
