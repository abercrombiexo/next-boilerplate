import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const team = [
  { name: "Alex Chen", role: "CEO & Co-founder", initials: "AC" },
  { name: "Sarah Kim", role: "CTO & Co-founder", initials: "SK" },
  { name: "Marcus Rivera", role: "Head of Design", initials: "MR" },
  { name: "Emily Zhang", role: "Head of Engineering", initials: "EZ" },
  { name: "David Park", role: "Head of Product", initials: "DP" },
  { name: "Lina Petrov", role: "Head of Growth", initials: "LP" },
]

export function AboutTeam() {
  return (
    <section className="border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            The Team
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Meet the people behind Acme
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            A small, focused team building world-class developer tools.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex items-center gap-4 rounded-lg border border-border bg-card p-6 transition-colors hover:bg-accent/50"
            >
              <Avatar className="size-12">
                <AvatarFallback className="bg-secondary text-sm font-medium text-foreground">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-foreground">{member.name}</p>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
