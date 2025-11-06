import { CodeBlock } from "@/components/code-block"
import { CodeTabs } from "@/components/code-tabs"
import { ApiTabs } from "@/components/api-tabs"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle, CheckCircle, Info } from "lucide-react"
import Image from "next/image"

export function DocsContent() {
  return (
    <main className="flex-1 px-6 py-8 max-w-4xl mx-auto overflow-hidden">
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="space-y-4">
          <Badge className="bg-primary/10 text-primary border-primary/20">v1.0</Badge>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Documentation NexPay
          </h1>
          <p className="text-xl text-muted-foreground">
            Intégrez facilement les paiements mobiles Wave et Orange Money dans votre application
          </p>
        </section>

        {/* Quick Start */}
        <section id="quick-start" className="space-y-6">
          <h2 className="text-3xl font-bold">Démarrage rapide</h2>
          <p className="text-muted-foreground">
            Commencez à accepter des paiements en quelques minutes avec notre API simple et puissante.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl">1️⃣</span>
              </div>
              <h3 className="font-semibold mb-2">Créer un compte</h3>
              <p className="text-sm text-muted-foreground">Installez NexPay et créez votre premier projet</p>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-secondary/50 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <span className="text-2xl">2️⃣</span>
              </div>
              <h3 className="font-semibold mb-2">Configurer les providers</h3>
              <p className="text-sm text-muted-foreground">Ajoutez vos clés API Wave et Orange Money</p>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-accent/50 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <span className="text-2xl">3️⃣</span>
              </div>
              <h3 className="font-semibold mb-2">Faire un paiement</h3>
              <p className="text-sm text-muted-foreground">Utilisez l'API pour initier votre premier paiement</p>
            </Card>
          </div>
        </section>

        {/* Installation */}
        <section id="installation" className="space-y-6">
          <h2 className="text-3xl font-bold">Installation</h2>

          <Alert className="bg-muted/50 border-border">
            <Info className="h-4 w-4" />
            <AlertDescription>
              NexPay peut être installé en développement local ou en production avec SSL automatique.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Installation en développement</h3>
            <CodeBlock
              language="bash"
              code={`# Cloner le repository
git clone https://github.com/mouhamedlamotte/nexpay.git
cd nexpay

# Copier le fichier d'environnement
cp .env.example .env

# Démarrer les services
docker compose -f docker-compose-dev.yml up -d

# Accéder à l'application
# http://localhost:9090`}
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Installation en production</h3>
            <CodeBlock
              language="bash"
              code={`# Installation en une commande
curl -fsSL https://raw.githubusercontent.com/mouhamedlamotte/nexpay/main/install.sh | bash -s -- pay.yourdomain.com`}
            />
          </div>
        </section>

        {/* API Keys */}
        <section id="api-keys" className="space-y-6">
          <h2 className="text-3xl font-bold">Authentification avec clés API</h2>

          <Alert className="bg-primary/10 border-primary/20">
            <CheckCircle className="h-4 w-4 text-primary" />
            <AlertDescription className="text-foreground">
              NexPay utilise deux types de clés API pour une sécurité optimale : une clé de lecture (publique) et une
              clé d'écriture (privée).
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-card border-border">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Badge className="bg-secondary/10 text-secondary border-secondary/20">READ</Badge>
                Clé de lecture
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Peut être utilisée côté client</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Vérifier le statut d'un paiement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Récupérer une session</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Badge className="bg-destructive/10 text-destructive border-destructive/20">WRITE</Badge>
                Clé d'écriture
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                  <span>À garder secrète (serveur uniquement)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                  <span>Initier un paiement</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                  <span>Créer une session de paiement</span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Utilisation des clés</h3>
            <CodeBlock
              language="bash"
              code={`# Header requis pour toutes les requêtes
x-api-key: YOUR_API_KEY`}
            />
          </div>
        </section>

        {/* Dashboard Guide */}
        <section id="dashboard-guide" className="space-y-6">
          <h2 className="text-3xl font-bold">Guide du Tableau de Bord</h2>

          <p className="text-muted-foreground">
            Le dashboard vous donne un aperçu complet de votre activité de paiement avec des statistiques en temps réel.
          </p>

          <div className="rounded-lg overflow-hidden border border-border">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dashboard-QumvXk0ci6UHsPlk6UxN0Tl6ycyQGC.png"
              alt="Dashboard NexPay"
              width={1200}
              height={800}
              className="w-full"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-card border-border">
              <h3 className="font-semibold mb-3">Métriques clés</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Volume Total</strong> : Montant total des transactions
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Transactions</strong> : Nombre de transactions
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Taux de Réussite</strong> : Pourcentage de transactions réussies
                  </span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h3 className="font-semibold mb-3">Fonctionnalités</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Performance par Provider</strong> : Répartition par fournisseur
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Statistiques Rapides</strong> : Montant moyen, nouveaux clients
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Transactions récentes</strong> : Liste des dernières
                    transactions
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Payment Process */}
        <section id="payment-process" className="space-y-6">
          <h2 className="text-3xl font-bold">Processus de paiement</h2>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">1. Sélection du mode de paiement</h3>
              <p className="text-muted-foreground">
                Le client choisit son mode de paiement préféré (Wave, Orange Money, etc.)
              </p>
              <div className="rounded-lg overflow-hidden border border-border">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/checkout-KBdxHtTlso3dsvBrwHW63RHna7cLIJ.png"
                  alt="Page de checkout"
                  width={1200}
                  height={800}
                  className="w-full"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">2. Paiement via QR Code ou lien direct</h3>
              <p className="text-muted-foreground">
                Le client peut scanner le QR code avec son application de paiement ou cliquer sur le lien direct.
              </p>
              <div className="rounded-lg overflow-hidden border border-border">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scan-pnDHFYCU6cebLygBaFkoT1pvPYKIYc.png"
                  alt="Page de paiement avec QR code"
                  width={1200}
                  height={800}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Wave Configuration */}
        <section id="wave" className="space-y-6">
          <h2 className="text-3xl font-bold">Configuration Wave</h2>

          <Alert className="bg-primary/10 border-primary/20">
            <Info className="h-4 w-4 text-primary" />
            <AlertDescription className="text-foreground">
              La configuration des providers se fait sur une page dédiée par provider :{" "}
              <code className="text-sm bg-muted px-2 py-0.5 rounded">/wave</code>
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Onglet Secrets Configuration</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">API Key</strong> : Votre clé API Wave obtenue depuis le portail
                développeur Wave
              </li>
            </ul>

            <h3 className="text-xl font-semibold">Onglet Webhook Configuration</h3>
            <p className="text-muted-foreground">Deux types d'authentification sont disponibles :</p>

            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-4 bg-card border-border">
                <h4 className="font-semibold mb-2">Shared Secret</h4>
                <p className="text-sm text-muted-foreground">
                  Authentification simple avec une clé secrète partagée (minimum 20 caractères)
                </p>
              </Card>
              <Card className="p-4 bg-card border-border">
                <h4 className="font-semibold mb-2">HMAC (Recommandé)</h4>
                <p className="text-sm text-muted-foreground">
                  Authentification cryptographique avancée avec vérification d'intégrité
                </p>
              </Card>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold">URL du webhook à configurer chez Wave :</h4>
              <CodeBlock language="bash" code="https://pay.yourdomain.com/api/v1/webhook/wave" />
            </div>
          </div>
        </section>

        {/* Orange Money Configuration */}
        <section id="orange-money" className="space-y-6">
          <h2 className="text-3xl font-bold">Configuration Orange Money</h2>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Onglet Secrets Configuration</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Client ID</strong> : Votre identifiant client Orange Money
              </li>
              <li>
                <strong className="text-foreground">Client Secret</strong> : Votre secret client Orange Money
              </li>
              <li>
                <strong className="text-foreground">Name</strong> : Votre nom marchant Orange Money
              </li>
              <li>
                <strong className="text-foreground">Code</strong> : Code fournis par Orange Money
              </li>
            </ul>
            <h3 className="text-xl font-semibold">Onglet Webhook Configuration</h3>
            <Alert className="bg-secondary/10 border-secondary/20">
              <CheckCircle className="h-4 w-4 text-secondary" />
              <AlertDescription className="text-foreground">
                <strong>Auto-configuration disponible</strong> Si vous activez la configuration automatique, le webhook sera configuré automatiquement chez Orange Money.
                <br />
                vous avez aussi la possibilité de mettre votre propre clée ou laisser nexpay la generer automatiquement.
              </AlertDescription>
            </Alert>

            <div className="space-y-2">
              <h4 className="font-semibold">URL du webhook à configurer chez Orange Money :</h4>
              <CodeBlock language="bash" code="https://pay.yourdomain.com/api/v1/webhook/om" />
            </div>
          </div>
        </section>

        {/* Initiate Payment */}
