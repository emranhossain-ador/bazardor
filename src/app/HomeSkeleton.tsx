
type HomeSkeletonProps = {
    title?: boolean;
};

export default function HomeSkeleton({
    title = true,
}: HomeSkeletonProps) {
    return (
        <section className="animate-pulse space-y-4">
            {/* Section heading */}
            {title && (
                <div className="h-7 w-48 rounded-lg bg-base-300" />
            )}

            {/* Product cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div
                        key={index}
                        className="rounded-2xl border border-base-300 bg-base-100 p-4"
                    >
                        {/* Product icon and name */}
                        <div className="mb-5 flex items-center gap-3">
                            <div className="h-14 w-14 shrink-0 rounded-xl bg-base-300" />

                            <div className="flex-1 space-y-2">
                                <div className="h-5 w-28 max-w-full rounded bg-base-300" />
                                <div className="h-4 w-16 rounded bg-base-300" />
                            </div>
                        </div>

                        {/* Price label */}
                        <div className="mb-2 h-4 w-24 rounded bg-base-300" />

                        {/* Price and percentage badge */}
                        <div className="flex items-center justify-between gap-3">
                            <div className="h-6 w-20 rounded bg-base-300" />
                            <div className="h-6 w-16 rounded-full bg-base-300" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
