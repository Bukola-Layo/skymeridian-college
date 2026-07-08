"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Container } from "@/components/shared/container"
import { Button } from "@/components/ui/button"

const slides = [
  "/images/IMG-20260706-WA0035.jpg",
  "/images/IMG-20260706-WA0030.jpg",
]

export function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden bg-meridian-navy">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={slides[current]}
          alt=""
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(216,166,42,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(32,59,124,0.4),transparent_50%)]" />
      <div className="section-padding relative pt-32">
        <Container>
          <div className="flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-sky-gold/30 bg-sky-gold/10 px-4 py-1.5 text-sm text-sky-gold"
            >
              <CheckCircle className="h-4 w-4" />
              <span>In Affiliation with Wesley University, Ondo State</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 max-w-4xl text-lg font-bold leading-tight text-white lg:text-4xl"
            >
              Shaping the Future of{" "}
              <span className="text-sky-gold">Healthcare</span> and{" "}
              <span className="text-sky-gold">Management</span> Excellence
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80"
            >
              Sky Meridian College offers flexible, accredited programmes in Health Sciences and
              Management Technology — designed for students and working professionals seeking
              world-class education and career advancement.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap justify-start gap-4"
            >
              <Button asChild variant="primary" size="lg">
                <Link href="/admissions">
                  Apply Now <ArrowRight className="ml-1 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-meridian-navy">
                <Link href="/programs">View Our Programmes</Link>
              </Button>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  )
}
