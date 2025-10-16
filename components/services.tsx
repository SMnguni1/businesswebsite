import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Construction & Building Plans",
    description:
      "End-to-end construction solutions including architectural design, project management, and structural development.",
  },
  {
    title: "Electrical Engineering & Solar",
    description: "Wiring, industrial installations, maintenance, and solar energy systems that promote sustainability.",
  },
  {
    title: "Plumbing & Borehole Installation",
    description: "Reliable plumbing services and borehole drilling for homes, businesses, and rural development.",
  },
  {
    title: "Security Services",
    description: "Integrated security systems including CCTV, access control, alarms, and on-site personnel.",
  },
  {
    title: "Manufacturing Construction Goods",
    description: "We manufacture and supply construction-related materials for project efficiency.",
  },
  {
    title: "Car Rental & Modification",
    description: "Affordable car rental services and vehicle customization blending functionality and style.",
  },
  {
    title: "Rental Properties",
    description: "Residential and commercial rental properties designed for comfort and convenience.",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-secondary py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 md:mb-16 max-w-3xl text-center">
          <h2 className="mb-3 md:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Our Services
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Comprehensive solutions across multiple industries to meet your every need
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="border-border bg-card transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl text-card-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
