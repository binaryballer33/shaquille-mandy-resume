import Image from "next/image"

import { Briefcase } from "lucide-react"

import SectionTitle from "../section-tiitle"
import SectionSeparator from "./section-separator"
import { useWorkExperience } from "./use-resume-content"

export default function WorkExperience() {
    const { workExperience } = useWorkExperience()

    return (
        <section>
            <SectionTitle title="WORK EXPERIENCE" />
            <div className="space-y-8">
                {workExperience.map((experience, index) => (
                    <div className="space-y-2" key={`${experience.title}-${index}`}>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                {experience.icon ? (
                                    <Image
                                        alt={experience.company}
                                        className="rounded-lg object-contain dark:bg-white"
                                        height={40}
                                        src={experience.icon}
                                        width={40}
                                    />
                                ) : (
                                    <Briefcase className="h-10 w-10 text-blue-600" />
                                )}
                                <div>
                                    <h3 className="text-xl font-semibold text-blue-600">{experience.title}</h3>
                                    <p className="text-sm text-gray-600">{experience.company}</p>
                                </div>
                            </div>
                            <span className="text-gray-600">{experience.duration}</span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">{experience.description}</p>
                    </div>
                ))}
            </div>
            <SectionSeparator />
        </section>
    )
}
