"use client"

import { useState } from "react"
import { Clock, GraduationCap, CheckCircle } from "lucide-react"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import { programs, programTypes } from "@/data/programs"
import type { Program } from "@/types"

const typeColors: Record<string, string> = {
  Undergraduate: "bg-meridian-navy-50 text-meridian-navy",
  Postgraduate: "bg-sky-gold/10 text-sky-gold-700",
  Diploma: "bg-green-50 text-green-700",
  Certificate: "bg-purple-50 text-purple-700",
}

function ProgramCard({ program }: { program: Program }) {
  return (
    <div className="rounded-2xl border border-soft-blue-gray bg-white p-6 transition-all duration-300 hover:border-meridian-navy/20 hover:shadow-lg md:p-8">
      <span
        className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
          typeColors[program.type] || "bg-meridian-navy-50 text-meridian-navy"
        }`}
      >
        {program.type}
      </span>
      <h3 className="mt-3 text-xl font-semibold text-meridian-navy">
        {program.title}
      </h3>
      <p className="mt-3 leading-relaxed text-muted-gray">
        {program.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-gray">
        <span className="flex items-center gap-1.5">
          <Clock className="h-4 w-4" />
          {program.duration}
        </span>
        <span className="flex items-center gap-1.5">
          <GraduationCap className="h-4 w-4" />
          {program.faculty}
        </span>
      </div>
      <div className="mt-4 border-t border-soft-blue-gray pt-4">
        <p className="mb-2 text-sm font-medium text-meridian-navy">
          Programme Highlights:
        </p>
        <ul className="space-y-1.5">
          {program.highlights.map((h) => (
            <li
              key={h}
              className="flex items-center gap-2 text-sm text-muted-gray"
            >
              <CheckCircle className="h-4 w-4 shrink-0 text-sky-gold" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function ProgramsPage() {
  const [activeType, setActiveType] = useState<string>("All")

  const filtered =
    activeType === "All"
      ? programs
      : programs.filter((p) => p.type === activeType)

  return (
    <>
      <section className="gradient-navy section-padding pt-32">
        <Container>
          <SectionHeading
            title="Our Programmes"
            subtitle="Explore our accredited programmes in Health Sciences and Management Technology. Find the path that fits your career goals."
            light
          />
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <div className="mb-10 flex flex-wrap gap-2">
            {programTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  activeType === type
                    ? "bg-meridian-navy text-white shadow-md"
                    : "bg-light-gray text-muted-gray hover:bg-soft-blue-gray"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {filtered.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="py-12 text-center text-muted-gray">
              No programmes found for this category.
            </p>
          )}
        </Container>
      </section>
    </>
  )
}
