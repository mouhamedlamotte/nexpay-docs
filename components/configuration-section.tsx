import { Card } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Info } from "lucide-react"
import Image from "next/image"

export function ConfigurationSection() {
  return (
    <section id="configuration" className="space-y-6">
      <h2 className="text-3xl font-bold">Configuration</h2>

      <Alert className="bg-muted/50 border-border">
        <Info className="h-4 w-4" />
        <AlertDescription>
          Après l'installation, vous devez configurer vos providers de paiement et vos webhooks.
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Configuration des URLs de redirection</h3>
        <p className="text-muted-foreground">
          Configurez les URLs de redirection après paiement dans les paramètres de votre projet.
        </p>

        <div className="rounded-lg overflow-hidden border border-border">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/webhook-BGLhg48nntl9fLDJd47GDAIsbeqd7Y.png"
            alt="Configuration des callbacks"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-4 bg-card border-border">
            <h4 className="font-semibold mb-2">Success URL</h4>
            <p className="text-sm text-muted-foreground">Redirection après paiement réussi</p>
          </Card>
          <Card className="p-4 bg-card border-border">
            <h4 className="font-semibold mb-2">Failure URL</h4>
            <p className="text-sm text-muted-foreground">Redirection après échec de paiement</p>
          </Card>
          <Card className="p-4 bg-card border-border">
            <h4 className="font-semibold mb-2">Cancel URL</h4>
            <p className="text-sm text-muted-foreground">Redirection si l'utilisateur annule</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
