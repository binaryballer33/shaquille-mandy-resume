import AboutMe from "./blocks/about-me"
import Header from "./blocks/header"
import Misc from "./blocks/misc"
import WorkExperience from "./blocks/work-experience"

export default function Resume() {
    return (
        <div className="w-full space-y-8 p-8">
            <Header />
            <AboutMe />
            <WorkExperience />
            <Misc />
        </div>
    )
}
