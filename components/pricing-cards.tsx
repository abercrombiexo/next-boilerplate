import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    description: "Perfect for side projects and experimentation.",
    features: [
      "Up to 3 projects",
      "1 GB storage",
      "Community support",
      "Basic analytics",
    ],
    cta: "Get Started",
    href: "#signup",
    featured: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "For growing teams that need more power.",
    features: [
      "Unlimited projects",
      "50 GB storage",
      "Priority support",
      "Advanced analytics",
      "Custom domains",
      "Team collaboration",
    ],
    cta: "Start Free Trial",
    href: "#signup",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "per month",
    description: "For organizations with advanced needs.",
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "Dedicated support",
      "SSO & SAML",
      "SLA guarantee",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    href: "#contact",
    featured: false,
  },
]

export function PricingCards() {
  return (
    <section className="pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col border-border ${
                plan.featured
                  ? "border-foreground/20 bg-card shadow-lg"
                  : "bg-card"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-6">
                  <Badge variant="default">Most Popular</Badge>
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-lg text-foreground">
                  {plan.name}
                </CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <div className="mb-8">
                  <span className="text-4xl font-bold tracking-tight text-foreground">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="ml-2 text-sm text-muted-foreground">
                      /{plan.period}
                    </span>
                  )}
                </div>

                <ul className="flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="size-4 shrink-0 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  variant={plan.featured ? "default" : "outline"}
                  className="w-full"
                  asChild
                >
                  <Link href={plan.href}>{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
