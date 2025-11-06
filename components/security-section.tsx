import { Card } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle } from "lucide-react"

export function SecuritySection() {
  return (
    <section id="security" className="space-y-6">
      <h2 className="text-3xl font-bold">Sécurité</h2>

      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Bonnes pratiques</h3>

          <Alert className="bg-primary/10 border-primary/20">
            <CheckCircle className="h-4 w-4 text-primary" />
            <AlertDescription className="text-foreground">
              <strong>Clés API</strong> : Ne jamais exposer la clé d'écriture côté client. Utilisez la clé de lecture
              uniquement pour les opérations de consultation.
            </AlertDescription>
          </Alert>

          <Alert className="bg-secondary/10 border-secondary/20">
            <CheckCircle className="h-4 w-4 text-secondary" />
            <AlertDescription className="text-foreground">
              <strong>Webhooks</strong> : Toujours vérifier la signature des webhooks. Utilisez HTTPS pour tous les
              endpoints webhook.
            </AlertDescription>
          </Alert>

          <Alert className="bg-accent/10 border-accent/20">
            <CheckCircle className="h-4 w-4 text-accent" />
            <AlertDescription className="text-foreground">
              <strong>Production</strong> : Changer immédiatement le mot de passe admin par défaut. Utiliser des mots de
              passe forts pour la base de données.
            </AlertDescription>
          </Alert>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Fonctionnalités de sécurité intégrées</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-4 bg-card border-border">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Authentification API à deux niveaux</h4>
                  <p className="text-sm text-muted-foreground">Clés de lecture et d'écriture séparées</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-card border-border">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Vérification des signatures webhook</h4>
                  <p className="text-sm text-muted-foreground">HMAC ou Shared Secret</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-card border-border">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">HTTPS obligatoire en production</h4>
                  <p className="text-sm text-muted-foreground">Géré automatiquement par Traefik</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-card border-border">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Certificats SSL automatiques</h4>
                  <p className="text-sm text-muted-foreground">Let's Encrypt intégré</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-card border-border">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Isolation des projets</h4>
                  <p className="text-sm text-muted-foreground">Données séparées par projet</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-card border-border">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Chiffrement des données sensibles</h4>
                  <p className="text-sm text-muted-foreground">Variables d'environnement sécurisées</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
