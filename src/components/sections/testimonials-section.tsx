"use client"

import { Badge } from "@/components/ui/badge"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "ManyChat transformed how we handle customer support. Our response time went from hours to seconds, and customer satisfaction doubled.",
      author: "Sarah Chen",
      role: "Founder, Bloom Beauty",
      size: "md:col-span-1 md:row-span-1",
    },
    {
      quote:
        "The Instagram automation features are incredible. We're generating 10x more leads without any additional effort.",
      author: "Michael Rodriguez",
      role: "Marketing Director, FitLife",
      size: "md:col-span-1 md:row-span-2",
      featured: true,
    },
    {
      quote: "Our e-commerce sales through WhatsApp increased by 300% in just two months. The ROI is unbelievable.",
      author: "Jessica Park",
      role: "CEO, StyleHub",
      size: "md:col-span-1 md:row-span-1",
    },
    {
      quote:
        "Setting up automated booking was so easy. Now customers can schedule appointments 24/7 without calling us.",
      author: "David Thompson",
      role: "Owner, Prime Barbershop",
      size: "md:col-span-1 md:row-span-1",
    },
    {
      quote: "ManyChat paid for itself in the first week. The automation saves us 20+ hours every week.",
      author: "Emily Martinez",
      role: "Operations Manager, TechStart",
      size: "md:col-span-1 md:row-span-1",
    },
    {
      quote:
        "The segmentation features let us send hyper-targeted campaigns. Our engagement rates are through the roof.",
      author: "Alex Johnson",
      role: "Social Media Manager, GrowthCo",
      size: "md:col-span-1 md:row-span-1",
    },
  ]

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[rgb(var(--theme-primary-20))] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[rgb(var(--theme-primary-20))] rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-6 px-4 py-2 bg-[rgb(var(--theme-primary-20))] border-[rgb(var(--theme-primary-40))] backdrop-blur-sm">
            Wall of Love
          </Badge>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            We have worked with thousands of amazing people.
          </h2>
        </div>

        {/* Testimonials Grid - Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto auto-rows-fr">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${testimonial.size} group relative overflow-hidden rounded-2xl border border-[rgb(var(--theme-primary-50))] bg-gradient-to-b from-[rgb(var(--theme-primary-5))] to-[rgb(var(--theme-primary-5))] backdrop-blur-sm hover:border-[rgb(var(--theme-primary-50))] transition-all duration-300`}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgb(var(--theme-primary-10))] to-[rgb(var(--theme-primary-20))] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div
                className={`relative p-6 ${testimonial.featured ? "md:p-8" : ""} h-full flex flex-col justify-between`}
              >
                {/* Quote */}
                <p className={`text-foreground leading-relaxed mb-6 ${testimonial.featured ? "text-lg" : "text-sm"}`}>
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[rgb(var(--theme-primary-40))] to-[rgb(var(--theme-primary-20))] flex items-center justify-center ring-2 ring-[rgb(var(--theme-primary-40))] flex-shrink-0">
                    <span className="text-sm font-semibold text-[rgb(var(--theme-primary))]">
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
