"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  GraduationCap,
  Briefcase,
  Globe,
  ChevronDown,
  ArrowRight,
} from "lucide-react"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import { cn } from "@/lib/utils"

interface Programme {
  id: string
  icon: typeof GraduationCap
  title: string
  shortTitle: string
  bestFor: string
  description: string
  duration: { label: string; items: string[] }
  courses: string[]
}

const programmes: Programme[] = [
  {
    id: "full-time",
    icon: GraduationCap,
    title: "Full-Time Programme",
    shortTitle: "Full-Time",
    bestFor:
      "Secondary school graduates and students seeking a traditional campus experience.",
    description:
      "Experience immersive, hands-on learning with full access to lectures, laboratories, practical sessions, campus facilities, student organizations, and academic support services.",
    duration: {
      label: "Duration",
      items: [
        "Diploma Programmes: 2 Years",
        "Degree Programmes: 4\u20135 Years (where applicable)",
      ],
    },
    courses: [
      "Community Health Science",
      "Nursing Science",
      "Medical Laboratory Science",
      "Pharmacy",
      "Computer Science",
      "Accounting",
      "Business Administration",
      "Public Administration",
      "Law",
      "Nutrition & Dietetics",
      "Health Information Management",
      "Physiotherapy",
      "Radiography",
      "Human Physiology",
      "Mass Communication",
      "Economics",
    ],
  },
  {
    id: "part-time",
    icon: Briefcase,
    title: "Part-Time Programme",
    shortTitle: "Part-Time",
    bestFor:
      "Working professionals, entrepreneurs, civil servants, and individuals seeking flexible study schedules.",
    description:
      "Our Part-Time programme allows students to balance work, family, and education while earning a recognized qualification through weekend and evening classes.",
    duration: {
      label: "Duration",
      items: [
        "Diploma Programmes: 2\u20133 Years",
        "Degree Programmes: 4\u20135 Years (depending on entry qualification)",
      ],
    },
    courses: [
      "Accounting",
      "Business Administration",
      "Public Administration",
      "Economics",
      "Mass Communication",
      "Computer Science",
      "Health Information Management",
      "Community Health Science",
      "Entrepreneurship",
    ],
  },
  {
    id: "odl",
    icon: Globe,
    title: "Online Distance Learning (ODL)",
    shortTitle: "Online Distance",
    bestFor:
      "Students who prefer remote learning or reside outside the campus location.",
    description:
      "Study from anywhere through our flexible online learning platform, featuring virtual lectures, digital learning materials, online assessments, and dedicated academic support.",
    duration: {
      label: "Duration",
      items: [
        "Diploma Programmes: 2 Years",
        "Degree Programmes: 4 Years",
      ],
    },
    courses: [
      "Accounting",
      "Business Administration",
      "Economics",
      "Public Administration",
      "Computer Science",
      "Entrepreneurship",
      "Health Information Management",
      "Mass Communication",
    ],
  },
]

function Accordion({
  title,
  children,
  defaultOpen = false,
}: {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-soft-blue-gray last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-6 py-3 text-left text-sm font-medium text-meridian-navy transition-colors hover:text-sky-gold"
      >
        {title}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FlexibleAcademicLearning() {
  const [activeId, setActiveId] = useState(programmes[0].id)
  const active = programmes.find((p) => p.id === activeId)!

  return (
    <section className="section-padding bg-white pb-0 lg:pb-0">
      <Container>
        <SectionHeading
          title="Flexible Academic Learning Structure"
        />
        <p className="mx-auto mb-6 max-w-3xl text-center text-muted-gray">
          We offer flexible study options designed to accommodate recent
          secondary school graduates, working professionals, and lifelong
          learners.
        </p>

        <div className="mx-auto max-w-5xl">
          <div className="mb-6 flex gap-2 rounded-2xl border border-soft-blue-gray bg-light-gray p-2">
            {programmes.map((p) => {
              const Icon = p.icon
              const isActive = activeId === p.id
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveId(p.id)}
                  className={cn(
                    "flex flex-1 items-center justify-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 md:py-4",
                    isActive
                      ? "bg-meridian-navy text-white shadow-lg"
                      : "text-muted-gray hover:bg-meridian-navy-50 hover:text-meridian-navy",
                  )}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  <span className="hidden md:inline">{p.shortTitle}</span>
                </button>
              )
            })}
          </div>

          <div className="rounded-2xl border border-soft-blue-gray bg-light-gray p-6 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-meridian-navy text-white shadow-sm">
                    <active.icon className="h-7 w-7" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold text-meridian-navy">
                      {active.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-sky-gold">
                      {active.bestFor}
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-muted-gray">
                  {active.description}
                </p>

                <div className="mt-6 divide-y divide-soft-blue-gray rounded-lg border border-soft-blue-gray bg-white">
                  <Accordion title={active.duration.label} defaultOpen>
                    <ul className="space-y-1.5">
                      {active.duration.items.map((item) => (
                        <li key={item} className="text-sm text-muted-gray">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Accordion>

                  <Accordion title="Available Courses">
                    <ul className="space-y-1.5">
                      {active.courses.map((course) => (
                        <li key={course} className="text-sm text-muted-gray">
                          {course}
                        </li>
                      ))}
                    </ul>
                  </Accordion>
                </div>

                <div className="mt-6">
                  <Link
                    href="/admissions"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-sky-gold transition-colors hover:text-sky-gold-700"
                  >
                    Apply Now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  )
}
