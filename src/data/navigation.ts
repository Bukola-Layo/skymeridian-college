import type { NavItem } from "@/types"

export const mainNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Admissions", href: "/admissions" },
  { label: "Programs", href: "/programs" },
  { label: "Colleges", href: "/faculties" },
  { label: "Contact", href: "/contact" },
]

export const ctaItem: NavItem = {
  label: "Apply Now",
  href: "/admissions",
}
