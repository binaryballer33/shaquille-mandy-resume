import { useMemo } from "react"

import CloudSupportEngineerExpanded from "./work-experience/cloud-support-engineer-expanded"
import NetworkAdministratorExpanded from "./work-experience/network-administrator-expanded"
import SiteReliabilityEngineerExpanded from "./work-experience/site-reliability-engineer-expanded"
import SoftwareEngineerExpanded from "./work-experience/software-engineer-expanded"

enum JobTitle {
    CLOUD_SUPPORT_ENGINEER = "Cloud Support Engineer",
    NETWORK_ADMINISTRATOR = "Network Administrator",
    SITE_RELIABILITY_ENGINEER = "Site Reliability Engineer",
    SOFTWARE_ENGINEER = "Software Engineer",
}

type ExpandedComponentsMap = {
    [K in JobTitle]: React.ComponentType
}

const EXPANDED_COMPONENTS: ExpandedComponentsMap = {
    [JobTitle.CLOUD_SUPPORT_ENGINEER]: CloudSupportEngineerExpanded,
    [JobTitle.NETWORK_ADMINISTRATOR]: NetworkAdministratorExpanded,
    [JobTitle.SITE_RELIABILITY_ENGINEER]: SiteReliabilityEngineerExpanded,
    [JobTitle.SOFTWARE_ENGINEER]: SoftwareEngineerExpanded,
}

export function useWorkExperience() {
    const workExperience = useMemo(
        () => [
            {
                company: "Amazon",
                description:
                    "As a member of the Alexa Smart Home organization, I supported the energy consumption component of the service. Technologies that my team used included React Native, TypeScript, Java, AWS, etc. I worked across the full stack for Alexa Smart Home touching both front and back-end services involved in making the Alexa Smart Home mobile app work. Supported the company in helping to reduce the impact of global warming by reducing electricity consumption on a global scale.",
                duration: "May 2022 - Dec 1, 2023",
                icon: "/icon-amazon.webp",
                title: JobTitle.SOFTWARE_ENGINEER,
            },
            {
                company: "Amazon Web Services (AWS)",
                description:
                    "I root caused deployment failures across 20+ pipelines, made code changes to fix the failures and scripts to automate repetitive tasks, created/updated documentation, and more. I worked with other Software Engineers daily to ensure that the services I supported continued to run with minimal downtime. I participated in an on-call rotation of 10 engineers that supported the AWS BuilderTools organization. Services I worked with included CloudFormation, CodeDeploy, CodeCommit, CodeBuild, CodePipeline, RDS, DynamoDB, SWF, and SOS.",
                duration: "October 2021 - May 2022",
                icon: "/icon-aws.webp",
                title: JobTitle.SITE_RELIABILITY_ENGINEER,
            },
            {
                company: "Amazon Web Services (AWS)",
                description:
                    "I troubleshoot customer cases in our ticketing system to determine the root cause of their problem. I provided support and advice to help AWS customers fix their AWS resources and improve their current level of knowledge about the AWS platform. Services I worked with included EC2, IAM, S3, VPC, KMS, CloudWatch, CloudTrail, Route53, and many more.",
                duration: "July 2021 to October 2021",
                icon: "/icon-aws.webp",
                title: JobTitle.CLOUD_SUPPORT_ENGINEER,
            },
            {
                company: "U.S. Air Force",
                description:
                    "I maintained our network's critical infrastructure and provided IT support to our 10,000+ military and civilian workforce up to the Top-Secret SCI level. I ensured our infrastructure was always secure, available, and accessible by authorized personnel. Technologies I have experience with include TACLANES, Cisco/Juniper routers/switches, VoIP, printers, IAM, desktops, laptops, servers, etc.",
                duration: "August 2017 - June 2021",
                icon: "/icon-us-air-force.webp",
                title: JobTitle.NETWORK_ADMINISTRATOR,
            },
        ],
        [],
    )

    function getExpandedWorkExperience(jobTitle: JobTitle) {
        const ExpandedComponent = EXPANDED_COMPONENTS[jobTitle]
        return ExpandedComponent ? <ExpandedComponent /> : null
    }

    return { getExpandedWorkExperience, workExperience }
}

export function useAboutMe() {
    const aboutMe = useMemo(
        () => ({
            favoriteFood: "Pasta of some sort, BBQ, Sushi",
            greeting: "Hello, I'm Shaquille Mandy,",
            interestingFact: "I can solve a Rubix Cube in under 20 seconds, best time 11 seconds and I'm left handed.",
            intro: "I would like to take this time to tell you a little bit about myself, just to put a little life behind this paper or computer screen.",
            music: "J Cole, Drake, Luke Combs, Karol G, Ozuna, Rauw Alejandro",
            passions: "Traveling, basketball, drawing, nature, swimming, FOOD, coding",
            personality: "Relaxed, easy going, extroverted when the time calls for it",
        }),
        [],
    )

    return { aboutMe }
}
