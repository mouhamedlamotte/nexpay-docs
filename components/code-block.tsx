"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

interface CodeBlockProps {
  code: string
  language: string
  className?: string
}

export function CodeBlock({ code, language, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const customStyle = {
    margin: 0,
    padding: "1rem",
    background: "hsl(var(--card))",
    fontSize: "0.875rem",
    borderRadius: "0 0 0.5rem 0.5rem",
    border: "1px solid hsl(var(--border))",
    borderTop: "none",
  }

  return (
    <div className={cn("relative group border border-border! rounded-md", className)}>
      <div className="flex items-center justify-between px-4 py-2 bg-muted border border-border">
        <span className="text-xs font-mono text-muted-foreground uppercase">{language}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={copyToClipboard}
          className="h-8 px-2 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 mr-1" />
              <span className="text-xs">Copié</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4 mr-1" />
              <span className="text-xs">Copier</span>
            </>
          )}
        </Button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={customStyle}
        showLineNumbers={false}
        wrapLines={true}
        wrapLongLines={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}
