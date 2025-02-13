import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-2xl mx-auto px-6 py-12 space-y-16">
          <header>
            <Link href="/" className="text-xl font-medium hover:text-gray-600">
              Servers on Servers
            </Link>
          </header>
          {children}
        </div>
      </body>
    </html>
  )
}