<section id="initiate-payment" className="space-y-6">
  <h2 className="text-3xl font-bold">Initier un paiement direct</h2>

  <p className="text-muted-foreground">
    Utilisez cette méthode lorsque vous contrôlez la sélection du provider de paiement dans votre interface.
  </p>

  <div className="space-y-4">
    <div className="flex items-center gap-2">
      <Badge className="bg-accent/10 text-accent border-accent/20">POST</Badge>
      <code className="text-sm bg-muted px-3 py-1 rounded">/api/v1/payment/initiate</code>
    </div>

    <ApiTabs
      request={`const response = await fetch('https://pay.yourdomain.com/api/v1/payment/initiate', {
  method: 'POST',
  headers: {
    'x-api-key': process.env.NEXPAY_WRITE_KEY,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    amount: 5000,
    userId: '1f31dfd7-aec8-4adf-84ff-4a9c1981be2a',
    name: 'Mouhamed  baba',
    phone: '+22177123456',
    email: 'exemple@email.com',
    client_reference: 'ref-1f31dfd7-aec8-4adf-84ff-4a9c1981be2a',
    projectId: '{{projectId}}',
    currency: 'XOF',
    metadata: { key: 'value', foo: 'bar' },
    successUrl: 'https://example.com/success',
    cancelUrl: 'https://example.com/error',
    provider: 'wave'
  })
});

const data = await response.json();
console.log(data);`}
      response={`{
  "statusCode": 200,
  "message": "Payment data successfully initialized",
  "data": {
    "amount": 5000,
    "currency": "XOF",
    "provider": {
      "id": "cmhkkw9sp0000p62174i881pb",
      "name": "Wave",
      "code": "wave",
      "logoUrl": "https://pay.your-domain.com/api/v1/media/images/logos/wave.png"
    },
    "reference": "NEXPAY_TX_13C9FAED3CC0467E",
    "payer": {
      "userId": "1f31dfd7-aec8-4adf-84ff-4a9c1981be2a",
      "email": "exemple@email.com",
      "phone": "+22177123456",
      "name": "Mouhamed  baba"
    },
    "checkout_urls": [
      {
        "name": "Wave",
        "url": "https://wave.com/checkout/abc123",
        "thumb": "https://pay.your-domain.com/api/v1/media/images/thumbs/wave.png"
      }
    ],
    "qr_code": { "data": "iVBORw0KGgoAAA..." },
    "expiration": "2025-11-06T00:22:51.115Z"
  }
}`}
    />
  </div>
