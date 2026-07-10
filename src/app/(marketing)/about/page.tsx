import type { Metadata } from "next"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import { CoreLeadership } from "@/components/sections/core-leadership"
import { leadershipTeam } from "@/data/leadership"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Sky Meridian College of Health Sciences and Management Technology — our mission, vision, values, and commitment to academic excellence.",
}

export default function AboutPage() {
  return (
    <>
      <section className="gradient-navy section-padding pt-32">
        <Container>
          <SectionHeading
            title="About Sky Meridian"
            subtitle="Discover our story, mission, and commitment to excellence in health sciences and management technology education."
            light
          />
        </Container>
      </section>

      <section className="section-padding bg-white pb-0 md:pb-0 lg:pb-0">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-meridian-navy md:text-4xl">
              Our Story
            </h2>
            <div className="mt-6 space-y-5 text-muted-gray leading-relaxed">
              <p>
                Sky Meridian College of Health Sciences and Management Technology was
                established with a clear vision: to bridge the critical gap between
                academic preparation and industry reality in Nigeria&apos;s healthcare and
                management sectors. Recognising the growing demand for skilled professionals
                who can navigate the complexities of modern healthcare systems and
                technology-driven business environments, we created an institution
                built on the pillars of excellence, innovation, and practical competence.
              </p>
              <p>
                Since our founding, we have grown into a thriving academic community
                dedicated to producing graduates who are not only knowledgeable but
                also ready to make an immediate impact in their chosen fields. Our
                programmes are designed in close consultation with industry partners,
                healthcare institutions, and accreditation bodies to ensure relevance
                and rigour.
              </p>
              <p>
                At Sky Meridian, we believe that education is the most powerful tool
                for transforming lives and communities. We are committed to providing
                accessible, high-quality education that empowers our students to
                achieve their full potential and become leaders in their professions.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-soft-blue-gray bg-light-gray p-8 shadow-sm">
                <h3 className="text-xl font-bold text-meridian-navy">Our Vision</h3>
                <p className="mt-4 text-muted-gray leading-relaxed">
                  To be a leading institution in health sciences and management technology
                  education, producing globally competitive professionals who transform
                  healthcare delivery and business innovation across Africa and beyond.
                </p>
              </div>
              <div className="rounded-2xl border border-soft-blue-gray bg-light-gray p-8 shadow-sm">
                <h3 className="text-xl font-bold text-meridian-navy">Our Mission</h3>
                <p className="mt-4 text-muted-gray leading-relaxed">
                  To provide accessible, high-quality education that integrates theoretical
                  knowledge with practical skills, fosters research and innovation, and
                  develops ethical leaders committed to improving human well-being and
                  organisational excellence.
                </p>
              </div>
              <div className="rounded-2xl border border-soft-blue-gray bg-light-gray p-8 shadow-sm">
                <h3 className="text-xl font-bold text-meridian-navy">Our Values</h3>
                <p className="mt-4 text-muted-gray leading-relaxed">
                  Excellence, Integrity, Innovation, Compassion, Professionalism, and
                  Community Service guide everything we do — from curriculum design to
                  student support and community engagement.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CoreLeadership members={leadershipTeam} />
    </>
  )
}
