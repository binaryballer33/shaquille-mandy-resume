"use client"

import Link from "next/link"

import { SidebarGroup, SidebarGroupLabel } from "@/components/ui/sidebar"

import { Separator } from "../ui/separator"

type NavMainProps = {
    groupTitle: string
    items: any[]
}

export default function NavMain(props: NavMainProps) {
    const { groupTitle, items } = props

    return (
        <SidebarGroup className="w-full">
            <SidebarGroupLabel className="mb-2 text-center text-3xl">{groupTitle}</SidebarGroupLabel>
            <Separator className="mb-4 bg-gray-200" />
            <div className="flex flex-col space-y-2">
                {items.map((item, index) => (
                    <div className="text-gray-300" key={`${item.title}-${index}`}>
                        <div>
                            <Link
                                className="flex items-center gap-2 transition-colors hover:text-white"
                                href={item.link}
                            >
                                <item.icon className="h-5 w-5" />
                                <span className={item.highlight ? "text-yellow-500" : ""}>{item.title}</span>
                            </Link>

                            {item.dateAttendedUniversity && <UniversityInfo item={item} />}
                            {item.knowledge && <SkillInfo item={item} />}
                        </div>
                    </div>
                ))}
            </div>
        </SidebarGroup>
    )
}

type InfoProps = {
    item: any
}

function UniversityInfo(props: InfoProps) {
    const { item } = props

    return (
        <ul className="ml-7 mt-1 text-sm text-gray-400">
            <li>{item.degreeAwarded}</li>
            <li>{item.dateAttendedUniversity}</li>
        </ul>
    )
}

function SkillInfo(props: InfoProps) {
    const { item } = props

    return (
        <ul className="ml-7 mt-1 text-sm text-gray-400">
            <li>{item.knowledge}</li>
        </ul>
    )
}
