import { Poppins, Spicy_Rice, Racing_Sans_One } from "next/font/google"
import localFont from "next/font/local"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] })
const spicyRice = Spicy_Rice({ subsets: ["latin"], weight: ["400"] })
const racingSans = Racing_Sans_One({ subsets: ["latin"], weight: ["400"] })
const samuraiShadow = localFont({
  src: "../fonts/samuraishadow.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})

export { poppins, spicyRice, racingSans, samuraiShadow }
