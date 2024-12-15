import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function SiteReliabilityEngineerExpanded() {
    const skills = [
        "Spring Framework",
        "Object-Relational Mappers (ORM)",
        "PostgreSQL",
        "DevOps",
        "Amazon Web Services (AWS)",
        "S3",
        "EC2",
        "ECS",
        "Docker",
        "Pipelines",
        "CodeCommit",
        "Route 53",
        "CloudFront",
        "CloudWatch",
        "CloudTrail",
        "IAM",
        "RDS",
        "DynamoDB",
        "SNS",
        "SQS",
        "SES",
        "S3",
        "Ruby",
        "TypeScript",
        "Node.js",
        "Java",
        "Spring Boot",
        "Microservices",
        "Continuous Integration and Continuous Delivery (CI/CD)",
    ]

    return (
        <div className="mx-auto max-w-3xl p-6">
            <div className="space-y-6">
                <Card>
                    <CardContent className="p-6">
                        <Image alt="Amazon logo" className="rounded" height={48} src="/icon-aws.webp" width={48} />
                        <div className="flex flex-col gap-4 md:flex-row">
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold">Amazon</h3>
                                <p className="text-muted-foreground">Oct 2021 to May 2022 · 8 mos</p>
                                <p className="text-muted-foreground">Seattle, Washington, United States</p>

                                <div className="mt-6 space-y-6 border-muted pl-6 md:border-l-2">
                                    <div>
                                        <h4 className="font-semibold">Skills Obtained</h4>
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {skills.map((skill) => (
                                                <Badge key={skill} variant="secondary">
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
