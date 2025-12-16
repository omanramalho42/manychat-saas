import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Twitter, Youtube, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t border-[rgb(var(--theme-primary-40))] bg-background/50 backdrop-blur-sm">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgb(var(--theme-primary-5))] via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo.png"
                  alt="OMAN Logo"
                  fill
                  className="object-contain"
                />
              </div>
              {/* <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                OMAN
              </span> */}
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Automate conversations across Instagram, Facebook, and WhatsApp. Build intelligent chatbots that drive
              engagement and sales.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#features" className="text-sm text-muted-foreground hover:text-[rgb(var(--theme-primary))] transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-sm text-muted-foreground hover:text-[rgb(var(--theme-primary))] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-muted-foreground hover:text-[rgb(var(--theme-primary))] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-sm text-muted-foreground hover:text-[rgb(var(--theme-primary))] transition-colors"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-[rgb(var(--theme-primary))] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-muted-foreground hover:text-[rgb(var(--theme-primary))] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-[rgb(var(--theme-primary))] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-[rgb(var(--theme-primary))] transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-[rgb(var(--theme-primary))] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-[rgb(var(--theme-primary))] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-[rgb(var(--theme-primary))] transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-foreground mb-3 text-sm">Follow Us</h4>
              <div className="flex items-center gap-3">
                <Link
                  href="#"
                  className="w-9 h-9 rounded-lg bg-[rgb(var(--theme-primary-10))] border border-[rgb(var(--theme-primary-20))] flex items-center justify-center hover:bg-[rgb(var(--theme-primary-20))] hover:border-[rgb(var(--theme-primary-40))] transition-all group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-muted-foreground group-hover:text-[rgb(var(--theme-primary))] transition-colors" />
                </Link>
                <Link
                  href="#"
                  className="w-9 h-9 rounded-lg bg-[rgb(var(--theme-primary-10))] border border-[rgb(var(--theme-primary-20))] flex items-center justify-center hover:bg-[rgb(var(--theme-primary-20))] hover:border-[rgb(var(--theme-primary-40))] transition-all group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 text-muted-foreground group-hover:text-[rgb(var(--theme-primary))] transition-colors" />
                </Link>
                <Link
                  href="#"
                  className="w-9 h-9 rounded-lg bg-[rgb(var(--theme-primary-10))] border border-[rgb(var(--theme-primary-20))] flex items-center justify-center hover:bg-[rgb(var(--theme-primary-20))] hover:border-[rgb(var(--theme-primary-40))] transition-all group"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4 text-muted-foreground group-hover:text-[rgb(var(--theme-primary))] transition-colors" />
                </Link>
                <Link
                  href="#"
                  className="w-9 h-9 rounded-lg bg-[rgb(var(--theme-primary-10))] border border-[rgb(var(--theme-primary-20))] flex items-center justify-center hover:bg-[rgb(var(--theme-primary-20))] hover:border-[rgb(var(--theme-primary-40))] transition-all group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-[rgb(var(--theme-primary))] transition-colors" />
                </Link>
                <Link
                  href="#"
                  className="w-9 h-9 rounded-lg bg-[rgb(var(--theme-primary-10))] border border-[rgb(var(--theme-primary-20))] flex items-center justify-center hover:bg-[rgb(var(--theme-primary-20))] hover:border-[rgb(var(--theme-primary-40))] transition-all group"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4 text-muted-foreground group-hover:text-[rgb(var(--theme-primary))] transition-colors" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} OMAN. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-xs text-muted-foreground hover:text-[rgb(var(--theme-primary))] transition-colors">
                Help Center
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-[rgb(var(--theme-primary))] transition-colors">
                Support
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-[rgb(var(--theme-primary))] transition-colors">
                Status
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
