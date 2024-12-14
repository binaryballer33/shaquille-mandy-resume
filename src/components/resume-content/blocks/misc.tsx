import SectionTitle from "../section-tiitle"

export default function Misc() {
    return (
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
                <SectionTitle title="WORK IN PROGRESS" />
                <ol className="list-inside list-decimal space-y-2">
                    <li>AI / ML Skills Development</li>
                    <li>AWS Developer Associate Certification</li>
                    <li>AWS DevOps Engineer Certification</li>
                    <li>Offensive Security Certified Professional ( OSCP )</li>
                </ol>
            </div>

            <div>
                <SectionTitle title="LANGUAGES" />
                <ul className="space-y-2">
                    <li>English ( Fluent )</li>
                    <li>Spanish ( Intermediate 6.5 / 10 )</li>
                    <li>Portuguese ( Intermediate 6 / 10 )</li>
                </ul>
            </div>
        </section>
    )
}
