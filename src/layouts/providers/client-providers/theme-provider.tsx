"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"

import "@/global.css"

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <NextThemesProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            value={{ dark: "dark", light: "light", system: "system" }}
        >
            <div className="flex min-h-screen">{children}</div>
        </NextThemesProvider>
    )
}
