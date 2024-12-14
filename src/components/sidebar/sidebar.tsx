"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sidebar, SidebarContent } from "@/components/ui/sidebar"

import NavMain from "@/components/sidebar/nav-main"
import { sidebarNavItems } from "@/components/sidebar/sidebar-nav-items"

export default function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar className="flex h-screen flex-col" {...props}>
            <SidebarContent className="flex flex-col items-center overflow-y-auto p-6">
                <Avatar className="mb-8 h-56 w-56">
                    <AvatarImage className="rounded-full object-cover" src="/profile-picture.jpg" />
                    <AvatarFallback className="text-4xl">SM</AvatarFallback>
                </Avatar>
                <div className="flex w-full flex-col items-center space-y-8">
                    <NavMain groupTitle="Contact" items={sidebarNavItems.contact} />
                    <NavMain groupTitle="Education" items={sidebarNavItems.education} />
                    <NavMain groupTitle="Certifications" items={sidebarNavItems.certifications} />
                    <NavMain groupTitle="Skills" items={sidebarNavItems.skills} />
                </div>
            </SidebarContent>
        </Sidebar>
    )
}
