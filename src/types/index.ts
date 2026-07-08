export interface NavItem {
  label: string
  href: string
}

export interface Program {
  id: string
  title: string
  type: "Undergraduate" | "Postgraduate" | "Diploma" | "Certificate"
  duration: string
  description: string
  highlights: string[]
  faculty: string
}

export interface Faculty {
  id: string
  name: string
  slug: string
  description: string
  departments: string[]
  image: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  avatar: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface Stat {
  value: string
  label: string
}

export interface Feature {
  icon: string
  title: string
  description: string
}

export interface NewsItem {
  id: string
  title: string
  date: string
  category: string
  excerpt: string
  image: string
}

export interface PathwaySection {
  title: string
  items: string[]
  ordered?: boolean
  subItems?: string[]
  subItemsLabel?: string
}

export interface AdmissionPathway {
  id: string
  label: string
  description: string
  sections: PathwaySection[]
}

export interface LeadershipMember {
  id: string
  name: string
  role: string
  description: string
  image: string
}

export interface SiteConfig {
  name: string
  shortName: string
  tagline: string
  description: string
  url: string
  contact: {
    address: string
    phone: string
    email: string
    admissionsEmail: string
  }
  social: {
    facebook?: string
    twitter?: string
    instagram?: string
    linkedin?: string
    youtube?: string
  }
}
