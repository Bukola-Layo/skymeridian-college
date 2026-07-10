"use client"

import { useState } from "react"
import { CheckCircle } from "lucide-react"
import type { AdmissionPathway } from "@/types"

interface AdmissionPathwaysProps {
  pathways: AdmissionPathway[]
}

export function AdmissionPathways({ pathways }: AdmissionPathwaysProps) {
  const [activeId, setActiveId] = useState(pathways[0].id)
  const active = pathways.find((p) => p.id === activeId)!

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {pathways.map((p) => (
          <button
            key={p.id}
            onClick={() => setActiveId(p.id)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              activeId === p.id
                ? "bg-meridian-navy text-white shadow-sm"
                : "border border-soft-blue-gray bg-white text-muted-gray hover:border-meridian-navy/30 hover:text-meridian-navy"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-soft-blue-gray bg-light-gray p-6 shadow-sm md:p-8">
        <p className="mb-6 text-muted-gray">{active.description}</p>
        {active.sections.map((section) => (
          <div key={section.title} className="mb-6 last:mb-0">
            <h3 className="mb-3 text-lg font-semibold text-meridian-navy">
              {section.title}
            </h3>
            {section.ordered ? (
              <ol className="space-y-3">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-sky-gold" />
                    <span
                      className="text-muted-gray"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  </li>
                ))}
              </ol>
            ) : (
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-sky-gold" />
                    <span
                      className="text-muted-gray"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  </li>
                ))}
              </ul>
            )}
            {section.subItems && (
              <div className="ml-8 mt-2">
                {section.subItemsLabel && (
                  <p className="mb-2 text-sm font-medium text-meridian-navy">
                    {section.subItemsLabel}
                  </p>
                )}
                <ul className="space-y-1">
                  {section.subItems.map((sub) => (
                    <li
                      key={sub}
                      className="flex items-start gap-3 text-sm"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-meridian-navy/40" />
                      <span className="text-muted-gray">{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
