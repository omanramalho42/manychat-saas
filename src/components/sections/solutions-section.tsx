"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, ShoppingBag, Calendar, Bell, HeartHandshake, TrendingUp } from "lucide-react"

export function SolutionsSection() {
  const solutions = [
    {
      icon: Bot,
      title: "Automated Customer Support",
      description: "Answer FAQs, resolve issues, and provide 24/7 support without human intervention.",
    },
    {
      icon: ShoppingBag,
      title: "E-commerce Sales Bot",
      description: "Showcase products, take orders, and process payments directly within messenger apps.",
    },
    {
      icon: Calendar,
      title: "Appointment Booking",
      description: "Let customers schedule appointments, consultations, and meetings through automated chat flows.",
    },
    {
      icon: Bell,
      title: "Marketing Campaigns",
      description: "Send targeted broadcast messages, promotions, and updates to segmented audience groups.",
    },
    {
      icon: HeartHandshake,
      title: "Lead Generation",
      description: "Capture leads, qualify prospects, and nurture relationships with automated conversation sequences.",
    },
    {
      icon: TrendingUp,
      title: "Growth Tools",
      description: "Use Instagram comment automation, story mentions, and keyword triggers to grow your audience.",
    },
  ]

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[rgb(var(--theme-primary-20))] rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="secondary"
            className="
              mb-6 
              px-4 
              py-2
              bg-[rgb(var(--theme-primary-20))]
              border-[rgb(var(--theme-primary-60))]
              backdrop-blur-sm 
            "
          >
            Use Cases
          </Badge>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            Solutions for Every Business Need
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            From customer support to sales automation, our chatbot platform helps you automate conversations that drive
            real business results.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-[rgb(var(--theme-primary-50))] bg-gradient-to-b from-[rgb(var(--theme-primary-5))] to-[rgb(var(--theme-primary-5))] backdrop-blur-sm hover:border-[rgb(var(--theme-primary-50))] transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgb(var(--theme-primary-10))] to-[rgb(var(--theme-primary-20))] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative p-8">
                  <div className="mb-6 inline-flex p-3 rounded-xl bg-gradient-to-br from-[rgb(var(--theme-primary-30))] to-[rgb(var(--theme-primary-60))] ring-1 ring-[rgb(var(--theme-primary-50))]">
                    <Icon className="w-6 h-6 text-[rgb(var(--theme-primary))]" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-balance">{solution.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm text-pretty">{solution.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
