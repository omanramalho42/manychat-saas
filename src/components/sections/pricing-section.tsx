"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

import { cn } from "@/lib/utils"

export function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly")

  const plans = [
    {
      name: "Pro Plan",
      subtitle: "Perfect for Small Businesses",
      price: billingPeriod === "monthly" ? 25 : 250,
      features: ["Up to 1,000 contacts", "All messaging channels", "Basic automation flows", "Email support"],
      cta: "Start Free Trial",
      variant: "outline" as const,
      icon: "🚀",
    },
    {
      name: "Premium Plan",
      subtitle: "Best for Growing Businesses",
      price: billingPeriod === "monthly" ? 75 : 750,
      features: [
        "Up to 10,000 contacts",
        "Advanced automation",
        "Priority support",
        "Remove ManyChat branding",
        "A/B testing tools",
      ],
      cta: "Start Free Trial",
      variant: "default" as const,
      popular: true,
      icon: "💎",
    },
    {
      name: "Enterprise Plan",
      subtitle: "For Large Organizations",
      price: billingPeriod === "monthly" ? 299 : 2990,
      features: [
        "Unlimited contacts",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced analytics",
        "White-label solution",
        "SLA guarantee",
      ],
      cta: "Contact Sales",
      variant: "outline" as const,
      icon: "🏢",
    },
  ]

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none transition-all duration-1000">
        <div
          className="absolute bg-[rgb(var(--theme-primary-20))] top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px]"
        />
        <div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[100px] bg-[rgb(var(--theme-primary-10))]"
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div
            className="inline-flex bg-[rgb(var(--theme-primary-10))] border-[rgb(var(--theme-primary-20))] items-center gap-2 mb-6 px-4 py-2 rounded-full border transition-all duration-500"
          >
            <div
              className="w-2 h-2 rounded-full animate-pulse bg-[rgb(var(--theme-primary))]"
            />
            <span className="text-sm font-medium text-theme-primary transition-colors duration-500">
              Chatbot Automation Platform
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Flexible Pricing Plans</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose the perfect plan for your business. Start with a free trial and scale as you grow. All plans include
            24/7 chatbot support.
          </p>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                billingPeriod === "monthly" ? "text-white" : "text-muted-foreground hover:text-foreground"
              }`}
              style={
                billingPeriod === "monthly"
                  ? {
                      backgroundColor: `rgb(var(--theme-primary))`,
                    }
                  : undefined
              }
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                billingPeriod === "yearly" ? "text-white" : "text-muted-foreground hover:text-foreground"
              }`}
              style={
                billingPeriod === "yearly"
                  ? {
                      backgroundColor: `rgb(var(--theme-primary))`,
                    }
                  : undefined
              }
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "relative rounded-2xl p-8 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02]",
                plan.variant === "default"
                  ? [
                      "border-2",
                      "bg-[linear-gradient(to_bottom,rgb(var(--theme-primary-20)),rgb(var(--theme-primary-20)))]",
                      "border-[rgb(var(--theme-primary-40))]",
                    ]
                  : [
                      "border",
                      "bg-card/50",
                      "border-border",
                    ]
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span
                    className="px-4 py-1 bg-[rgb(var(--theme-primary))] rounded-full text-white text-xs font-semibold transition-all duration-500"
                  >
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-6 border transition-all duration-500"
                style={{
                  background: `linear-gradient(to bottom right, rgba(var(--theme-primary), 0.2), rgba(var(--theme-secondary), 0.15))`,
                  borderColor: `rgba(var(--theme-primary), 0.2)`,
                }}
              >
                {plan.icon}
              </div>

              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{plan.subtitle}</p>

              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-theme-primary transition-colors duration-500">
                    ${plan.price}
                  </span>
                  <span className="text-muted-foreground">/ {billingPeriod === "monthly" ? "month" : "year"}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-500"
                      style={{ backgroundColor: `rgba(var(--theme-primary), 0.2)` }}
                    >
                      <Check className="w-3 h-3 text-theme-primary transition-colors duration-500" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.variant}
                className={`w-full transition-all duration-300 hover:bg-[rgb(var(--theme-primary))] ${plan.variant === "default" ? "text-white" : ""}`}
                style={
                  plan.variant === "default"
                    ? {
                        backgroundColor: `rgb(var(--theme-primary))`,
                      }
                    : undefined
                }
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
