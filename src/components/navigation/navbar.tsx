"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Phone, Mail, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Container } from "@/components/shared/container"
import { mainNavItems, ctaItem } from "@/data/navigation"
import { siteConfig } from "@/data/site"

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="overflow-hidden bg-meridian-navy text-xs">
        <div className="flex h-8 items-center">
          <div className="animate-marquee flex shrink-0 items-center gap-12 whitespace-nowrap">
            <span className="text-sky-gold font-medium uppercase tracking-wider">★ Admission for September Intake 2026 Ongoing ★</span>
            <span className="text-white/60">In Affiliation with Wesley University, Ondo State &middot; {siteConfig.shortName} &middot; College of Health Sciences &amp; Management Technology</span>
            <span className="text-sky-gold font-medium uppercase tracking-wider">★ Admission for September Intake 2026 Ongoing ★</span>
            <span className="text-white/60">In Affiliation with Wesley University, Ondo State &middot; {siteConfig.shortName} &middot; College of Health Sciences &amp; Management Technology</span>
          </div>
        </div>
      </div>
      <div className="border-b border-soft-blue-gray">
        <Container>
          <nav
            className="flex h-14 items-center justify-between md:h-16"
            aria-label="Main navigation"
          >
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-bold text-meridian-navy md:text-xl"
            >
              <img
                src="/images/IMG-20260706-WA0004.jpg"
                alt="Sky Meridian"
                className="h-12 w-auto rounded-lg"
              />
              <span className="hidden sm:inline">Sky Meridian</span>
              <span className="hidden text-xs font-normal text-muted-gray lg:inline">
                College of Health Sciences & Management Technology
              </span>
            </Link>

            <div className="hidden items-center gap-1 md:flex">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "text-meridian-navy bg-meridian-navy-50"
                      : "text-dark-slate hover:text-meridian-navy hover:bg-meridian-navy-50"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <Button asChild variant="primary" size="sm">
                <Link href={ctaItem.href}>
                  {ctaItem.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6 text-meridian-navy" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="text-left">
                    <img
                      src="/images/IMG-20260706-WA0004.jpg"
                      alt="Sky Meridian"
                      className="h-11 w-auto rounded-lg"
                    />{" "}
                    Sky Meridian
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-2">
                  {mainNavItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "rounded-lg px-4 py-3 text-base font-medium transition-colors",
                        pathname === item.href
                          ? "text-meridian-navy bg-meridian-navy-50"
                          : "text-dark-slate hover:text-meridian-navy hover:bg-meridian-navy-50"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="mt-4 space-y-2 border-t border-soft-blue-gray pt-4">
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm text-muted-gray hover:bg-meridian-navy-50"
                    >
                      <Phone className="h-4 w-4" />
                      {siteConfig.contact.phone}
                    </a>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm text-muted-gray hover:bg-meridian-navy-50"
                    >
                      <Mail className="h-4 w-4" />
                      {siteConfig.contact.email}
                    </a>
                  </div>
                  <div className="mt-2">
                    <Button asChild variant="primary" className="w-full">
                      <Link href={ctaItem.href}>{ctaItem.label}</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </Container>
      </div>
    </header>
  )
}
