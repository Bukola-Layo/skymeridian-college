import type { AdmissionPathway } from "@/types"

export const admissionPathways: AdmissionPathway[] = [
  {
    id: "entrance-exam",
    label: "Entrance Exam",
    description:
      "Candidates seeking admission through Entrance Exam must meet the following requirements and follow the prescribed process.",
    sections: [
      {
        title: "Admission Requirements",
        items: [

          "Possess a minimum of five (5) credit passes in relevant O&apos;Level subjects, including English Language and Mathematics.",
          "Obtain the O&apos;Level credits in not more than two sittings.",
          "Meet the institution&apos;s approved Entrance Exam cut-off mark.",
          "Participate in the Sky Meridian College admission screening exercise.",
        ],
        subItemsLabel: "Acceptable examination bodies include:",
        subItems: [
          "WAEC",
          "NECO",
          "NABTEB",
          "GCE",
        ],
      },
      {
        title: "Admission Process",
        items: [
          "Register and sit for the Entrance Exam.",

          "Purchase and complete the College&apos;s admission application form.",
          "Upload your O&apos;Level results and other required credentials.",
          "Participate in the admission screening process.",
          "Receive an admission offer upon meeting the admission requirements.",
          "Accept the admission offer.",
          "Complete registration and pay the prescribed fees.",
        ],
        ordered: true,
      },
    ],
  },
  {
    id: "direct-entry",
    label: "Direct Entry",
    description:
      "Candidates applying through Direct Entry must meet the following requirements and follow the prescribed process.",
    sections: [
      {
        title: "Admission Requirements",
        items: [
          "Possess five (5) O&apos;Level credit passes, including English Language and Mathematics.",
          "Hold any of the following qualifications:",
          "Diploma holders should possess at least a Merit in relevant disciplines.",
          "Meet departmental subject requirements where applicable.",
        ],
        subItems: [
          "JUPEB Certificate",
          "IJMB Certificate",
          "GCE Advanced Level",
          "National Diploma (ND)",
          "National Certificate in Education (NCE)",
          "Higher National Diploma (HND)",
          "Other approved equivalent qualifications",
        ],
      },
      {
        title: "Admission Process",
        items: [
          "Obtain the JAMB Direct Entry form.",
          "Complete the Sky Meridian College Direct Entry application form.",
          "Upload your O&apos;Level results and A-Level/ND/NCE/HND credentials.",
          "Participate in the admission screening exercise.",
          "Receive an admission offer upon successful evaluation.",
          "Accept the admission offer and complete registration.",
        ],
        ordered: true,
      },
    ],
  },
  {
    id: "jupeb",
    label: "JUPEB",
    description:
      "Applicants seeking admission through the JUPEB programme must meet the following requirements.",
    sections: [
      {
        title: "Admission Requirements",
        items: [
          "A minimum of five (5) O&apos;Level credit passes in relevant subjects.",
          "Credits must include English Language and Mathematics.",
          "Results may be obtained in not more than two sittings.",
          "Candidates awaiting results may also be considered.",
        ],
        subItemsLabel: "Accepted examination bodies include:",
        subItems: [
          "WAEC",
          "NECO",
          "NABTEB",
        ],
      },
      {
        title: "Programme Duration",
        items: [
          "One Academic Session (Two Semesters)",
        ],
      },
      {
        title: "Qualification",
        items: [
          "Successful candidates will be awarded the JUPEB Certificate, which qualifies them for Direct Entry admission into 200 Level in participating Nigerian universities.",
        ],
      },
      {
        title: "Admission Process",
        items: [
          "Purchase the JUPEB application form.",
          "Complete the application form.",
          "Submit: O&apos;Level results, Passport photograph, Personal information.",
          "Applications are reviewed by the Admissions Office.",
          "Successful applicants receive an admission letter and registration instructions.",
          "Complete the JUPEB programme and use the certificate to apply for Direct Entry admission into 200 Level.",
        ],
        ordered: true,
      },
    ],
  },
  {
    id: "part-time",
    label: "Part Time",
    description:
      "The Part-Time programme is designed for working professionals, business owners, and other qualified candidates who require flexible study schedules.",
    sections: [
      {
        title: "100 Level Entry",
        items: [
          "Five (5) O&apos;Level credit passes in relevant subjects.",
          "English Language and Mathematics are compulsory.",
          "Credits must be obtained in not more than two sittings.",
        ],
      },
      {
        title: "Advanced Entry",
        items: [
          "Applicants with any of the following qualifications may also be considered:",
          "Applicants must also satisfy the O&apos;Level admission requirements.",
        ],
        subItems: [
          "JUPEB",
          "IJMB",
          "National Diploma (ND)",
          "National Certificate in Education (NCE)",
          "Higher National Diploma (HND)",
          "GCE Advanced Level",
        ],
      },
      {
        title: "Admission Process",
        items: [
          "Obtain the Part-Time admission application form.",
          "Complete the application with your personal and academic details.",
          "Submit your O&apos;Level results and any additional qualification certificates.",
          "Participate in the admission screening and credential verification process.",
          "Receive an admission offer upon successful evaluation.",
          "Accept the admission offer and complete registration.",
        ],
        ordered: true,
      },
    ],
  },
]
