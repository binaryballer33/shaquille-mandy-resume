import type { LucideIcon } from "lucide-react"

import { Book, Github, Globe, Linkedin, Mail, Phone } from "lucide-react"

export type SidebarNavItems = {
    certifications: {
        highlight?: boolean
        icon: LucideIcon
        link: string
        title: string
    }[]
    contact: {
        highlight?: boolean
        icon: LucideIcon
        link: string
        title: string
    }[]
    education: {
        dateAttendedUniversity: string
        degreeAwarded: string
        highlight?: boolean
        icon: LucideIcon
        link: string
        title: string
    }[]
    skills: {
        highlight?: boolean
        icon: LucideIcon
        knowledge: string
        link: string
        title: string
    }[]
}

export const sidebarNavItems: SidebarNavItems = {
    certifications: [
        {
            highlight: true,
            icon: Book,
            link: "#",
            title: "CISSP, CASP+",
        },
        {
            icon: Book,
            link: "#",
            title: "Pentest+, CySA+, CEH",
        },
        {
            icon: Book,
            link: "#",
            title: "Linux+, CCNA",
        },
        {
            highlight: true,
            icon: Book,
            link: "#",
            title: "AWS Solutions Architect Associate",
        },
        {
            icon: Book,
            link: "#",
            title: "ITIL, Project+",
        },
    ],
    contact: [
        {
            highlight: true,
            icon: Phone,
            link: "tel:+1813-816-8615",
            title: "+1 813-816-8615 ( Primary )",
        },
        {
            icon: Phone,
            link: "tel:+1669-777-6620",
            title: "+1 669-777-6620 ( Alternate )",
        },
        {
            highlight: true,
            icon: Mail,
            link: "mailto:shaqmandy@gmail.com",
            title: "shaqmandy@gmail.com",
        },
        {
            icon: Github,
            link: "https://github.com/binaryballer33",
            title: "github.com/binaryballer33",
        },
        {
            icon: Linkedin,
            link: "https://www.linkedin.com/in/shaquille-mandy-525079111",
            title: "linkedin.com/in/shaquille-mandy",
        },
        {
            highlight: true,
            icon: Globe,
            link: "https://www.shaquillemandy.com",
            title: "shaquillemandy.com ( website )",
        },
    ],
    education: [
        {
            dateAttendedUniversity: "November 2022 - April 2023",
            degreeAwarded: "M.S Cybersecurity & Information Assurance",
            highlight: true,
            icon: Book,
            link: "https://www.wgu.edu/online-it-degrees/cybersecurity-information-assurance-masters-program.html",
            title: "Western Governors University",
        },
        {
            dateAttendedUniversity: "September 2018 - September 2022",
            degreeAwarded: "B.S Information Technology",
            icon: Book,
            link: "https://www.wgu.edu/online-it-degrees/information-technology-bachelors-program.html",
            title: "Western Governors University",
        },
        {
            dateAttendedUniversity: "May 2022 - October 2022",
            degreeAwarded: "Software Engineer",
            icon: Book,
            link: "https://www.tlgitcareers.com/software-development-engineer-sde/",
            title: "TLG Software Engineer Bootcamp",
        },
        {
            dateAttendedUniversity: "September 2022 - April 2023",
            degreeAwarded: "Software Engineer",
            icon: Book,
            link: "https://www.fullstackacademy.com/programs/coding-bootcamp",
            title: "Fullstack Academy Bootcamp",
        },
    ],
    skills: [
        {
            icon: Book,
            knowledge: "Linux, Networking, Security, AWS, CICD, Cloud, CDK, IaaC",
            link: "#",
            title: "Infra:",
        },
        {
            icon: Book,
            knowledge: "System Design, Data Structures and Algorithms, SQL, DBMS",
            link: "#",
            title: "General Knowledge",
        },
        {
            icon: Book,
            knowledge: "Git, Github, Jira, Kanban, Agile",
            link: "#",
            title: "Team Collaboration",
        },
        {
            highlight: true,
            icon: Book,
            knowledge: "Java, Typescript / Javascript, Python, Ruby, Bash, C++",
            link: "#",
            title: "Languages",
        },
        {
            highlight: true,
            icon: Book,
            knowledge:
                "HTML, CSS, Jquery, React, React Native, Material UI, ShadCN, Tailwind, Bootstrap, NextJs, CSR, SSR",
            link: "#",
            title: "Frontend Skills",
        },
        {
            highlight: true,
            icon: Book,
            knowledge:
                "DB Queries, ORM, SQL, Authentication, Authorization, Payments, RestApis ( In Any Language / Framework ): Java Spring, Flask, Django, Node, C#, etc",
            link: "#",
            title: "Backend Skills",
        },
    ],
}

export const workExperience = [
    {
        company: "Amazon",
        date: "May 2022 - Dec 1, 2023",
        title: "Software Engineer",
    },
]
