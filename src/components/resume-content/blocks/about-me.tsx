import SectionTitle from "./section-tiitle"
import SectionSeparator from "./section-separator"
import { useAboutMe } from "./use-resume-content"

export default function AboutMe() {
    const { aboutMe } = useAboutMe()

    return (
        <section>
            <SectionTitle title="ABOUT ME" />
            <div className="space-y-4">
                <p>{aboutMe.greeting}</p>
                <p>{aboutMe.intro}</p>
                <div className="space-y-2">
                    <p>
                        <span className="font-semibold">Passions:</span> {aboutMe.passions}
                    </p>
                    <p>
                        <span className="font-semibold">Personality:</span> {aboutMe.personality}
                    </p>
                    <p>
                        <span className="font-semibold">Favorite Food:</span> {aboutMe.favoriteFood}
                    </p>
                    <p>
                        <span className="font-semibold">Music:</span> {aboutMe.music}
                    </p>
                    <p>
                        <span className="font-semibold">Interesting Fact:</span> {aboutMe.interestingFact}
                    </p>
                </div>
            </div>
            <SectionSeparator />
        </section>
    )
}
