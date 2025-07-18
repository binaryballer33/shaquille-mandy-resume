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
                    "As a key contributor within the Alexa Smart Home organization, I specialized in the energy consumption component of the service. My full-stack expertise spanned both front-end and back-end services for the Alexa Smart Home mobile application, leveraging technologies such as React, React Native, TypeScript, Java, and AWS. My work directly supported the global initiative to reduce electricity consumption, significantly contributing to the company's efforts in mitigating global warming impact and saving the customer money on their electric bill.",
                duration: "May 2022 - Dec 1, 2023",
                icon: "/icon-amazon.webp",
                title: JobTitle.SOFTWARE_ENGINEER,
            },
            {
                company: "Amazon Web Services (AWS)",
                description:
                    "As an engineer, I was responsible for enhancing the reliability and efficiency of critical software delivery pipelines. I diagnosed and resolved deployment failures across over 20 CI/CD pipelines, implementing targeted code changes and developing automation scripts to eliminate repetitive manual tasks. My efforts directly contributed to maintaining high availability for supported services, ensuring minimal downtime. I actively collaborated with fellow software engineers and participated in a 10-person on-call rotation for the AWS BuilderTools organization. My technical expertise frequently involved services such as CloudFormation, CodeDeploy, CodeCommit, CodeBuild, CodePipeline, RDS, DynamoDB, SWF, and SQS.",
                duration: "October 2021 - May 2022",
                icon: "/icon-aws.webp",
                title: JobTitle.SITE_RELIABILITY_ENGINEER,
            },
            {
                company: "Amazon Web Services (AWS)",
                description:
                    "My role involved providing advanced technical support to AWS customers, utilizing our ticketing system to diagnose and resolve complex resource-related issues. I focused on root cause analysis, guiding customers through effective solutions and enhancing their operational proficiency within the AWS ecosystem. My expertise encompassed a broad range of AWS services, including EC2, IAM, S3, VPC, KMS, CloudWatch, CloudTrail, and Route 53, among others.",
                duration: "July 2021 to October 2021",
                icon: "/icon-aws.webp",
                title: JobTitle.CLOUD_SUPPORT_ENGINEER,
            },
            {
                company: "U.S. Air Force",
                description:
                    "My responsibilities included the sustained availability and security of critical network infrastructure for a workforce exceeding 10,000 military and civilian personnel, up to the Top-Secret SCI classification. I was instrumental in ensuring authorized access while meticulously safeguarding the integrity of our systems. My expertise spans a range of technologies, including TACLANES, Cisco/Juniper routing and switching platforms, VoIP systems, network printers, Identity and Access Management (IAM) solutions, and various end-user and server-side hardware.",
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
