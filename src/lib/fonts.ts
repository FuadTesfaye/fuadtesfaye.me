import { Aldrich, IBM_Plex_Serif, Mea_Culpa, Reem_Kufi } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"

import { cn } from "@/lib/utils"

const fontSans = GeistSans
const fontMono = GeistMono

const fontHeading = Aldrich({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading-unique",
})

const fontArabic = Reem_Kufi({
  weight: ["500", "600", "700"],
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-arabic",
})

const fontSerif = IBM_Plex_Serif({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
})

const fontCursive = Mea_Culpa({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-handwritten",
})

// const fontPixel = localFont({
//   src: "../assets/fonts/DepartureMono-Regular.woff2",
//   weight: "400",
//   fallback: ["monospace"],
//   variable: "--font-pixel",
// })

// const pixelatedMSSansSerif = localFont({
//   src: [
//     {
//       path: "../assets/fonts/ms_sans_serif.woff2",
//       weight: "400",
//     },
//     {
//       path: "../assets/fonts/ms_sans_serif_bold.woff2",
//       weight: "700",
//     },
//   ],
//   fallback: ["Arial"],
//   variable: "--font-98cn",
// })

export const fontVariables = cn(
  fontSans.variable,
  fontMono.variable,
  fontSerif.variable,
  fontHeading.variable,
  fontArabic.variable,
  fontCursive.variable,
  "[--font-sans:var(--font-geist-sans)]",
  "[--font-mono:var(--font-geist-mono)]",
  "[--font-heading:var(--font-heading-unique)]",
  "[--font-arabic:var(--font-arabic)]",
  "[--font-cursive:var(--font-handwritten)]"
)
