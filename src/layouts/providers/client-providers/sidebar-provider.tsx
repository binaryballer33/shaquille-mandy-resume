import { SidebarProvider } from "@/components/ui/sidebar"

export default function ClientSidebarProvider({ children }: { children: React.ReactNode }) {
    const styles = {
        "--sidebar-width": "30rem",
        "--sidebar-width-mobile": "30rem",
    } as React.CSSProperties

    return <SidebarProvider style={styles}>{children}</SidebarProvider>
}
