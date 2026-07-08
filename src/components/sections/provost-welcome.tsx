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
                Where Tradition Meets Transformation
              </h2>
              <div className="mt-6 space-y-4 text-muted-gray leading-relaxed">
                <p>
                  It is with profound gratitude and a bold sense of vision that I welcome you to
                  Sky Meridian College of Health Sciences and Management Technology. We are not
                  simply extending education beyond traditional classrooms — we are reimagining
                  the future of learning, building a bridge between aspiration, opportunity, and
                  achievement.
                </p>
                <p>
                  Our mission is to deliver excellence without borders — empowering learners
                  regardless of their background and preparing students to thrive in a knowledge
                  economy defined by innovation and adaptability. Whether you are starting your
                  academic journey or advancing your career, Sky Meridian offers flexible,
                  world-class education tailored for you.
                </p>
                <p>
                  At Sky Meridian, your ambition is valid, your goals are achievable, and your
                  success is our priority. I invite you to explore our programmes, visit our
                  campus, and join a community dedicated to healthcare and management excellence.
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
