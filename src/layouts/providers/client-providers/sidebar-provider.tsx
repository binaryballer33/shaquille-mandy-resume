import { type ReactNode } from "react"

import { SidebarProvider as ShadcnSidebarProvider } from "@/components/ui/sidebar"

type SidebarProviderProps = {
    children: ReactNode
}

export default function SidebarProvider(props: SidebarProviderProps) {
    const { children } = props

    return (
        <ShadcnSidebarProvider
            style={{
                // manually set the sidebar width here
                "--sidebar-width": "30rem",
                "--sidebar-width-mobile": "30rem",
            }}
        >
            {children}
        </ShadcnSidebarProvider>
    )
}
