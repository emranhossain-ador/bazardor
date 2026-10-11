
export default function ProductDetailsSkeleton() {
    return (
        <div className="mx-auto w-full max-w-6xl animate-pulse px-4 py-6">
            {/* Breadcrumb */}
            <div className="mb-5 flex gap-2">
                <div className="h-3 w-10 rounded bg-base-300" />
                <div className="h-3 w-3 rounded bg-base-300" />
                <div className="h-3 w-24 rounded bg-base-300" />
            </div>

            {/* Product Header */}
            <div className="mb-5 flex items-center justify-between gap-4 rounded-2xl border border-base-300 bg-base-100 p-5">
                <div className="flex min-w-0 items-center gap-4">
                    <div className="h-16 w-16 shrink-0 rounded-xl bg-base-300" />

                    <div className="flex-1 space-y-3">
                        <div className="h-6 w-44 max-w-full rounded bg-base-300" />
                        <div className="h-4 w-28 rounded bg-base-300" />
                        <div className="h-3 w-52 max-w-full rounded bg-base-300" />
                    </div>
                </div>

                <div className="hidden w-24 shrink-0 space-y-2 rounded-xl bg-base-200 p-3 sm:block">
                    <div className="mx-auto h-3 w-16 rounded bg-base-300" />
                    <div className="mx-auto h-6 w-12 rounded bg-base-300" />
                    <div className="mx-auto h-3 w-10 rounded bg-base-300" />
                </div>
            </div>

            {/* Price Summary */}
            <div className="mb-5 rounded-2xl border border-base-300 bg-base-100 p-5">
                <div className="mb-4 h-5 w-36 rounded bg-base-300" />

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div
                            key={index}
                            className="rounded-xl border border-base-300 p-4"
                        >
                            <div className="mb-3 h-3 w-20 rounded bg-base-300" />
                            <div className="mb-2 h-6 w-24 rounded bg-base-300" />
                            <div className="h-3 w-28 max-w-full rounded bg-base-300" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Market Price Table */}
            <div className="rounded-2xl border border-base-300 bg-base-100 p-5">
                <div className="mb-4 h-5 w-44 rounded bg-base-300" />

                <div className="overflow-hidden rounded-xl border border-base-300">
                    {/* Table Header */}
                    <div className="grid grid-cols-4 gap-3 bg-base-200 p-3">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div
                                key={index}
                                className="h-3 rounded bg-base-300"
                            />
                        ))}
                    </div>

                    {/* Table Rows */}
                    {Array.from({ length: 10 }).map((_, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-4 items-center gap-3 border-t border-base-300 p-3"
                        >
                            <div className="h-3 w-full max-w-24 rounded bg-base-300" />
                            <div className="h-3 w-full max-w-20 rounded bg-base-300" />
                            <div className="h-3 w-full max-w-16 rounded bg-base-300" />
                            <div className="ml-auto h-3 w-12 rounded bg-base-300" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