</section>


        {/* Payment Session */}
<section id="payment-session" className="space-y-6">
  <h2 className="text-3xl font-bold">Créer une session de paiement</h2>

  <p className="text-muted-foreground">
    Utilisez cette méthode pour déléguer la sélection du provider à l'interface checkout de NexPay.
  </p>

  <div className="space-y-4">
    <div className="flex items-center gap-2">
      <Badge className="bg-accent/10 text-accent border-accent/20">POST</Badge>
      <code className="text-sm bg-muted px-3 py-1 rounded">/api/v1/payment/session/initiate</code>
    </div>

    <ApiTabs
      request={`const response = await fetch('https://pay.yourdomain.com/api/v1/payment/session/initiate', {
  method: 'POST',
  headers: {
    'x-api-key': process.env.NEXPAY_WRITE_KEY,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    amount: 5000,
    userId: '1f31dfd7-aec8-4adf-84ff-4a9c1981be2a',
    name: 'Mouhamed  baba',
    phone: '+22177123456',
    email: 'exemple@email.com',
    client_reference: 'ref-1f31dfd7-aec8-4adf-84ff-4a9c1981be2a',
    projectId: '{{projectId}}',
    currency: 'XOF',
    metadata: { key: 'value', foo: 'bar' },
    successUrl: 'https://example.com/success',
    cancelUrl: 'https://example.com/error'
  })
});

const data = await response.json();
window.location.href = data.data.checkoutUrl;`}
      response={`{
  "statusCode": 200,
  "message": "Payment session successfully initiated",
  "data": {
    "sessionId": "cmhdpuj6m00069usa10370ldr",
    "checkoutUrl": "https://pay.yourdomain.com/checkout/cmhdpuj6m00069usa10370ldr",
    "status": "opened",
    "expiresAt": "2025-10-30T18:46:25.053Z"
  }
}`}
    />
  </div>
