"use client"

import { Button } from "@/components/ui/button"
import { Github, Menu, X } from "lucide-react"
import { SearchModal } from "./search-modal"
import Link from "next/link"
import { useState } from "react"

export function DocsHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="overflow-hidden text-primary text-2xl font-bold"
          >
            NEXPAY
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/docs" className="text-foreground hover:text-primary transition-colors">
              Commencer
            </Link>
            <a href="/docs#api-keys" className="text-muted-foreground hover:text-foreground transition-colors">
              Cles API
            </a>
            <a href="/docs#dashboard-guide" className="text-muted-foreground hover:text-foreground transition-colors">
              Portail Web
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <SearchModal />
          <Button variant="ghost" size="icon" asChild className="hidden sm:flex">
            <a href="https://github.com/mouhamedlamotte/nexpay" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <nav className="container px-4 py-4 space-y-3">
            <Link
              href="/docs"
              className="block text-sm text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Commencer
            </Link>
            <a
              href="/docs#api-keys"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Clés API
            </a>
            <a
              href="/docs#dashboard-guide"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portail Web
            </a>
            <a
              href="https://github.com/mouhamedlamotte/nexpay"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              GitHub
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
