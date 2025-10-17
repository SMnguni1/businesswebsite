import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">About Us</h2>
          <p className="mb-12 text-lg text-muted-foreground">
            Setelele TM Holdings is a multidisciplinary company that operates across several key sectors, including
            construction, engineering, security, manufacturing, property, and automotive services.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="border-border bg-card">
            <CardContent className="p-8">
              <h3 className="mb-4 text-2xl font-bold text-card-foreground">Our Vision</h3>
              <p className="text-muted-foreground">
                To become a trusted, leading name in South Africa's infrastructure and service industries known for
                quality workmanship, innovation, and empowering communities through sustainable development.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardContent className="p-8">
              <h3 className="mb-4 text-2xl font-bold text-card-foreground">Our Mission</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Deliver exceptional solutions with integrity and efficiency</li>
                <li>• Provide job opportunities that uplift local communities</li>
                <li>• Embrace modern technology and innovation</li>
                <li>• Maintain transparent relationships with clients</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
