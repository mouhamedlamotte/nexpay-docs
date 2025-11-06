"use client"

import { useState } from "react"
import { CodeBlock } from "./code-block"
import { cn } from "@/lib/utils"

interface ApiTabsProps {
  request: string
  response: string
  requestLanguage?: string
  responseLanguage?: string
}

export function ApiTabs({
  request,
  response,
  requestLanguage = "javascript",
  responseLanguage = "json",
}: ApiTabsProps) {
  const [activeTab, setActiveTab] = useState<"request" | "response">("request")

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 border-b border-border">
        <button
          onClick={() => setActiveTab("request")}
          className={cn(
            "px-4 py-2 text-sm font-medium transition-colors relative",
            activeTab === "request" ? "text-primary" : "text-muted-foreground hover:text-foreground",
          )}
        >
          Requête
          {activeTab === "request" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />}
        </button>
        <button
          onClick={() => setActiveTab("response")}
          className={cn(
            "px-4 py-2 text-sm font-medium transition-colors relative",
            activeTab === "response" ? "text-primary" : "text-muted-foreground hover:text-foreground",
          )}
        >
          Réponse
          {activeTab === "response" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />}
        </button>
      </div>
      {activeTab === "request" ? (
        <CodeBlock language={requestLanguage} code={request} />
      ) : (
        <CodeBlock language={responseLanguage} code={response} />
      )}
    </div>
  )
}
