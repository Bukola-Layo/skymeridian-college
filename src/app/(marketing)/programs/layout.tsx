import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Programmes",
  description:
    "Explore our accredited undergraduate, postgraduate, diploma, and certificate programmes in health sciences and management technology.",
}

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
