import Link from "next/link"
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react"
import { Container } from "@/components/shared/container"
import { siteConfig } from "@/data/site"
import { mainNavItems, ctaItem } from "@/data/navigation"

const footerLinks = [
  {
    title: "Quick Links",
    items: mainNavItems,
  },
  {
    title: "Programs",
    items: [
      { label: "Undergraduate", href: "/programs" },
      { label: "Postgraduate", href: "/programs" },
      { label: "Diploma", href: "/programs" },
      { label: "Certificate", href: "/programs" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-meridian-navy text-white">
      <div className="section-padding">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <Link href="/" className="inline-flex items-center gap-3 text-xl font-bold">
                <img
                  src="/images/IMG-20260706-WA0004.jpg"
                  alt="Sky Meridian"
                  className="h-14 w-auto rounded-lg"
                />
                {siteConfig.shortName}
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                {siteConfig.description}
              </p>
            </div>
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-sky-gold">
                  {group.title}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {item.label}
                        <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-sky-gold">
                Contact
              </h3>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-gold" />
                  <span>{siteConfig.contact.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-sky-gold" />
                  <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-sky-gold" />
                  <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                    {siteConfig.contact.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div className="border-t border-white/10">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 py-6 text-sm text-white/60 md:flex-row">
            <p>&copy; {new Date().getFullYear()} {siteConfig.shortName}. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/contact" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
