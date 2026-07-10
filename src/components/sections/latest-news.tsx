import { Calendar } from "lucide-react"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import type { NewsItem } from "@/types"

const news: NewsItem[] = [
  {
    id: "2",
    title: "College Partners with Leading Hospitals for Clinical Placements",
    date: "May 28, 2026",
    category: "Partnership",
    excerpt: "New partnership agreements with five major teaching hospitals will provide students with unprecedented clinical exposure and hands-on training opportunities.",
    image: "/images/news-2.jpg",
  },
  {
    id: "3",
    title: "Annual Health Symposium Attracts Industry Leaders",
    date: "April 10, 2026",
    category: "Event",
    excerpt: "The Sky Meridian Annual Health Symposium brought together healthcare professionals, policymakers, and academics to discuss the future of healthcare in Nigeria.",
    image: "/images/news-3.jpg",
  },
]

export function LatestNews() {
  return (
    <section className="section-padding bg-light-gray">
      <Container>
        <SectionHeading
          title="Latest News"
          subtitle="Stay updated with the latest developments, achievements, and events at Sky Meridian."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {news.map((item) => (
            <article
              key={item.id}
              className="group cursor-pointer rounded-2xl border border-soft-blue-gray bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <div className="aspect-[16/9] rounded-t-2xl bg-gradient-to-br from-meridian-navy-200 to-meridian-navy-400" />
              <div className="p-6">
                <div className="mb-3 flex items-center gap-3 text-xs text-muted-gray">
                  <span className="rounded-full bg-meridian-navy-50 px-3 py-1 font-medium text-meridian-navy">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {item.date}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-meridian-navy transition-colors group-hover:text-meridian-navy-600">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-gray">
                  {item.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
