import { Card, CardContent } from "@/components/ui/card"

const team = [
  {
    name: "Tebogo Moyahobo Setelele",
    role: "Director",
    description: "A visionary entrepreneur with a passion for infrastructure development and business innovation.",
  },
  {
    name: "Temoso Sekoorutla Setelele",
    role: "Director",
    description: "Skilled professional with years of field experience in construction, electrical, and engineering.",
  },
  {
    name: "Paballo Neo Mokhele",
    role: "Director",
    description: "Dedicated leader ensuring every client receives timely and reliable service.",
  },
]

export function Team() {
  return (
    <section id="team" className="bg-secondary py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 md:mb-16 max-w-3xl text-center">
          <h2 className="mb-3 md:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Meet Our Directors
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Experienced professionals dedicated to excellence
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <Card key={index} className="border-border bg-card text-center">
              <CardContent className="p-6 md:p-8">
                <h3 className="mb-2 text-lg md:text-xl font-bold text-card-foreground">{member.name}</h3>
                <p className="mb-3 text-sm font-medium text-accent">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