</section>

<section id="session-details" className="space-y-6">
  <h2 className="text-3xl font-bold">Récupérer les détails d'une session</h2>

  <p className="text-muted-foreground">
    Retourne toutes les informations associées à une session de paiement.
  </p>

  <div className="flex items-center gap-2">
    <Badge className="bg-primary/10 text-primary border-primary/20">GET</Badge>
    <code className="text-sm bg-muted px-3 py-1 rounded">/api/v1/payment/session/:sessionId</code>
  </div>

  <ApiTabs
    request={`const response = await fetch('https://pay.yourdomain.com/api/v1/payment/session/cmhdpuj6m00069usa10370ldr', {
  headers: { 'x-api-key': 'YOUR_READ_KEY' }
});

const data = await response.json();
console.log(data.data);`}
    response={`{
  "statusCode": 200,
  "message": "Payment session successfully retrieved",
  "data": {
    "id": "cmhdpuj6m00069usa10370ldr",
    "amount": "100800",
    "currency": "XOF",
    "clientReference": "nexpay-ref-30-10-2025",
    "status": "opened",
    "expiresAt": "2025-10-30T18:46:25.053Z",
    "checkoutUrl": "https://pay.yourdomain.com/checkout/cmhdpuj6m00069usa10370ldr",
    "payer": {
      "name": "Mouhamed  baba",
      "email": "lamottelymouhamed@gmail.com",
      "phone": "+22177123456"
    },
    "project": {
      "id": "cmhciopb000049ugoic8kqhyj",
      "name": "Nexcom Payment",
      "description": "Portail de paiement The Nexcom"
    },
    "providers": [
      { "name": "Orange Money", "code": "om" },
      { "name": "Wave", "code": "wave" }
    ]
  }
}`}
  />
</section>



<section id="check-status" className="space-y-6">
  <h2 className="text-3xl font-bold">Vérifier le statut d'un paiement (Long Polling)</h2>

  <Alert className="bg-secondary/10 border-secondary/20">
    <Info className="h-4 w-4 text-secondary" />
    <AlertDescription className="text-foreground">
      Cette route garde la requête ouverte jusqu’à 60 secondes. Elle répond dès que le statut n’est plus <code>pending</code>.
    </AlertDescription>
  </Alert>

  <div className="flex items-center gap-2">
    <Badge className="bg-primary/10 text-primary border-primary/20">GET</Badge>
    <code className="text-sm bg-muted px-3 py-1 rounded">/api/v1/payment/session/:sessionId/status</code>
  </div>

  <ApiTabs
    request={`const response = await fetch(
  'https://pay.yourdomain.com/api/v1/payment/session/cmhdpuj6m00069usa10370ldr/status',
  { headers: { 'x-api-key': 'YOUR_READ_KEY' } }
);

const data = await response.json();
console.log(data.data.status);`}
    response={`{
  "statusCode": 200,
  "data": {
    "sessionId": "cmhdpuj6m00069usa10370ldr",
    "status": "succeeded", // ou "failed" ou "pending"
    "amount": 100800,
    "currency": "XOF",
    "provider": { "name": "Wave", "code": "wave" },
    "customer": {
      "name": "Mouhamed  baba",
      "email": "lamottelymouhamed@gmail.com",
      "phone": "+22177123456"
    }
  }
}`}
  />
