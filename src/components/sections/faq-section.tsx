"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What's included in the free trial, and how long does it last?",
      answer:
        "Our free trial gives you full access to the Pro Plan features for 14 days, including unlimited conversations and all messaging channels.",
    },
    {
      question: "Can I upgrade or downgrade my plan at any time?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle, and we'll prorate any differences.",
    },
    {
      question: "What happens to my data if I cancel my subscription?",
      answer:
        "Your chatbot data and subscriber information will be safely stored for 30 days after cancellation. You can export it or reactivate your account during this period.",
    },
    {
      question: "How do I start using your chatbot platform?",
      answer:
        "Simply sign up for an account, connect your Instagram, Facebook, or WhatsApp account, and start building automated conversation flows with our visual builder.",
    },
  ]

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[rgb(var(--theme-primary-20))] rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - CTA */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[rgb(var(--theme-primary-20))] border border-[rgb(var(--theme-primary-40))] backdrop-blur-sm">
              <div className="w-2 h-2 bg-[rgb(var(--theme-primary))] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-[rgb(var(--theme-primary))]">Chatbot Automation Platform</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Frequently asked questions</h2>

            <div className="rounded-2xl bg-card/50 border border-border backdrop-blur-sm p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">Still have a questions?</h3>
              <p className="text-muted-foreground mb-6">
                Can&apos;t find the answer to your question? Send us an email and we&apos;ll get back to you as soon as possible!
              </p>
              <Button className="bg-gradient-to-r from-[rgb(var(--theme-primary))] to-[rgb(var(--theme-secondary))] hover:from-[rgb(var(--theme-primary-80))] hover:to-[rgb(var(--theme-primary))]">
                Send email
              </Button>
            </div>
          </div>

          {/* Right side - FAQ accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-xl bg-card/50 border backdrop-blur-sm overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "border-[rgb(var(--theme-primary-60))]" : "border-border"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[rgb(var(--theme-primary))] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-48" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-muted-foreground">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
