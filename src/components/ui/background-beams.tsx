"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

const paths = [
  "M-380 -189C-312 216 152 343 616 470C1080 597 1148 1002 1148 1002",
  "M-373 -197C-305 208 159 335 623 462C1087 589 1155 994 1155 994",
  "M-366 -205C-298 200 166 327 630 454C1094 581 1162 986 1162 986",
  "M-359 -213C-291 192 173 319 637 446C1101 573 1169 978 1169 978",
  "M-352 -221C-284 184 180 311 644 438C1108 565 1176 970 1176 970",
  "M-345 -229C-277 176 187 303 651 430C1115 557 1183 962 1183 962",
  "M-338 -237C-270 168 194 295 658 422C1122 549 1190 954 1190 954",
  "M-331 -245C-263 160 201 287 665 414C1129 541 1197 946 1197 946",
  "M-324 -253C-256 152 208 279 672 406C1136 533 1204 938 1204 938",
  "M-317 -261C-249 144 215 271 679 398C1143 525 1211 930 1211 930",
  "M-310 -269C-242 136 222 263 686 390C1150 517 1218 922 1218 922",
  "M-303 -277C-235 128 229 255 693 382C1157 509 1225 914 1225 914",
  "M-296 -285C-228 120 236 247 700 374C1164 501 1232 906 1232 906",
  "M-289 -293C-221 112 243 239 707 366C1171 493 1239 898 1239 898",
  "M-282 -301C-214 104 250 231 714 358C1178 485 1246 890 1246 890",
  "M-275 -309C-207 96 257 223 721 350C1185 477 1253 882 1253 882",
  "M-268 -317C-200 88 264 215 728 342C1192 469 1260 874 1260 874",
  "M-261 -325C-193 80 271 207 735 334C1199 461 1267 866 1267 866",
  "M-254 -333C-186 72 278 199 742 326C1206 453 1274 858 1274 858",
  "M-247 -341C-179 64 285 191 749 318C1213 445 1281 850 1281 850",
]

interface BackgroundBeamsProps {
  className?: string
}

export function BackgroundBeams({ className }: BackgroundBeamsProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const handleVisibility = () => {
      if (svgRef.current) {
        svgRef.current.style.display = document.hidden ? "none" : ""
      }
    }
    document.addEventListener("visibilitychange", handleVisibility)
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility)
  }, [])

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <svg
        ref={svgRef}
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 1000"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="beam-gradient" cx="0%" cy="50%" r="100%">
            <stop offset="0%" stopColor="rgba(59,130,246,0.25)" />
            <stop offset="40%" stopColor="rgba(147,197,253,0.12)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0)" />
          </radialGradient>
        </defs>
        {paths.map((path, index) => (
          <path
            key={index}
            d={path}
            stroke="url(#beam-gradient)"
            strokeWidth="0.8"
            fill="none"
            style={{
              animation: `beam-move ${2 + Math.random() * 3}s ease-in-out ${index * 0.15}s infinite`,
            }}
          />
        ))}
      </svg>
    </div>
  )
}
