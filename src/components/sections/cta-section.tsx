"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 transition-all duration-1000">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px]"
          style={{
            background: `linear-gradient(to right, rgba(var(--theme-primary), 0.2), rgba(var(--theme-secondary), 0.15), rgba(var(--theme-primary), 0.2))`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-2 border border-[rgb(var(--theme-primary-30))] bg-secondary/50 backdrop-blur-sm transition-all duration-500"
          >
            <span className="flex items-center gap-2 text-sm">
              <span className="relative flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ backgroundColor: `rgb(var(--theme-primary))` }}
                ></span>
                <span
                  className="relative inline-flex rounded-full h-2 w-2"
                  style={{ backgroundColor: `rgb(var(--theme-primary))` }}
                ></span>
              </span>
              NEW Download the mobile app
            </span>
          </Badge>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            Turn Conversations Into Customers
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-2xl text-pretty">
            Start automating your customer conversations today. Build chatbots that engage, convert, and delight your
            audience across all messaging channels.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              className="text-white px-8 py-6 text-base font-semibold shadow-lg transition-all duration-300"
              style={{
                backgroundColor: `rgb(var(--theme-primary))`,
                boxShadow: `0 10px 30px rgba(var(--theme-primary), 0.5)`,
              }}
            >
              Start for Free
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent px-8 py-6 text-base font-semibold transition-all duration-300 hover:bg-opacity-10"
              style={{
                borderColor: `rgba(var(--theme-primary), 0.5)`,
              }}
            >
              <Play className="mr-2 w-4 h-4" />
              See How it works
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
