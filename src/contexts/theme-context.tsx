"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type ThemeType = "starter" | "balanced" | "advanced"

interface ThemeColors {
  primary: string
  secondary: string
  light: string
}

interface ThemeContextType {
  theme: ThemeType
  setTheme: (theme: ThemeType) => void
  colors: ThemeColors
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const themeColors = {
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

  // balanced: {
  //   primary: "217 119 6",
  //   primary5: "217 119 6 / 0.05",
  //   primary10: "217 119 6 / 0.1",
  //   primary20: "217 119 6 / 0.2",
  //   primary30: "217 119 6 / 0.3",
  //   primary40: "217 119 6 / 0.4",
  //   primary50: "217 119 6 / 0.5",
  //   primary60: "217 119 6 / 0.6",
  //   primary80: "217 119 6 / 0.8",

  //   secondary: "245 158 11",
  //   secondary20: "245 158 11 / 0.2",

  //   light: "251 191 36",
  //   light20: "251 191 36 / 0.2",
  // },
  balanced: {
    primary: "124 58 237",          // purple / violet (base)
    primary5: "124 58 237 / 0.05",
    primary10: "124 58 237 / 0.1",
    primary20: "124 58 237 / 0.2",
    primary30: "124 58 237 / 0.3",
    primary40: "124 58 237 / 0.4",
    primary50: "124 58 237 / 0.5",
    primary60: "124 58 237 / 0.6",
    primary80: "124 58 237 / 0.8",

    secondary: "168 85 247",        // lighter purple (accent)
    secondary20: "168 85 247 / 0.2",

    light: "196 181 253",           // soft lavender
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


export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>("balanced")

  useEffect(() => {
    const colors = themeColors[theme]
    const root = document.documentElement

    root.style.setProperty("--theme-primary", colors.primary)
    root.style.setProperty("--theme-primary-5", colors.primary5)
    root.style.setProperty("--theme-primary-10", colors.primary10)
    root.style.setProperty("--theme-primary-20", colors.primary20)
    root.style.setProperty("--theme-primary-30", colors.primary30)
    root.style.setProperty("--theme-primary-40", colors.primary40)
    root.style.setProperty("--theme-primary-50", colors.primary50)
    root.style.setProperty("--theme-primary-60", colors.primary60)
    root.style.setProperty("--theme-primary-80", colors.primary80)

    root.style.setProperty("--theme-secondary", colors.secondary)
    root.style.setProperty("--theme-secondary-20", colors.secondary20)

    root.style.setProperty("--theme-light", colors.light)
    root.style.setProperty("--theme-light-20", colors.light20)
  }, [theme])


  return (
    <ThemeContext.Provider value={{ theme, setTheme, colors: themeColors[theme] }}>
      { children }
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
