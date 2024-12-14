import { type ReactNode } from "react"

import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"

import CustomSidebar from "@/components/sidebar/sidebar"
import ThemeToggle from "@/components/theme-toggle"

type SidebarLayoutProps = {
    children?: ReactNode
}

export default function SidebarLayout(props: SidebarLayoutProps) {
    const { children } = props

    return (
        <>
            <CustomSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center justify-between gap-2 px-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                    <SidebarTrigger className="-ml-1" />
                    <ThemeToggle />
                </header>
                {children}
            </SidebarInset>
        </>
    )
}
