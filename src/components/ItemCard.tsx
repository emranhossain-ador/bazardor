import Link from "next/link"

const Itemcard = () => {
    return (
        <Link href="/product" className="card border border-base-300 bg-base-100 transition hover:border-primary hover:shadow-md focus-visible:outline-2 focus-visible:outline-primary">
            <div className="card-body gap-3 p-4">
                <div className="flex items-start gap-3">
                    <span aria-hidden="true" className="grid size-14 shrink-0 place-items-center rounded-xl bg-base-200 text-3xl">🧅</span>
                    <div className="min-w-0">
                        <h3 className="truncate text-lg text-foreground font-semibold">পেঁয়াজ</h3>
                        <p className="text-sm text-base-content/60">প্রতি কেজি</p>
                    </div>
                </div>
                <div className="flex items-end justify-between gap-2">
                    <div>
                        <p className="text-sm text-base-content/80">আজকের দাম</p>
                        <p className="text-xl font-bold text-foreground">৫৪ <span className="text-sm font-medium">টাকা</span></p>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-base-200 px-2 py-1 text-xs font-semibold price-up">
                        <span aria-hidden="true">▲</span>১২.৫%
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default Itemcard;