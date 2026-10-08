
interface Props {
    title: string;
    isPriceDown: boolean;
}

const SectionHeader = ({ title, isPriceDown }: Props) => {
    return (
        <div className="mb-3 flex items-center gap-2">
            <span aria-hidden="true" className={isPriceDown ? "text-error" : "text-success"}>
                {isPriceDown ? "▲" : "▼"}
            </span>
            <h2 className="text-xl lg:text-2xl font-bold">{title}</h2>
        </div>
    )
}

export default SectionHeader;