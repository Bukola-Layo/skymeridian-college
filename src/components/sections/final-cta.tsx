"use client"

import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { Container } from "@/components/shared/container"
import { Button } from "@/components/ui/button"
import { BackgroundBeams } from "@/components/ui/background-beams"

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_#1a3a8a_0%,_#0a1a4a_50%,_#050d25_100%)]">
      <BackgroundBeams />
      <div className="section-padding relative z-10">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300"
            >
              <Sparkles className="h-4 w-4" />
              <span>Get Started Today</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white md:text-4xl lg:text-5xl"
            >
              Ready to Begin Your Journey?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mx-auto mt-4 max-w-2xl text-lg text-blue-200/80"
            >
              Take the first step toward a rewarding career in health sciences or management technology.
              Apply now and join a community of excellence.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 flex flex-wrap justify-center gap-4"
            >
              <Button asChild variant="primary" size="lg">
                <Link href="/admissions">
                  Apply Now <ArrowRight className="ml-1 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  )
}
