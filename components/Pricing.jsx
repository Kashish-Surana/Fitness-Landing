import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "Basic",
      price: "Rs9",
      period: "/month",
      description: "Perfect for beginners starting their fitness journey",
      features: [
        "Access to basic workout plans",
        "Progress tracking dashboard",
        "Community support",
        "Mobile app access",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "Rs29",
      period: "/month",
      description: "Best for serious fitness enthusiasts",
      features: [
        "All Basic features",
        "AI-powered workout customization",
        "Personalized nutrition plans",
        "Priority support",
        "Advanced analytics",
        "1-on-1 coaching sessions",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Elite",
      price: "Rs79",
      period: "/month",
      description: "Ultimate transformation package",
      features: [
        "All Pro features",
        "Dedicated personal trainer",
        "Custom meal prep plans",
        "Weekly video consultations",
        "Supplement recommendations",
        "Exclusive community access",
        "Body composition tracking",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Choose Your Plan</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Select the perfect plan for your fitness goals. All plans include a 14-day money-back guarantee.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "border-primary shadow-lg scale-105 md:scale-110"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                }`}
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="text-center text-sm text-muted-foreground mt-12">
          All plans come with a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  )
}
