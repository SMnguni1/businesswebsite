import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground text-balance">
            Building for People. Powering Communities.
          </h1>
          <p className="mb-6 md:mb-8 text-base md:text-lg lg:text-xl text-primary-foreground/90 text-pretty">
            A proudly South African company built on innovation, integrity, and impact. We deliver quality, reliable,
            and sustainable solutions across construction, engineering, security, and more.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 md:gap-4 sm:flex-row">
            <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto">
              <a href="#services">Explore Our Services</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto"
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
