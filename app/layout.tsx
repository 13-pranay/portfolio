import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pranay - Developer",
  description:
    "Passionate developer with creating innovative digital solutions. Specializing in AI, ML, Data Science, and modern web technologies.",
  keywords: ["Developer", "Python", "AI", "ML", "Web Development", "Data Science Engineer"],
  authors: [{ name: "Pranay" }],
  creator: "Pranay",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://Pranay.dev",
    title: "Pranay - Developer",
    description: "Passionate developer creating innovative digital solutions",
    siteName: "Pranay Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranay - Developer",
    description: "Passionate developer creating innovative digital solutions",
    creator: "@pranay",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'pranay.dev',
    other: {
      "google-site-verification": "ZpHQhWzJdFhIiCUuIr_WxBvefmnRUZby6-byNa7OHrU"
    }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
