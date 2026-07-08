"use client"

import { motion } from "framer-motion"
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1"
import { testimonials } from "@/data/testimonials"

const columnTestimonials = testimonials.map((t) => ({
  text: t.content,
  image: t.avatar,
  name: t.name,
  role: t.role,
}))

const firstColumn = columnTestimonials.slice(0, 3)
const secondColumn = columnTestimonials.slice(3, 6)
const thirdColumn = columnTestimonials.slice(6, 9)

export function Testimonials() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-meridian-navy to-meridian-navy-900 text-white">
      <div className="container-main relative z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-[540px] flex-col items-center justify-center"
        >
          <div className="rounded-lg border border-sky-gold/30 bg-sky-gold/10 px-4 py-1 text-sm text-sky-gold">
            Testimonials
          </div>
          <h2 className="mt-5 text-balance text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            What Our Students Say
          </h2>
          <p className="mt-5 text-balance text-center text-white/75">
            Hear from our alumni and current students about their Sky Meridian experience.
          </p>
        </motion.div>

        <div className="mx-auto mt-10 flex max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  )
}
