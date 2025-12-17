"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

export function HeroSection() {
  const { theme } = useTheme()

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 transition-all duration-1000"
          style={{
            background: `radial-gradient(ellipse at top, rgba(var(--theme-primary), 0.15), transparent 70%), radial-gradient(ellipse at bottom, rgba(var(--theme-secondary), 0.1), transparent 70%)`,
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header Content */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          {/* Badge */}
          <Badge
            variant="secondary"
            className="mb-6 px-5 py-2.5 bg-[rgb(var(--theme-primary-20))] border-[rgb(var(--theme-primary-30))] backdrop-blur-md transition-all duration-300 hover:scale-105 border"
            style={{
              boxShadow: `0 0 20px rgba(var(--theme-primary), 0.15)`,
            }}
          >
            <span className="flex items-center gap-2 text-sm font-medium">
              <Sparkles className="w-4 h-4" style={{ color: `rgb(var(--theme-primary))` }} />
              NEW WhatsApp Integration Available
            </span>
          </Badge>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
            <span className="block mb-2">Revolutionizing the</span>
            <span
              className="block bg-clip-text text-transparent transition-all duration-500"
              style={{
                backgroundImage: `linear-gradient(135deg, rgb(var(--theme-primary)), rgb(var(--theme-light)))`,
              }}
            >
              Future of Messaging
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed mb-10">
            Discover what drives results and what doesnt to boost your conversation efficiency with intelligent
            automation.
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            className="text-white font-semibold px-10 py-6 text-base rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
            style={{
              background: `linear-gradient(135deg, rgb(var(--theme-primary)), rgb(var(--theme-secondary)))`,
              boxShadow: `0 15px 40px rgba(var(--theme-primary), 0.4)`,
            }}
          >
            Start Free Trial
          </Button>
        </div>

        {/* Dashboard Mockup */}
        <div className="max-w-6xl mx-auto mb-16 relative">
          <div
            className="relative rounded-3xl overflow-hidden border backdrop-blur-xl transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: `linear-gradient(165deg, rgba(var(--theme-primary), 0.1) 0%, rgba(0, 0, 0, 0.6) 100%)`,
              borderColor: `rgba(var(--theme-primary), 0.3)`,
              boxShadow: `0 20px 80px rgba(var(--theme-primary), 0.3), 0 0 100px rgba(var(--theme-primary), 0.2)`,
            }}
          >
            {/* Top glow */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 blur-[80px] -z-10"
              style={{
                background: `linear-gradient(90deg, transparent, rgb(var(--theme-primary)), transparent)`,
              }}
            />

            {/* Dashboard Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-6">
                <div className="text-xl font-bold">OMAN</div>
                <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
                  <span className="hover:text-white transition-colors cursor-pointer">Dashboard</span>
                  <span className="hover:text-white transition-colors cursor-pointer">Analytics</span>
                </nav>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground hidden sm:block">User: Admin</span>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[rgb(var(--theme-primary))] to-[rgb(var(--theme-secondary))]" />
              </div>
            </div>

            {/* Dashboard Stats Cards */}
            <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Visitors", value: "47%" },
                { label: "Conversions", value: "23.9k" },
                { label: "Engagement", value: "94.3" },
                { label: "Revenue", value: "$955" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4 backdrop-blur-sm border transition-all duration-300 hover:scale-105"
                  style={{
                    background: `rgba(var(--theme-primary), 0.1)`,
                    borderColor: `rgba(var(--theme-primary), 0.2)`,
                  }}
                >
                  <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                  <p className="text-2xl font-bold" style={{ color: `rgb(var(--theme-primary))` }}>
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Dashboard Charts Section */}
            <div className="p-6 grid md:grid-cols-2 gap-6">
              {/* Line Chart */}
              <div
                className="rounded-2xl p-6 backdrop-blur-sm border"
                style={{
                  background: `rgba(0, 0, 0, 0.4)`,
                  borderColor: `rgba(255, 255, 255, 0.1)`,
                }}
              >
                <h3 className="text-sm font-semibold mb-4">Sending</h3>
                <div className="relative h-40">
                  {/* Simulated line chart */}
                  <svg className="w-full h-full" viewBox="0 0 300 120" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: `rgb(var(--theme-primary))`, stopOpacity: 0.5 }} />
                        <stop offset="100%" style={{ stopColor: `rgb(var(--theme-primary))`, stopOpacity: 0 }} />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 80 Q 50 40, 100 60 T 200 30 T 300 50"
                      stroke={`rgb(var(--theme-primary))`}
                      strokeWidth="3"
                      fill="none"
                    />
                    <path d="M 0 80 Q 50 40, 100 60 T 200 30 T 300 50 L 300 120 L 0 120 Z" fill="url(#chartGradient)" />
                  </svg>
                </div>
              </div>

              {/* Circular Progress */}
              <div
                className="rounded-2xl p-6 backdrop-blur-sm border flex items-center justify-center"
                style={{
                  background: `rgba(0, 0, 0, 0.4)`,
                  borderColor: `rgba(255, 255, 255, 0.1)`,
                }}
              >
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full -rotate-90">
                    <circle cx="64" cy="64" r="56" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="none" />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke={`rgb(var(--theme-primary))`}
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray="351.86"
                      strokeDashoffset="87.96"
                      strokeLinecap="round"
                      style={{
                        filter: `drop-shadow(0 0 10px rgb(var(--theme-primary)))`,
                      }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold" style={{ color: `rgb(var(--theme-primary))` }}>
                      82%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* User Tracking Section */}
            <div className="p-6">
              <div
                className="rounded-2xl p-6 backdrop-blur-sm border"
                style={{
                  background: `rgba(0, 0, 0, 0.4)`,
                  borderColor: `rgba(255, 255, 255, 0.1)`,
                }}
              >
                <h3 className="text-sm font-semibold mb-4">User Tracking</h3>
                <div className="flex items-end gap-2 h-24">
                  {[40, 65, 45, 80, 55, 90, 60, 75, 50, 85, 70, 95].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t transition-all duration-300 hover:opacity-80"
                      style={{
                        height: `${height}%`,
                        background: `linear-gradient(to top, rgb(var(--theme-primary)), rgb(var(--theme-light)))`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Metrics */}
            <div className="p-6 flex items-center justify-end gap-8 text-sm">
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground">12 people</span>
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-background bg-gradient-to-br from-[rgb(var(--theme-primary-80))] to-[rgb(var(--theme-primary))]"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap opacity-50">
          <span className="text-lg font-light tracking-wider">LOGO</span>
          <span className="text-lg font-light tracking-wider">LOGO</span>
          <span className="text-lg font-light tracking-wider">LOGO</span>
          <span className="text-lg font-light tracking-wider">IPSUM</span>
          <span className="text-lg font-light tracking-wider">LOGO</span>
        </div>
      </div>
    </section>
  )
}
