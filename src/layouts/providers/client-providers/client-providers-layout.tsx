"use client"

import { type ReactNode } from "react"

import SidebarProvider from "@/layouts/providers/client-providers/sidebar-provider"
import ThemeProvider from "@/layouts/providers/client-providers/theme-provider"

type LayoutProps = {
    children: ReactNode
}

export default function ClientProviders({ children }: LayoutProps) {
    return (
        <ThemeProvider>
            <SidebarProvider>{children}</SidebarProvider>
        </ThemeProvider>
    )
}
