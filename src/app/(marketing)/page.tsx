import { Hero } from "@/components/hero/hero"
import { AboutSection } from "@/components/sections/about-section"
import { Announcement } from "@/components/sections/announcement"
import { ProvostWelcome } from "@/components/sections/provost-welcome"
import { Welcome } from "@/components/sections/welcome"
import { FeaturedPrograms } from "@/components/sections/featured-programs"
import { WhyChoose } from "@/components/sections/why-choose"
import { FacultiesOverview } from "@/components/sections/faculties-overview"

import { Testimonials } from "@/components/sections/testimonials"
import { LatestNews } from "@/components/sections/latest-news"
import { FAQ } from "@/components/sections/faq"
import { FinalCTA } from "@/components/sections/final-cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Announcement />
      <ProvostWelcome />
      <Welcome />
      <FeaturedPrograms />
      <WhyChoose />
      <FacultiesOverview />

      <Testimonials />
      <LatestNews />
      <FAQ />
      <FinalCTA />
    </>
  )
}
