import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/kelarbro-logo.webp" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.app'
    };
