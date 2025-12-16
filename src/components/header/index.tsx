"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  return (
    <header
      className="fixed top-0 border-[rgb(var(--theme-primary-20))] left-0 right-0 z-50 border-b backdrop-blur-xl bg-background/80 transition-colors duration-500"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-[rgb(var(--theme-primary))] transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-[rgb(var(--theme-primary))] transition-colors duration-300"
              >
                About
              </Link>
              <Link
                href="#features"
                className="text-sm text-muted-foreground hover:text-[rgb(var(--theme-primary))] transition-colors duration-300"
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="text-sm text-muted-foreground hover:text-[rgb(var(--theme-primary))] transition-colors duration-300"
              >
                Pricing
              </Link>
              <Link
                href="#contact"
                className="text-sm text-muted-foreground hover:text-[rgb(var(--theme-primary))] transition-colors duration-300"
              >
                Contact
              </Link>
            </nav>
          </div>
          <Button
            variant="outline"
            className="border-[rgb(var(--theme-primary-50))] hover:bg-[rgb(var(--theme-primary-10))] bg-transparent transition-all duration-300"
          >
            Get Template
          </Button>
        </div>
      </div>
    </header>
  )
}
