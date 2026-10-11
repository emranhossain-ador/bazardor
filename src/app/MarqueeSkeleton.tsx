
export default function MarqueeSkeleton() {
    return (
        <div className="w-full overflow-hidden border-y border-base-300 bg-base-100">
            <div className="flex w-max animate-pulse">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div
                        key={index}
                        className="flex h-10 shrink-0 items-center gap-3 border-r border-base-300 px-4"
                    >
                        {/* Product icon */}
                        <div className="h-5 w-5 rounded-full bg-base-300" />

                        {/* Product name */}
                        <div className="h-4 w-28 rounded bg-base-300" />

                        {/* Price */}
                        <div className="h-4 w-20 rounded bg-base-300" />

                        {/* Price change */}
                        <div className="h-4 w-12 rounded bg-base-300" />
                    </div>
                ))}
            </div>
        </div>
    );
}