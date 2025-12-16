export function LogosSection() {
  const logos = [
    { name: "Company 1", width: "w-24" },
    { name: "Company 2", width: "w-28" },
    { name: "Company 3", width: "w-20" },
    { name: "Company 4", width: "w-28" },
    { name: "Company 5", width: "w-24" },
  ]

  return (
    <section className="py-16 border-y border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 opacity-50">
          {logos.map((logo, index) => (
            <div key={index} className={`${logo.width} h-8 bg-muted-foreground/20 rounded`} />
          ))}
        </div>
      </div>
    </section>
  )
}
