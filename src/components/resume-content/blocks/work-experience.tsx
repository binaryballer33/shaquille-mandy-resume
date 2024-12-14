import Image from "next/image"

import { Briefcase } from "lucide-react"

import SectionSeparator from "./section-separator"
import SectionTitle from "./section-tiitle"
import { useWorkExperience } from "./use-resume-content"

export default function WorkExperience() {
    const { workExperience } = useWorkExperience()

    return (
        <section>
            <SectionTitle title="WORK EXPERIENCE" />
            <div className="space-y-8">
                {workExperience.map((experience, index) => (
                    <div className="my-4 space-y-2" key={`${experience.title}-${index}`}>
                        <div className="flex items-center justify-between">
                            <div className="flex w-full items-center max-sm:flex-col sm:gap-4">
                                {experience.icon ? (
                                    <Image
                                        alt={experience.company}
                                        className="rounded-lg object-contain dark:bg-white"
                                        height={40}
                                        priority
                                        src={experience.icon}
                                        width={40}
                                    />
                                ) : (
                                    <Briefcase className="h-10 w-10 text-blue-600" />
                                )}
                                <div className="flex flex-1 flex-col">
                                    <h3 className="text-xl font-semibold text-blue-600">{experience.title}</h3>
                                    <p className="text-sm text-gray-600 max-sm:invisible">{experience.company}</p>
                                </div>
                                <span className="text-yellow-700">{experience.duration}</span>
                            </div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">{experience.description}</p>
                    </div>
                ))}
            </div>
            <SectionSeparator />
        </section>
    )
}