</section>


        {/* Webhooks */}
        <section id="webhook-config" className="space-y-6">
          <h2 className="text-3xl font-bold">Configuration des webhooks</h2>

          <p className="text-muted-foreground">
            Les webhooks vous permettent de recevoir des notifications en temps réel sur les événements de paiement.
          </p>

          <Alert className="bg-accent/10 border-accent/20">
            <CheckCircle className="h-4 w-4 text-accent" />
            <AlertDescription className="text-foreground">
              Le secret webhook est optionnel. S'il n'est pas fourni, il sera généré automatiquement.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Créer un webhook</h3>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>
                Accédez à <strong className="text-foreground">Paramètres du compte</strong> →{" "}
                <strong className="text-foreground">Webhooks</strong>
              </li>
              <li>
                Cliquez sur <strong className="text-foreground">Nouveau webhook</strong>
              </li>
              <li>Renseignez l'URL de votre endpoint</li>
              <li>
                Définissez le nom du header (ex:{" "}
                <code className="text-sm bg-muted px-2 py-0.5 rounded">x-webhook-secret</code>)
              </li>
              <li>Le secret sera généré automatiquement si vous ne le fournissez pas</li>
            </ol>

            <div className="rounded-lg overflow-hidden border border-border">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/webhook-BGLhg48nntl9fLDJd47GDAIsbeqd7Y.png"
                alt="Création d'un webhook"
                width={1200}
                height={800}
                className="w-full"
              />
            </div>

            <Alert className="bg-destructive/10 border-destructive/20">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              <AlertDescription className="text-foreground">
                <strong>Attention</strong> : Le secret n'est visible qu'une seule fois après la création du webhook.
                Copiez-le et sauvegardez-le dans un endroit sécurisé.
              </AlertDescription>
            </Alert>

            <div className="rounded-lg overflow-hidden border border-border">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/one_time_view-rzDfulY35OHIKJLLpGeno3rAAk3Wrm.png"
                alt="Secret webhook - vue unique"
                width={1200}
                height={800}
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* Webhook Events */}
        <section id="webhook-events" className="space-y-6">
          <h2 className="text-3xl font-bold">Événements webhook</h2>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Structure d'un événement</h3>
            <CodeBlock
              language="json"
              code={`{
  "type": "payment.succeeded",
  "data": {
    "amount": "100800",
    "client_reference": "nexpay-ref-30-10-2025",
    "status": "SUCCEEDED",
    "resolvedAt": "2025-10-30T17:29:58.109Z",
    "payer": {
      "name": "Jean Dupont",
      "email": "jean@example.com",
      "phone": "+221771234567"
    },
    "provider": {
      "name": "Wave",
      "code": "wave"
    },
    "project": {
      "id": "proj_123",
      "name": "Mon Projet"
    },
    "metadata": {
      "order_id": "ORDER-123"
    }
  }
}`}
            />

            <h3 className="text-lg font-semibold">Types d'événements</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-4 bg-card border-border">
                <code className="text-sm text-secondary">payment.succeeded</code>
                <p className="text-sm text-muted-foreground mt-2">Paiement réussi</p>
              </Card>
              <Card className="p-4 bg-card border-border">
                <code className="text-sm text-destructive">payment.failed</code>
                <p className="text-sm text-muted-foreground mt-2">Paiement échoué</p>
              </Card>
              <Card className="p-4 bg-card border-border">
                <code className="text-sm text-accent">payment.pending</code>
                <p className="text-sm text-muted-foreground mt-2">Paiement en attente</p>
              </Card>
              <Card className="p-4 bg-card border-border">
                <code className="text-sm text-muted-foreground">payment.cancelled</code>
                <p className="text-sm text-muted-foreground mt-2">Paiement annulé</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Webhook Verification */}
        <section id="webhook-verification" className="space-y-6">
          <h2 className="text-3xl font-bold">Vérification des webhooks</h2>

          <Alert className="bg-destructive/10 border-destructive/20">
            <AlertTriangle className="h-4 w-4 text-destructive" />
            <AlertDescription className="text-foreground">
              Vérifiez toujours la signature des webhooks pour garantir leur authenticité et éviter les attaques.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Exemple Node.js/Express</h3>
            <CodeBlock
              language="javascript"
              code={`const express = require('express');

const app = express();
app.use(express.json());

const WEBHOOK_SECRET = process.env.NEXPAY_WEBHOOK_SECRET;


app.post('/webhook/nexpay', (req, res) => {
  const receivedSecret = req.headers['x-webhook-secret'];
  
  // Vérifier la signature
  if (receivedSecret !== WEBHOOK_SECRET) {
    console.error('Invalid webhook signature');
    return res.status(401).send('Invalid signature');
  }
  
  const event = req.body;
  
  // Traiter l'événement
  switch (event.type) {
    case 'payment.succeeded':
      console.log('Payment succeeded:', event.data.client_reference);
      // Mettre à jour la commande
      break;
    
    case 'payment.failed':
      console.log('Payment failed:', event.data.client_reference);
      // Notifier l'utilisateur
      break;
  }
  
  // Toujours répondre 200 OK
  res.status(200).send('OK');
});

app.listen(3000);`}
            />
          </div>
        </section>

