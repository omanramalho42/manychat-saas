import { Badge } from "@/components/ui/badge"
import { Star, Users } from "lucide-react"

export function StatsSection() {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {/* Rating Stat */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <Star
                className="w-5 h-5"
                style={{
                  color: "rgba(var(--theme-primary)",
                }}
              />
              <span
                className="text-4xl font-bold"
              >
                4.9+
              </span>
            </div>
            <p className="text-sm text-muted-foreground">Stars rating</p>
          </div>

          {/* Customer Stat */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <Users
                className="w-5 h-5" 
                style={{
                  color: "rgba(var(--theme-primary)"
                }}
              />
              <span
                className="text-4xl font-bold"
              >
                20k+
              </span>
            </div>
            <p 
              className="text-sm text-muted-foreground"
            >
              Satisfied customer
            </p>
          </div>

          {/* Badge */}
          <Badge
            variant="secondary"
            className="px-6 py-3 bg-secondary/50 border border-[rgb(var(--theme-primary-30))] backdrop-blur-sm"
            style={{
              boxShadow: `0 0 20px rgba(var(--theme-primary), 0.15)`,
            }}
          >
            <span className="flex items-center gap-2 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full bg-[rgb(var(--theme-primary))] w-full rounded-full opacity-75"
                />
                <span
                  className="relative inline-flex rounded-full h-2 w-2 bg-[rgb(var(--theme-primary))]"
                />
              </span>
              BEST AI TOOLS
              <span className="ml-2 text-muted-foreground">
                Elevate the power of AI to uplevel every facet of your business
              </span>
            </span>
          </Badge>
        </div>
      </div>
    </section>
  )
}
