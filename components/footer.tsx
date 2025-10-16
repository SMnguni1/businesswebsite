export function Footer() {
  return (
    <footer className="border-t border-border bg-primary py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <p className="text-sm text-primary-foreground/80">
            © {new Date().getFullYear()} SETELELE TM HOLDINGS. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-primary-foreground/60">Building for People. Powering Communities.</p>
        </div>
      </div>
    </footer>
  )
}