<section id="examples" className="space-y-6">
  <h2 className="text-3xl font-bold">Exemples d'intégration</h2>

  <p className="text-muted-foreground">
    Voici des exemples d'intégration dans différents langages de programmation pour créer une session de paiement.
  </p>

  <div className="space-y-4">
    <h3 className="text-xl font-semibold">Créer une session de paiement</h3>
    <CodeTabs
      examples={[
        {
          language: "javascript",
          label: "JavaScript/Node.js",
          code: `const axios = require('axios');

async function createPaymentSession() {
  try {
    const response = await axios.post(
      'https://pay.yourdomain.com/api/v1/payment/session/initiate',
      {
        amount: 5000,
        userId: '1f31dfd7-aec8-4adf-84ff-4a9c1981be2a',
        name: 'Mouhamed Baba',
        phone: '+22177123456',
        email: 'exemple@email.com',
        client_reference: 'ref-1f31dfd7-aec8-4adf-84ff-4a9c1981be2a',
        projectId: '{{projectId}}',
        currency: 'XOF',
        metadata: {
          key: 'value',
          foo: 'bar'
        },
        successUrl: 'https://example.com/success',
        cancelUrl: 'https://example.com/error'
      },
      {
        headers: {
          'x-api-key': process.env.NEXPAY_WRITE_KEY,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('Checkout URL:', response.data.data.checkoutUrl);
    return response.data;
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

createPaymentSession();`,
        },
        {
          language: "python",
          label: "Python",
          code: `import requests
import os

NEXPAY_API_URL = "https://pay.yourdomain.com/api/v1"
WRITE_KEY = os.getenv("NEXPAY_WRITE_KEY")

def create_payment_session():
    headers = {
        "x-api-key": WRITE_KEY,
        "Content-Type": "application/json"
    }
  
    payload = {
        "amount": 5000,
        "userId": "1f31dfd7-aec8-4adf-84ff-4a9c1981be2a",
        "name": "Mouhamed Baba",
        "phone": "+22177123456",
        "email": "exemple@email.com",
        "client_reference": "ref-1f31dfd7-aec8-4adf-84ff-4a9c1981be2a",
        "projectId": "{{projectId}}",
        "currency": "XOF",
        "metadata": {
            "key": "value",
            "foo": "bar"
        },
        "successUrl": "https://example.com/success",
        "cancelUrl": "https://example.com/error"
    }
  
    response = requests.post(
        f"{NEXPAY_API_URL}/payment/session/initiate",
        json=payload,
        headers=headers
    )
  
    print("Checkout URL:", response.json()["data"]["checkoutUrl"])
    return response.json()

create_payment_session()`,
        },
        {
          language: "php",
          label: "PHP",
          code: `<?php

function createPaymentSession() {
    $writeKey = getenv('NEXPAY_WRITE_KEY');
    $apiUrl = 'https://pay.yourdomain.com/api/v1/payment/session/initiate';
  
    $data = [
        'amount' => 5000,
        'userId' => '1f31dfd7-aec8-4adf-84ff-4a9c1981be2a',
        'name' => 'Mouhamed Baba',
        'phone' => '+22177123456',
        'email' => 'exemple@email.com',
        'client_reference' => 'ref-1f31dfd7-aec8-4adf-84ff-4a9c1981be2a',
        'projectId' => '{{projectId}}',
        'currency' => 'XOF',
        'metadata' => [
            'key' => 'value',
            'foo' => 'bar'
        ],
        'successUrl' => 'https://example.com/success',
        'cancelUrl' => 'https://example.com/error'
    ];
  
    $ch = curl_init($apiUrl);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'x-api-key: ' . $writeKey,
        'Content-Type: application/json'
    ]);
  
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
  
    if ($httpCode === 200) {
        $result = json_decode($response, true);
        echo 'Checkout URL: ' . $result['data']['checkoutUrl'];
    } else {
        echo 'Error: ' . $response;
    }
}

createPaymentSession();
?>`,
        },
      ]}
    />
  </div>
