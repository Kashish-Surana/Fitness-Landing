import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Lost 30 lbs",
      image: "/fitness-woman-smiling.jpg",
      quote:
        "This app completely transformed my approach to fitness. The personalized workout plans kept me motivated and I finally achieved my goals!",
      rating: 5,
    },
    {
      name: "David Chen",
      role: "Gained 15 lbs muscle",
      image: "/athletic-man-smiling.png",
      quote:
        "The AI tracking is incredible. It helped me understand my progress patterns and adjust my training. Best investment I've made in my fitness journey.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Marathon Ready",
      image: "/fitness-woman-runner.jpg",
      quote:
        "From couch to marathon in 6 months! The nutrition guidance combined with training plans made it all possible. I feel amazing!",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">

        {/* Clean Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Real Transformations
          </h2>
          <p className="text-muted-foreground text-lg mt-3 leading-relaxed">
            Thousands of people have achieved life-changing results with our fitness platform.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-shadow"
            >
              {/* Avatar + Name */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg text-foreground">{t.name}</h3>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground leading-relaxed">
                “{t.quote}”
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
