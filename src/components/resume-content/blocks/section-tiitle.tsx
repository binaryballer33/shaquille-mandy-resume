type SectionTitleProps = {
    title: string
}

export default function SectionTitle(props: SectionTitleProps) {
    const { title } = props

    return <h2 className="mb-4 text-3xl font-bold text-blue-900 dark:text-blue-400 max-sm:text-center">{title}</h2>
}