</section>

{/* Webhook Handlers */}
<section id="webhook-handlers" className="space-y-6">
  <h2 className="text-3xl font-bold">Webhook Handlers</h2>
  <p className="text-muted-foreground">
    Exemples de handlers webhook pour traiter les événements de paiement.
  </p>

  <CodeTabs
    examples={[
      {
        language: "javascript",
        label: "Node.js/Express",
        code: `const express = require('express');

const app = express();
app.use(express.json());

const WEBHOOK_SECRET = process.env.NEXPAY_WEBHOOK_SECRET;

app.post('/webhook/nexpay', (req, res) => {
  const signature = req.headers['x-webhook-secret'];
  
  if (signature !== WEBHOOK_SECRET) {
    console.error('Invalid webhook secret');
    return res.status(401).send('Invalid secret');
  }
  
  const event = req.body;
  
  switch (event.type) {
    case 'payment.succeeded':
      console.log('Payment succeeded:', event.data.client_reference);
      break;
    case 'payment.failed':
      console.log('Payment failed:', event.data.client_reference);
      break;
  }
  
  res.status(200).send('OK');
});

app.listen(3000);`,
      },
      {
        language: "python",
        label: "Python/Flask",
        code: `from flask import Flask, request, jsonify
import os

app = Flask(__name__)
WEBHOOK_SECRET = os.getenv('NEXPAY_WEBHOOK_SECRET')

@app.route('/webhook/nexpay', methods=['POST'])
def nexpay_webhook():
    signature = request.headers.get('x-webhook-secret')
    if signature != WEBHOOK_SECRET:
        return jsonify({'error': 'Invalid secret'}), 401

    payload = request.get_json()
    event_type = payload.get('type')
    data = payload.get('data')

    if event_type == 'payment.succeeded':
        print(f"Payment succeeded: {data['client_reference']}")
    elif event_type == 'payment.failed':
        print(f"Payment failed: {data['client_reference']}")

    return jsonify({'status': 'ok'}), 200

if __name__ == '__main__':
    app.run(port=3000)`,
      },
      {
        language: "php",
        label: "PHP",
        code: `<?php

$webhookSecret = getenv('NEXPAY_WEBHOOK_SECRET');
$signature = $_SERVER['HTTP_X_WEBHOOK_SECRET'] ?? '';

if ($signature !== $webhookSecret) {
    http_response_code(401);
    die('Invalid secret');
}

$payload = json_decode(file_get_contents('php://input'), true);
$eventType = $payload['type'];
$data = $payload['data'];

switch ($eventType) {
    case 'payment.succeeded':
        error_log("Payment succeeded: " . $data['client_reference']);
        break;
    case 'payment.failed':
        error_log("Payment failed: " . $data['client_reference']);
        break;
}

http_response_code(200);
echo 'OK';
?>`,
      },
    ]}
  />
