import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/layout/footer"
import { AdmissionPopup } from "@/components/admission-popup"

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <AdmissionPopup />
    </>
  )
}
