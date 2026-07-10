"use client"

import { FlaskConical, Users, Building2, Award, Globe, BookOpen } from "lucide-react"
import { motion } from "framer-motion"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"

const reasons = [
  {
    icon: FlaskConical,
    title: "Modern Laboratories",
    description: "State-of-the-art simulation labs and science facilities for hands-on training.",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Learn from experienced professionals and academics with industry credentials.",
  },
  {
    icon: Building2,
    title: "Industry Partnerships",
    description: "Strong ties with hospitals, clinics, and corporations for internships and placements.",
  },
  {
    icon: Award,
    title: "Accredited Programs",
    description: "All programs are fully accredited by NUC and relevant professional bodies.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Curriculum aligned with international standards and global health challenges.",
  },
  {
    icon: BookOpen,
    title: "Flexible Learning",
    description: "Blended learning options combining online and on-campus education.",
  },
]

const mid = Math.ceil(reasons.length / 2)
const row1 = reasons.slice(0, mid)
const row2 = reasons.slice(mid)

function Card({ reason }: { reason: (typeof reasons)[number] }) {
  const Icon = reason.icon
  return (
    <div className="group w-[280px] shrink-0 rounded-2xl border border-soft-blue-gray bg-white p-6 shadow-sm transition-all duration-300 hover:border-meridian-navy/20 hover:shadow-lg sm:w-[300px]">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-meridian-navy-50 text-meridian-navy transition-colors group-hover:bg-meridian-navy group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-meridian-navy">{reason.title}</h3>
      <p className="text-sm leading-relaxed text-muted-gray">{reason.description}</p>
    </div>
  )
}

function ScrollRow({
  items,
  duration,
  reverse,
}: {
  items: typeof reasons
  duration: number
  reverse?: boolean
}) {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex gap-6"
      >
        {[...items, ...items].map((reason, index) => (
          <Card key={`${reason.title}-${index}`} reason={reason} />
        ))}
      </motion.div>
    </div>
  )
}

export function WhyChoose() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          title="Why Choose Sky Meridian?"
          subtitle="We provide the education, environment, and opportunities you need to succeed."
        />
        <div className="space-y-6">
          <ScrollRow items={row1} duration={20} />
          <ScrollRow items={row2} duration={20} reverse />
        </div>
      </Container>
    </section>
  )
}
