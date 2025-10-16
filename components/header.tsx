"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-new.png"
            alt="SETELELE TM HOLDINGS"
            width={180}
            height={60}
            className="h-8 w-auto sm:h-10 md:h-12"
            priority
          />
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#about" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            About
          </a>
          <a
            href="#services"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Services
          </a>
          <a
            href="#projects"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Projects
          </a>
          <a href="#team" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            Team
          </a>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="#contact">Get in Touch</a>
          </Button>
        </nav>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container mx-auto flex flex-col px-4 py-4 space-y-3">
            <a
              href="#about"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#projects"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#team"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Team
            </a>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                Get in Touch
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
