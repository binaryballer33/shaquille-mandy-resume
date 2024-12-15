import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function SoftwareEngineerExpanded() {
    const skills = [
        "Software Development",
        "Object-Oriented Programming (OOP)",
        "JavaScript Frameworks",
        "TypeScript",
        "Node.js",
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "Microservices",
        "Web Development",
        "User Experience (UX)",
        "User Interface Design",
        "Front-End Development",
        "Back-End Web Development",
        "Spring Framework",
        "Object-Relational Mappers (ORM)",
    ]

    return (
        <div className="mx-auto max-w-3xl p-6">
            <div className="space-y-6">
                <Card>
                    <CardContent className="p-6">
                        <Image alt="Amazon logo" className="rounded" height={48} src="/icon-amazon.webp" width={48} />
                        <div className="flex flex-col gap-4 md:flex-row">
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold">Amazon</h3>
                                <p className="text-muted-foreground">Full-time · 1 yr 8 mos</p>
                                <p className="text-muted-foreground">Seattle, Washington, United States</p>

                                <div className="mt-6 space-y-6 border-muted pl-6 md:border-l-2">
                                    <div>
                                        <h4 className="font-semibold">Software Engineer</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Oct 2022 - Dec 2023 · 1 yr 3 mos
                                        </p>
                                        <p className="mt-2">Worked On Amazon Alexa Smart Home.</p>
                                        <p className="mt-2">
                                            Full Stack engineer. Used Typescript, React / React Native on the frontend.
                                            Used Redux and Thunk for state management. On the backend I used Java and a
                                            Java Spring "like" framework in order to build our backend web service.
                                            Database engine was Amazon DynamoDB. Used many other AWS services on the
                                            daily basis like EC2, ECS, S3, Docker, Pipelines, CodeCommit and many more.
                                        </p>
                                        <p className="mt-2">
                                            I lead a full stack project that gathered "opted in customer" energy
                                            consumption data and used a ML model to help predict where we could save on
                                            electricity / money to help the customer save money and reduce global
                                            warming. I created APIs that would allow our service to be accessed and also
                                            used other services APIs to get the data that I needed. Wrote design
                                            documents, wrote frontend and backend test using jest and junit
                                        </p>
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {skills.map((skill) => (
                                                <Badge key={skill} variant="secondary">
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold">Software Engineer Apprentice</h4>
                                        <p className="text-sm text-muted-foreground">May 2022 - Sep 2022 · 5 mos</p>
                                        <p className="mt-2">TLG Software Development Engineer Bootcamp</p>
                                        <p className="mt-2">
                                            Java Programming Fundamentals and Intermediate: 245 HOURS ( 6 weeks )
                                            Develop a solid foundation, advancing to an intermediate level of coding and
                                            learn to build, test software efficiently with Object-oriented programming
                                            in Java.
                                        </p>
                                        <p className="mt-2">
                                            Java Script, Browser API's, HTML5, CSS3: 140 HOURS ( 3 Weeks ) Learn
                                            fundamental Web Development skills including HTML5, CSS3, JavaScript,
                                            NodeJs, Express, and Mongo/Mongoose while honing independent and team
                                            learning skills through research and problem solving.
                                        </p>
                                        <p className="mt-2">
                                            Customized Intro to Cloud Computing: 40 HOURS ( 1 week ) Learn fundamentals
                                            AWS concepts of compute, database, storage, networking, monitoring, and
                                            security. Learn how to interact with AWS services to build web solutions.
                                        </p>
                                        <p className="mt-2">
                                            Python and Linux: 40 HOURS ( 1 week ) Learn the fundamentals of the Linux
                                            command line, Python and Object-oriented programming.
                                        </p>
                                        <p className="mt-2">240 HOURS ( 6 weeks )</p>
                                        <ul className="ml-6 mt-2 list-disc space-y-1">
                                            <li>Practical Application of Skills</li>
                                            <li>Version control, branching and application lifecycle management</li>
                                            <li>Unit testing, architecting for testability and manual testing</li>
                                            <li>Automated build and deployment pipelines</li>
                                            <li>Project delivery through test and into production</li>
                                        </ul>
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