</section>


        {/* Multi-projects */}
        <section id="multi-projects" className="space-y-6">
          <h2 className="text-3xl font-bold">Gestion multi-projets</h2>

          <p className="text-muted-foreground">NexPay permet de gérer plusieurs projets avec une seule instance.</p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-card border-border">
              <h3 className="font-semibold mb-3">Configuration unique des providers</h3>
              <p className="text-sm text-muted-foreground">
                Les providers (Wave, Orange Money) sont configurés une seule fois et partagés entre tous les projets.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h3 className="font-semibold mb-3">Configuration dynamique par projet</h3>
              <p className="text-sm text-muted-foreground">
                Chaque projet peut avoir ses propres webhooks, URLs de redirection et paramètres.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h3 className="font-semibold mb-3">Isolation des données</h3>
              <p className="text-sm text-muted-foreground">
                Les transactions et statistiques sont isolées par projet pour une meilleure organisation.
              </p>
            </Card>
          </div>
        </section>

        {/* Troubleshooting */}
        <section id="troubleshooting" className="space-y-6">
          <h2 className="text-3xl font-bold">Dépannage</h2>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Les paiements ne fonctionnent pas</h3>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Vérifiez que les providers sont correctement configurés (onglets Secrets et Webhook)</li>
                <li>Vérifiez que les webhooks sont configurés chez les providers</li>
                <li>Testez le provider avec le bouton "Test Payment"</li>
                <li>
                  Consultez les logs :{" "}
                  <code className="text-sm bg-muted px-2 py-0.5 rounded">docker-compose logs -f</code>
                </li>
              </ol>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Problème de certificat SSL (Production)</h3>
              <p className="text-muted-foreground">
                Traefik gère automatiquement les certificats SSL. Si vous rencontrez des problèmes :
              </p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Vérifiez que votre domaine pointe bien vers votre serveur</li>
                <li>
                  Vérifiez les logs Traefik :{" "}
                  <code className="text-sm bg-muted px-2 py-0.5 rounded">docker-compose logs traefik</code>
                </li>
                <li>Attendez quelques minutes pour la génération du certificat</li>
                <li>Vérifiez que les ports 80 et 443 sont ouverts</li>
              </ol>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Erreurs d'authentification API</h3>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>
                  Vérifiez que vous utilisez le bon header :{" "}
                  <code className="text-sm bg-muted px-2 py-0.5 rounded">x-api-key</code>
                </li>
                <li>Vérifiez que vous utilisez la bonne clé (lecture ou écriture)</li>
                <li>
                  Vérifiez que la clé n'a pas été modifiée dans le{" "}
                  <code className="text-sm bg-muted px-2 py-0.5 rounded">.env</code>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="pt-12 border-t border-border">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Développé avec ❤️ par{" "}
              <a
                href="https://mouhamedlamotte.thenexcom.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Mouhamed Lamotte
              </a>
            </p>
            <p className="text-sm text-muted-foreground">Version 1.0 • Dernière mise à jour : Novembre 2025</p>
          </div>
        </section>
      </div>
    </main>
  )
}
