import { DocsSidebar } from "@/components/docs-sidebar"
import { DocsContent } from "@/components/docs-content"
import { DocsHeader } from "@/components/docs-header"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <DocsHeader />
      <div className="flex">
        <DocsSidebar />
        <DocsContent />
      </div>
    </div>
  )
}
