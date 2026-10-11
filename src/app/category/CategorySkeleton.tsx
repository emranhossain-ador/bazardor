
export default function CategorySkeleton() {
    return (
        <section className="mx-auto w-full max-w-6xl animate-pulse px-4 py-6">
            {/* Category Header */}
            <div className="mb-8 flex items-center gap-5 rounded-3xl border border-base-300 bg-base-100 p-6 sm:p-8">
                <div className="h-16 w-16 shrink-0 rounded-2xl bg-base-300" />

                <div className="flex-1 space-y-3">
                    <div className="h-7 w-32 rounded-lg bg-base-300" />
                    <div className="h-4 w-56 max-w-full rounded bg-base-300" />
                </div>
            </div>

            {/* Count and Sort */}
            <div className="mb-8 flex items-center justify-between gap-4">
                <div className="h-5 w-40 rounded bg-base-300" />
                <div className="h-10 w-24 rounded-xl bg-base-300" />
            </div>

            {/* Product Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div
                        key={index}
                        className="rounded-2xl border border-base-300 bg-base-100 p-5"
                    >
                        {/* Product name and icon */}
                        <div className="mb-5 flex items-center gap-4">
                            <div className="h-16 w-16 shrink-0 rounded-2xl bg-base-300" />

                            <div className="flex-1 space-y-3">
                                <div className="h-5 w-32 max-w-full rounded bg-base-300" />
                                <div className="h-4 w-16 rounded bg-base-300" />
                            </div>
                        </div>

                        {/* Price */}
                        <div className="space-y-3">
                            <div className="h-4 w-24 rounded bg-base-300" />

                            <div className="flex items-center justify-between gap-3">
                                <div className="h-7 w-28 rounded bg-base-300" />
                                <div className="h-8 w-20 rounded-full bg-base-300" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
