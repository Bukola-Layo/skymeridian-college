"use client"

import { useEffect, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AdmissionPopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center">
            <img
              src="/images/IMG-20260706-WA0004.jpg"
              alt="Sky Meridian"
              className="h-full w-full rounded-full object-cover shadow-md"
            />
          </div>
          <DialogTitle className="text-center text-xl text-meridian-navy">
            Welcome to Sky Meridian College of Health Sciences and Management Technology
          </DialogTitle>
          <div className="mt-1 h-1 w-16 bg-sky-gold mx-auto rounded-full" />
          <DialogDescription className="pt-3 text-center text-base leading-relaxed text-dark-slate">
            Please be informed that the{" "}
            <strong className="text-meridian-navy">
              2026/2027 Academic Session
            </strong>{" "}
            Admission is ongoing. Prospective applicants are advised to submit
            their applications through the official portal.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center">
          <Button asChild variant="primary" className="w-full sm:w-auto">
            <Link href="/admissions">Apply Now</Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
