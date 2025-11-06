import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Shield, Globe, Code, ArrowRight, Github } from "lucide-react"
import { CodeBlock } from "@/components/code-block"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden ">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 z-50 lg:px-60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="overflow-hidden text-primary text-2xl font-bold"
          >
            NEXPAY
          </Link>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/mouhamedlamotte/nexpay"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
              <Button size="sm" className="bg-primary hover:bg-primary/90">
            <Link href="/docs#quick-start">
                Documentation
            </Link>
              </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container md:max-w-7xl mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Acceptez des Paiements avec{" "}
            <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              NEXPAY
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une passerelle de paiement puissante et auto-hébergée supportant Orange Money, Wave et plus encore. Contrôle
            total sur votre infrastructure de paiement.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/docs#quick-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                Commencer
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="pt-8">
            <CodeBlock
              language="bash"
              code={`# Installation en une commande
curl -fsSL https://raw.githubusercontent.com/mouhamedlamotte/nexpay/main/install.sh | bash -s -- pay.yourdomain.com`}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container md:max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Intégration Rapide</h3>
            <p className="text-sm text-muted-foreground">
              Démarrez en quelques minutes avec notre API simple et notre documentation complète.
            </p>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-secondary/50 transition-all hover:shadow-lg">
            <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Sécurisé & Fiable</h3>
            <p className="text-sm text-muted-foreground">
              Conçu avec la sécurité à l'esprit. Vérification des webhooks et authentification par clé API.
            </p>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-accent/50 transition-all hover:shadow-lg">
            <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Auto-Hébergé</h3>
            <p className="text-sm text-muted-foreground">
              Contrôle total sur votre infrastructure. Déployez sur vos propres serveurs.
            </p>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Orienté Développeur</h3>
            <p className="text-sm text-muted-foreground">
              Design d'API propre, documentation détaillée et exemples de code en plusieurs langages.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="container md:max-w-7xl mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Démarrage Rapide</h2>
            <p className="text-lg text-muted-foreground">Lancez-vous avec NexPay en trois étapes simples</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold">Installer & Configurer</h3>
              <p className="text-muted-foreground">
                Déployez NexPay sur votre serveur et configurez les variables d'environnement
              </p>
            </div>

            <div className="space-y-4">
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-secondary">2</span>
              </div>
              <h3 className="text-xl font-semibold">Configurer les Providers</h3>
              <p className="text-muted-foreground">
                Ajoutez vos identifiants de providers de paiement et configurez les webhooks
              </p>
            </div>

            <div className="space-y-4">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-accent">3</span>
              </div>
              <h3 className="text-xl font-semibold">Accepter les Paiements</h3>
              <p className="text-muted-foreground">
                Intégrez l'API dans votre application et commencez à traiter les paiements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container md:max-w-7xl mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-primary/20 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Prêt à commencer ?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explorez notre documentation complète et commencez à intégrer NexPay dans votre application dès
              aujourd'hui.
            </p>
            <Link href="/docs">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Lire la Documentation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 lg:px-60">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
          <Link
            href="/"
            className="overflow-hidden text-primary text-2xl font-bold"
          >
            NEXPAY
          </Link>
              <p className="text-sm text-muted-foreground">
                Passerelle de paiement auto-hébergée pour applications modernes.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Documentation</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/docs#quick-start" className="hover:text-foreground transition-colors">
                    Démarrage
                  </Link>
                </li>
                <li>
                  <Link href="/docs#api-keys" className="hover:text-foreground transition-colors">
                    Référence API
                  </Link>
                </li>
                <li>
                  <Link href="/docs#dashboard-guide" className="hover:text-foreground transition-colors">
                    Guides
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Ressources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/docs#webhook-config" className="hover:text-foreground transition-colors">
                    Webhooks
                  </Link>
                </li>
                <li>
                  <Link href="/docs#wave" className="hover:text-foreground transition-colors">
                    Providers
                  </Link>
                </li>
                <li>
                  <Link href="/docs#dashboard-guide" className="hover:text-foreground transition-colors">
                    Tableau de Bord
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="https://github.com/mouhamedlamotte/nexpay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    Centre d'Aide
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/mouhamedlamotte/nexpay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    Communauté
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2025 NexPay. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  )
}
