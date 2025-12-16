import { Card } from "@/components/ui/card"
import { MessageSquare, Zap, BarChart3, Users, ShoppingCart } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: MessageSquare,
      title: "Multi-Channel Messaging",
      description:
        "Connect with customers on Instagram, Facebook Messenger, WhatsApp, SMS, and Telegram from one platform.",
      size: "md:col-span-1",
    },
    {
      icon: Zap,
      title: "Instant Auto-Replies",
      description: "Respond to customer inquiries 24/7 with intelligent automated responses and conversation flows.",
      size: "md:col-span-1",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description:
        "Track conversation metrics, engagement rates, and conversion data to optimize your chatbot performance.",
      size: "md:col-span-1",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Integration",
      description:
        "Sell products directly through chat. Process orders, payments, and shipping without leaving the conversation.",
      size: "md:col-span-1",
    },
    {
      icon: Users,
      title: "Audience Segmentation",
      description:
        "Tag and segment your audience to send personalized messages and create targeted marketing campaigns.",
      size: "md:col-span-2",
    },
  ]

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[rgb(var(--theme-primary-10))] rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            Everything You Need. <span className="block">In One Platform.</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Powerful chatbot automation tools designed to help you engage customers, boost sales, and grow your business
            on autopilot.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className={`${feature.size} group relative overflow-hidden border-[rgb(var(--theme-primary-50))] bg-gradient-to-b from-[rgb(var(--theme-primary-5))] to-[rgb(var(--theme-primary-5))] backdrop-blur-sm hover:border-[rgb(var(--theme-primary-50))] transition-all duration-300`}
              >
                {/* Card glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-[rgb(var(--theme-primary-5))] to-[rgb(var(--theme-primary-10))] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative p-8">
                  {/* Icon with glow */}
                  <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-[rgb(var(--theme-primary-20))] to-[rgb(var(--theme-primary-20))] ring-1 ring-[rgb(var(--theme-primary-30))]">
                    <Icon className="w-8 h-8 text-[rgb(var(--theme-primary))]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 text-balance">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{feature.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
