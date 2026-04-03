"use client"

import { useState } from "react"
import { Globe, Check, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/lib/i18n/language-context"
import { locales, localeNames, localeFlags, Locale } from "@/lib/i18n/config"

interface LanguageSwitcherProps {
  variant?: "default" | "minimal"
  scrolled?: boolean
}

export function LanguageSwitcher({ variant = "default", scrolled = false }: LanguageSwitcherProps) {
  const { locale, setLocale } = useLanguage()
  const [open, setOpen] = useState(false)

  const handleSelect = (newLocale: Locale) => {
    setLocale(newLocale)
    setOpen(false)
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`gap-2 font-semibold transition-all duration-300 ${
            scrolled
              ? "text-foreground hover:bg-accent/10 hover:text-accent"
              : "text-white hover:bg-white/15"
          }`}
        >
          <Globe className="h-4 w-4" />
          <span>{localeFlags[locale]}</span>
          <ChevronDown className="h-3 w-3 opacity-70" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-40 bg-card border-border shadow-premium-lg"
      >
        {locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => handleSelect(loc)}
            className={`flex items-center justify-between gap-3 cursor-pointer ${
              locale === loc ? "bg-accent/10 text-accent" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="font-bold text-sm w-6">{localeFlags[loc]}</span>
              <span>{localeNames[loc]}</span>
            </div>
            {locale === loc && <Check className="h-4 w-4 text-accent" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
