import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { Container } from "@/components/shared/container"
import { Button } from "@/components/ui/button"
import { BackgroundBeams } from "@/components/ui/background-beams"

export function Announcement() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_#1a3a8a_0%,_#0a1a4a_50%,_#050d25_100%)]">
      <BackgroundBeams />
      <div className="section-padding relative z-10">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300">
              <Calendar className="h-4 w-4" />
              <span>Academic Calendar</span>
            </div>
            <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Next Session Begins in{" "}
              <span className="text-blue-300">September</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-200/80">
              Don&apos;t miss the opportunity to start your journey at Sky Meridian College.
              Applications are now open for the upcoming academic session.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild variant="primary" size="lg">
                <Link href="/admissions">
                  Apply Now <ArrowRight className="ml-1 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Request Information</Link>
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
