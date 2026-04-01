import { Zap, Shield, Users, Code } from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

const values = [
  {
    icon: Zap,
    title: "Speed First",
    description:
      "We obsess over performance. Every millisecond matters when you are building at scale.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description:
      "Your infrastructure should never be the bottleneck. We guarantee 99.99% uptime.",
  },
  {
    icon: Users,
    title: "Developer Experience",
    description:
      "Tools should get out of your way. We design for delight, not just functionality.",
  },
  {
    icon: Code,
    title: "Open Source",
    description:
      "We believe in transparency and community. Our core tools are open source and always will be.",
  },
]

export function AboutValues() {
  return (
    <section className="border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Our Values
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What drives us every day
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <Card
              key={value.title}
              className="border-border bg-card transition-colors hover:bg-accent/50"
            >
              <CardHeader>
                <div className="flex size-10 items-center justify-center rounded-md bg-secondary">
                  <value.icon className="size-5 text-foreground" />
                </div>
                <CardTitle className="mt-2 text-foreground">
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  {value.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
