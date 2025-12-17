"use client"

import * as React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

/* ======================================================
 * Types
 * ====================================================== */

export type ThemeType = "starter" | "balanced" | "advanced"

interface ThemeColors {
  primary: string
  primary5: string
  primary10: string
  primary20: string
  primary30: string
  primary40: string
  primary50: string
  primary60: string
  primary80: string
  secondary: string
  secondary20: string
  light: string
  light20: string
}

interface ThemeContextType {
  theme: ThemeType
  setTheme: (theme: ThemeType) => void
  colors: ThemeColors
}

/* ======================================================
 * Theme Context
 * ====================================================== */

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

/* ======================================================
 * Theme Tokens
 * ====================================================== */

export const themeColors: Record<ThemeType, ThemeColors> = {
  starter: {
    primary: "34 197 94",
    primary5: "34 197 94 / 0.05",
    primary10: "34 197 94 / 0.1",
    primary20: "34 197 94 / 0.2",
    primary30: "34 197 94 / 0.3",
    primary40: "34 197 94 / 0.4",
    primary50: "34 197 94 / 0.5",
    primary60: "34 197 94 / 0.6",
    primary80: "34 197 94 / 0.8",

    secondary: "22 163 74",
    secondary20: "22 163 74 / 0.2",

    light: "74 222 128",
    light20: "74 222 128 / 0.2",
  },

  balanced: {
    primary: "124 58 237",
    primary5: "124 58 237 / 0.05",
    primary10: "124 58 237 / 0.1",
    primary20: "124 58 237 / 0.2",
    primary30: "124 58 237 / 0.3",
    primary40: "124 58 237 / 0.4",
    primary50: "124 58 237 / 0.5",
    primary60: "124 58 237 / 0.6",
    primary80: "124 58 237 / 0.8",

    secondary: "168 85 247",
    secondary20: "168 85 247 / 0.2",

    light: "196 181 253",
    light20: "196 181 253 / 0.2",
  },

  advanced: {
    primary: "239 68 68",
    primary5: "239 68 68 / 0.05",
    primary10: "239 68 68 / 0.1",
    primary20: "239 68 68 / 0.2",
    primary30: "239 68 68 / 0.3",
    primary40: "239 68 68 / 0.4",
    primary50: "239 68 68 / 0.5",
    primary60: "239 68 68 / 0.6",
    primary80: "239 68 68 / 0.8",

    secondary: "220 38 38",
    secondary20: "220 38 38 / 0.2",

    light: "248 113 113",
    light20: "248 113 113 / 0.2",
  },
}

/* ======================================================
 * Provider
 * ====================================================== */

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [theme, setTheme] = useState<ThemeType>("balanced")

  useEffect(() => {
    const colors = themeColors[theme]
    const root = document.documentElement

    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--theme-${key.replace(/[A-Z]/g, m => "-" + m.toLowerCase())}`, value)
    })
  }, [theme])

  return (
    <NextThemesProvider {...props}>
      <ThemeContext.Provider
        value={{ theme, setTheme, colors: themeColors[theme] }}
      >
        {children}
      </ThemeContext.Provider>
    </NextThemesProvider>
  )
}

/* ======================================================
 * Hook
 * ====================================================== */

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider")
  }
  return context
}
