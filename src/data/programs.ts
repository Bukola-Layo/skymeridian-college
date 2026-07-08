import type { Program } from "@/types"

export const programs: Program[] = [
  {
    id: "bsc-nursing",
    title: "B.Sc. Nursing Science",
    type: "Undergraduate",
    duration: "5 Years",
    description:
      "A comprehensive program preparing students for professional nursing practice with a focus on clinical excellence, patient care, and healthcare leadership.",
    highlights: [
      "Clinical placements at top hospitals",
      "State-of-the-art simulation labs",
      "Licensure exam preparation",
      "Community health outreach",
    ],
    faculty: "Faculty of Health Sciences",
  },
  {
    id: "bsc-public-health",
    title: "B.Sc. Public Health",
    type: "Undergraduate",
    duration: "4 Years",
    description:
      "Develop expertise in disease prevention, health promotion, and health policy to address community and global health challenges.",
    highlights: [
      "Epidemiology and biostatistics training",
      "Health policy and management",
      "Field research experience",
      "Global health partnerships",
    ],
    faculty: "Faculty of Health Sciences",
  },
  {
    id: "bsc-health-admin",
    title: "B.Sc. Health Administration",
    type: "Undergraduate",
    duration: "4 Years",
    description:
      "Prepare for leadership roles in healthcare management with a blend of business acumen and healthcare knowledge.",
    highlights: [
      "Healthcare finance and economics",
      "Health informatics",
      "Strategic management",
      "Internship at healthcare facilities",
    ],
    faculty: "Faculty of Management Technology",
  },
  {
    id: "bsc-medical-lab",
    title: "B.Sc. Medical Laboratory Science",
    type: "Undergraduate",
    duration: "5 Years",
    description:
      "Train in diagnostic laboratory techniques and equip yourself for a vital role in disease detection and patient care.",
    highlights: [
      "Modern laboratory facilities",
      "Hematology and microbiology focus",
      "Clinical rotation",
      "Research methodology",
    ],
    faculty: "Faculty of Health Sciences",
  },
  {
    id: "pgd-health-mgt",
    title: "PGD Health Management",
    type: "Postgraduate",
    duration: "18 Months",
    description:
      "Advanced training for healthcare professionals seeking managerial and administrative roles in the health sector.",
    highlights: [
      "Health policy analysis",
      "Quality improvement in healthcare",
      "Leadership and governance",
      "Capstone project",
    ],
    faculty: "Faculty of Management Technology",
  },
  {
    id: "diploma-health-it",
    title: "Diploma in Health Information Technology",
    type: "Diploma",
    duration: "2 Years",
    description:
      "Gain practical skills in health informatics, electronic medical records, and healthcare data management.",
    highlights: [
      "Electronic health records systems",
      "Health data analytics",
      "Cybersecurity in healthcare",
      "Industry certification prep",
    ],
    faculty: "Faculty of Management Technology",
  },
  {
    id: "cert-health-assistant",
    title: "Certificate in Community Health Assistance",
    type: "Certificate",
    duration: "6 Months",
    description:
      "A short-term program equipping community health workers with essential skills for primary healthcare delivery.",
    highlights: [
      "Primary healthcare basics",
      "Maternal and child health",
      "Immunization and nutrition",
      "Community engagement",
    ],
    faculty: "Faculty of Health Sciences",
  },
  {
    id: "bsc-business-admin",
    title: "B.Sc. Business Administration",
    type: "Undergraduate",
    duration: "4 Years",
    description:
      "Build a strong foundation in business principles with specialized tracks in healthcare management and technology entrepreneurship.",
    highlights: [
      "Entrepreneurship and innovation",
      "Healthcare business management",
      "Digital transformation",
      "Industry mentorship",
    ],
    faculty: "Faculty of Management Technology",
  },
]

export const programTypes = ["All", "Undergraduate", "Postgraduate", "Diploma", "Certificate"] as const

export const featuredPrograms: Program[] = programs.slice(0, 4)
