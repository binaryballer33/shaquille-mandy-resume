import type { ReactNode } from "react"

import Providers from "@/layouts/providers/providers-layout"
import SidebarLayout from "@/layouts/sidebar-layout"

import { appMetadata } from "@/lib/config"

export const metadata = appMetadata.homePage

type LayoutProps = {
    children: ReactNode
}

export default async function Layout({ children }: LayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <Providers>
                    <SidebarLayout>{children}</SidebarLayout>
                </Providers>
            </body>
        </html>
    )
}
