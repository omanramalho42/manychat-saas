import type React from "react"

import type { Metadata } from "next"

import { Inter /*, Geist **/ } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

import { ThemeProvider } from "@/contexts/theme-context"
import { ThemeProvider as ThemeProviderShadcn } from "@/providers/theme-provider"

import { Toaster } from "@/components/ui/sonner"

import "./globals.css"

// const _geist = Geist({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Proxima - Revolutionizing the Future of Data Tracking",
  description: "Discover what drives results and what doesn't to boost your search traffic.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
          <body className={`font-sans antialiased`}>
            {/* <ThemeProviderShadcn
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            > */}
            <ThemeProvider>
              {children}
            </ThemeProvider>
            {/* </ThemeProviderShadcn> */}
            <Analytics />
            <Toaster />
          </body>
      </html>
    </ClerkProvider>
  );
}
