"use client"

import { useState, useEffect, useCallback } from "react"
import {
  ChevronRight,
  BookOpen,
  Code,
  Zap,
  Shield,
  Webhook,
  CreditCard,
  Settings,
  Menu,
  X,
  Globe,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface Item {
  title: string
  href: string
}

interface Section {
  title: string
  icon: any
  items: Item[]
}

const SECTIONS: Section[] = [
  {
    title: "Introduction",
    icon: BookOpen,
    items: [
      { title: "Démarrage rapide", href: "#quick-start" },
      { title: "Installation", href: "#installation" },
    ],
  },
  {
    title: "Authentification",
    icon: Shield,
    items: [{ title: "Clés API", href: "#api-keys" }],
  },
  {
    title: "Portail Web",
    icon: Globe,
    items: [
      { title: "Guide du Dashboard", href: "#dashboard-guide" },
      { title: "Processus de paiement", href: "#payment-process" },
    ],
  },
  {
    title: "Providers",
    icon: Zap,
    items: [
      { title: "Wave", href: "#wave" },
      { title: "Orange Money", href: "#orange-money" },
    ],
  },
  {
    title: "API Paiements",
    icon: CreditCard,
    items: [
      { title: "Initier un paiement", href: "#initiate-payment" },
      { title: "Session de paiement", href: "#payment-session" },
      { title: "Vérifier le statut", href: "#check-status" },
    ],
  },
  {
    title: "Webhooks",
    icon: Webhook,
    items: [
      { title: "Configuration", href: "#webhook-config" },
      { title: "Événements", href: "#webhook-events" },
      { title: "Vérification", href: "#webhook-verification" },
    ],
  },
  {
    title: "Exemples",
    icon: Code,
    items: [
      { title: "Intégrations", href: "#examples" },
      { title: "Webhook Handlers", href: "#webhook-handlers" },
    ],
  },
  {
    title: "Avancé",
    icon: Settings,
    items: [
      { title: "Multi-projets", href: "#multi-projects" },
      { title: "Dépannage", href: "#troubleshooting" },
    ],
  },
]

export function DocsSidebar() {
  const [openSections, setOpenSections] = useState<string[]>([])
  const [activeSection, setActiveSection] = useState<string>("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  /** Toggle section: collapse les autres automatiquement */
  const toggleSection = useCallback((title: string) => {
    setOpenSections((prev) =>
      prev.includes(title) ? [] : [title],
    )
  }, [])

  /** Détermine la section à partir d’un hash */
  const findSectionByHash = useCallback(
    (hash: string): Section | undefined =>
      SECTIONS.find((s) => s.items.some((i) => i.href === hash)),
    [],
  )

  /** Synchronisation avec le hash à l’ouverture */
  useEffect(() => {
    if (typeof window === "undefined") return

    const hash = window.location.hash
    if (hash) {
      setActiveSection(hash)
      const found = findSectionByHash(hash)
      if (found) setOpenSections([found.title])
    }
  }, [findSectionByHash])

  /** Gestion du scroll + hash dynamique */
  useEffect(() => {
    if (typeof window === "undefined") return

    const handleScroll = () => {
      const sectionElements = document.querySelectorAll<HTMLElement>("section[id]")
      let current = ""

      sectionElements.forEach((el) => {
        const top = el.getBoundingClientRect().top
        if (top <= 100 && top > -el.clientHeight) {
          current = `#${el.id}`
        }
      })

      if (current && current !== activeSection) {
        setActiveSection(current)
        window.history.replaceState(null, "", current)

        const found = findSectionByHash(current)
        if (found) setOpenSections([found.title])
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection, findSectionByHash])

  const SidebarContent = () => (
    <nav className="p-6 space-y-6">
      {SECTIONS.map((section) => {
        const Icon = section.icon
        const isOpen = openSections.includes(section.title)
        const hasActiveItem = section.items.some((item) => item.href === activeSection)

        return (
          <div key={section.title}>
            <button
              onClick={() => toggleSection(section.title)}
              className={cn(
                "flex items-center justify-between w-full text-sm font-semibold transition-colors mb-2",
                hasActiveItem ? "text-primary" : "text-foreground hover:text-primary",
              )}
            >
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4" />
                {section.title}
              </div>
              <ChevronRight
                className={cn("h-4 w-4 transition-transform", isOpen && "rotate-90")}
              />
            </button>

            {isOpen && (
              <ul className="space-y-1 ml-6 border-l border-border pl-4">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "block text-sm transition-colors py-1",
                        activeSection === item.href
                          ? "text-primary font-medium"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )
      })}
    </nav>
  )

  return (
    <>
      {/* Bouton mobile */}
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden fixed bottom-4 right-4 z-50 h-12 w-12 rounded-full shadow-lg bg-primary text-primary-foreground hover:bg-primary/90"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        >
          <aside
            className="fixed left-0 top-16 bottom-0 w-64 bg-background border-r border-border overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <SidebarContent />
          </aside>
        </div>
      )}

      {/* Sidebar desktop */}
      <aside className="hidden lg:block w-64 border-r border-border h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
        <SidebarContent />
      </aside>
    </>
  )
}
