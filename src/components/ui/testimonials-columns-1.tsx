"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TestimonialColumnItem {
  text: string
  image: string
  name: string
  role: string
}

interface TestimonialsColumnProps {
  testimonials: TestimonialColumnItem[]
  duration?: number
  className?: string
}

export function TestimonialsColumn({
  testimonials,
  duration = 15,
  className,
}: TestimonialsColumnProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        animate={{ y: ["0%", "-50%"] }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={`${testimonial.name}-${index}`}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors duration-300 hover:bg-white/10 md:p-8"
          >
            <div className="mb-4 flex items-center gap-1 text-sky-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="mb-6 leading-relaxed text-white/80">&ldquo;{testimonial.text}&rdquo;</p>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-sky-gold/20">
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-sm font-bold text-sky-gold">
                    {testimonial.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                )}
              </div>
              <div>
                <div className="text-sm font-semibold">{testimonial.name}</div>
                <div className="text-xs text-white/60">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
