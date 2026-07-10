import { Quote } from "lucide-react"
import { Container } from "@/components/shared/container"

export function ProvostWelcome() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="w-72 shrink-0 lg:w-96">
              <div className="flex h-full min-h-48 items-center justify-center overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/images/IMG-20260706-WA0037.jpg"
                  alt="Provost"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div>
              <div className="mb-2 flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-sky-gold">
                <Quote className="h-4 w-4" />
                Provost&apos;s Welcome
              </div>
              <h2 className="text-2xl font-bold text-meridian-navy md:text-3xl lg:text-4xl">
                Welcome to Sky Meridian College of Health Sciences and Management Technology
              </h2>
              <div className="mt-6 space-y-4 text-muted-gray leading-relaxed">
                <p>
                  It gives me great pleasure to welcome you to an institution committed to
                  preparing competent professionals and visionary leaders in health sciences,
                  management, and technology. At Sky Meridian, we believe that education is not
                  only about acquiring knowledge but also about developing the character,
                  creativity, and social responsibility needed to make a meaningful impact in
                  society.
                </p>
                <p>
                  Our mission is to empower students through innovative teaching, practical
                  learning experiences, interdisciplinary collaboration, and community engagement.
                  We are dedicated to creating an environment that inspires academic excellence,
                  encourages critical thinking, and equips our students with the skills required
                  to thrive in a rapidly evolving world.
                </p>
                <p>
                  As you explore our programmes and facilities, you will discover a college that
                  values professionalism, integrity, compassion, and lifelong learning. Whether
                  you are a prospective student, parent, partner, or visitor, we invite you to
                  become part of a vibrant community that is passionate about transforming
                  healthcare delivery and improving lives.
                </p>
                <p>
                  On behalf of the Governing Council, management, staff, and students, I warmly
                  welcome you to Sky Meridian College of Health Sciences and Management
                  Technology. We look forward to accompanying you on a rewarding journey of
                  learning, growth, and achievement.
                </p>
              </div>
              <div className="mt-6 border-l-4 border-sky-gold pl-4">
                <p className="font-semibold text-meridian-navy">Dr. Lamidi Ismail Abolade.HND,PG.d, M.sc,Nifpwa, Ipfml.</p>
                <p className="text-sm text-muted-gray">Provost, Sky Meridian College</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
