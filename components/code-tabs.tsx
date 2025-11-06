"use client"

import { useState } from "react"
import { CodeBlock } from "./code-block"
import { cn } from "@/lib/utils"

interface CodeExample {
  language: string
  label: string
  code: string
}

interface CodeTabsProps {
  examples: CodeExample[]
}

export function CodeTabs({ examples }: CodeTabsProps) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 border-b border-border">
        {examples.map((example, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-colors relative",
              activeTab === index ? "text-primary" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {example.label}
            {activeTab === index && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />}
          </button>
        ))}
      </div>
      <CodeBlock language={examples[activeTab].language} code={examples[activeTab].code} />
    </div>
  )
}
