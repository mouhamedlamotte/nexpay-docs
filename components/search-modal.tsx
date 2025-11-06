"use client"

import { useEffect, useState } from "react"
import { Search, FileText, Code, Zap, ArrowRight } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const searchSuggestions = [
  {
    category: "COMMENCER",
    items: [
      {
        title: "Démarrage Rapide",
        description: "Installation et configuration de NexPay",
        href: "#quick-start",
        icon: Zap,
      },
      {
        title: "Guide du Tableau de Bord",
        description: "Apprenez à utiliser le tableau de bord",
        href: "#dashboard-guide",
        icon: FileText,
      },
    ],
  },
  {
    category: "API",
    items: [
      { title: "Référence API", description: "Documentation complète de l'API NexPay", href: "#api-keys", icon: Code },
      {
        title: "Initier un Paiement",
        description: "POST /api/v1/payment/initiate",
        href: "#initiate-payment",
        icon: Code,
      },
      {
        title: "Créer une Session",
        description: "POST /api/v1/payment/session/initiate",
        href: "#payment-session",
        icon: Code,
      },
    ],
  },
  {
    category: "INTÉGRATION",
    items: [
      { title: "Configuration Wave", description: "Configurer le provider Wave", href: "#wave", icon: FileText },
      {
        title: "Configuration Orange Money",
        description: "Configurer le provider Orange Money",
        href: "#orange-money",
        icon: FileText,
      },
      {
        title: "Webhooks",
        description: "Recevoir des notifications en temps réel",
        href: "#webhook-config",
        icon: Code,
      },
    ],
  },
]

export function SearchModal() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const filteredSuggestions = searchSuggestions
    .map((category) => ({
      ...category,
      items: category.items.filter(
        (item) =>
          query === "" ||
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()),
      ),
    }))
    .filter((category) => category.items.length > 0)

  const handleItemClick = (href: string) => {
    setOpen(false)
    setQuery("")
    window.location.hash = href
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground bg-muted/50 rounded-lg hover:bg-muted transition-colors w-64"
      >
        <Search className="h-4 w-4" />
        <span>Rechercher...</span>
        <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl p-0 gap-0 [&>button:last-child]:hidden">
          <div className="flex items-center border-b border-border px-4">
            <Search className="h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Rechercher dans la documentation..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent border-0 py-4 px-4 text-sm focus:outline-none focus:ring-0"
              autoFocus
            />
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
              ESC
            </kbd>
          </div>

          <div className="max-h-[400px] overflow-y-auto p-4">
            {filteredSuggestions.length === 0 ? (
              <div className="py-8 text-center text-sm text-muted-foreground">Aucun résultat trouvé pour "{query}"</div>
            ) : (
              <div className="space-y-6">
                {filteredSuggestions.map((category) => (
                  <div key={category.category}>
                    <h3 className="text-xs font-semibold text-muted-foreground mb-2 px-2">{category.category}</h3>
                    <div className="space-y-1">
                      {category.items.map((item) => {
                        const Icon = item.icon
                        return (
                          <button
                            key={item.href}
                            onClick={() => handleItemClick(item.href)}
                            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors text-left group"
                          >
                            <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Icon className="h-4 w-4 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                {item.title}
                              </div>
                              <div className="text-xs text-muted-foreground truncate">{item.description}</div>
                            </div>
                            <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                          </button>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
