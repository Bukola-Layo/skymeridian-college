"use client"

import { useState } from "react"
import { Calendar, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type Intake = "september" | "january"

interface DateEntry {
  label: string
  date: string
}

const dates: Record<Intake, DateEntry[]> = {
  september: [
    { label: "Application Opens", date: "February 1, 2026" },
    { label: "Application Deadline", date: "April 30, 2026" },
    { label: "Interview Period", date: "May 2026" },
    { label: "Admission Decisions", date: "June 2026" },
    { label: "Session Begins", date: "September 2026" },
  ],
  january: [
    { label: "Application Opens", date: "August 1, 2026" },
    { label: "Application Deadline", date: "October 31, 2026" },
    { label: "Interview Period", date: "November 2026" },
    { label: "Admission Decisions", date: "December 2026" },
    { label: "Session Begins", date: "January 2027" },
  ],
}

export function ImportantDates() {
  const [intake, setIntake] = useState<Intake>("january")

  return (
    <div className="rounded-2xl border border-soft-blue-gray bg-light-gray p-6 md:p-8">
      <div className="mb-6 flex items-center gap-3">
        <Calendar className="h-6 w-6 text-sky-gold" />
        <h3 className="text-xl font-semibold text-meridian-navy">
          Important Dates
        </h3>
      </div>

      <div className="mb-6 flex rounded-lg border border-soft-blue-gray bg-white p-1">
        <button
          onClick={() => setIntake("september")}
          className={`flex-1 rounded-md px-3 py-2 text-center text-sm font-medium transition-colors ${
            intake === "september"
              ? "bg-meridian-navy text-white shadow-sm"
              : "text-muted-gray hover:text-meridian-navy"
          }`}
        >
          September Intake
        </button>
        <button
          onClick={() => setIntake("january")}
          className={`flex-1 rounded-md px-3 py-2 text-center text-sm font-medium transition-colors ${
            intake === "january"
              ? "bg-meridian-navy text-white shadow-sm"
              : "text-muted-gray hover:text-meridian-navy"
          }`}
        >
          January Intake
        </button>
      </div>

      <div className="space-y-4">
        {dates[intake].map((d) => (
          <div
            key={d.label}
            className="flex items-center justify-between border-b border-soft-blue-gray pb-4 last:border-0 last:pb-0"
          >
            <span className="text-sm text-muted-gray">{d.label}</span>
            <span className="text-sm font-medium text-meridian-navy">
              {d.date}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8 space-y-3">
        <Button asChild variant="primary" className="w-full">
          <Link href="/contact">Apply Now</Link>
        </Button>
        <Button asChild variant="outline" className="w-full">
          <Link href="/contact">
            <Download className="h-4 w-4" />
            Download Brochure
          </Link>
        </Button>
      </div>
    </div>
  )
}
