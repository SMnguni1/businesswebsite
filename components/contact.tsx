import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 md:mb-16 max-w-3xl text-center">
          <h2 className="mb-3 md:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Get in Touch
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">Let's build the future together</p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Card className="border-border bg-card">
            <CardContent className="p-6 md:p-8 lg:p-12">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-semibold text-card-foreground">Email</h3>
                  <p className="text-sm text-muted-foreground break-all">seteleletmholdings@outlook.com</p>
                </div>

                <div className="text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-semibold text-card-foreground">Phone</h3>
                  <p className="text-sm text-muted-foreground">+27 60 329 9098</p>
                </div>

                <div className="text-center sm:col-span-2 lg:col-span-1">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-semibold text-card-foreground">Location</h3>
                  <p className="text-sm text-muted-foreground">49 Coventry Street, Ophirton</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
