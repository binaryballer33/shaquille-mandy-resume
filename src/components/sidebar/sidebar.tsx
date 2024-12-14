"use client"

import { Sidebar, SidebarContent } from "@/components/ui/sidebar"

import CustomSidebarGroup from "@/components/sidebar/sidebar-group"
import { sidebarNavItems } from "@/components/sidebar/sidebar-nav-items"

import SidebarAvatar from "./sidebar-avatar"

export default function CustomSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar {...props}>
            <SidebarContent className="flex flex-col items-center overflow-y-auto p-6">
                <SidebarAvatar />
                <div className="flex w-full flex-col items-center space-y-8">
                    <CustomSidebarGroup groupTitle="Contact" items={sidebarNavItems.contact} />
                    <CustomSidebarGroup groupTitle="Education" items={sidebarNavItems.education} />
                    <CustomSidebarGroup groupTitle="Certifications" items={sidebarNavItems.certifications} />
                    <CustomSidebarGroup groupTitle="Skills" items={sidebarNavItems.skills} />
                </div>
            </SidebarContent>
        </Sidebar>
    )
}
