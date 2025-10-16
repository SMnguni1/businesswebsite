import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Residential Building Development",
    location: "Durban North",
    year: "2024",
    description: "Complete residential development featuring modern architecture and sustainable design principles.",
  },
  {
    title: "Solar Installation Project",
    location: "KwaMashu Schools",
    year: "2025",
    description: "Large-scale solar installation providing clean energy to educational facilities.",
  },
  {
    title: "Car Modification Workshop Launch",
    location: "Richards Bay",
    year: "2025",
    description: "State-of-the-art vehicle customization facility offering comprehensive modification services.",
  },
  {
    title: "Security System Upgrade",
    location: "Commercial Properties in Empangeni",
    year: "2024",
    description: "Advanced security infrastructure implementation for commercial real estate portfolio.",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 md:mb-16 max-w-3xl text-center">
          <h2 className="mb-3 md:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Our Projects
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Each project reflects our values: professionalism, precision, and progress
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="border-border bg-card">
              <CardHeader>
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="bg-accent/10 text-accent">
                    {project.year}
                  </Badge>
                  <Badge variant="outline" className="text-xs sm:text-sm">
                    {project.location}
                  </Badge>
                </div>
                <CardTitle className="text-xl md:text-2xl text-card-foreground">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
