import ItemPriceDetailsPage from "@/components/ItemPriceDetails";
import Link from "next/link"

const ProductDetailsPage = () => {
    return (
        <section className="space-y-8">
            <nav aria-label="ব্রেডক্রাম্ব" className="breadcrumbs text-sm">
                <ul>
                    <li className="text-base font-semibold text-foreground/90 hover:text-primary"><Link href="/">হোম</Link></li>
                    <li className="text-base font-semibold text-foreground/90 hover:text-primary"><Link href="/category/sobji">সবজি</Link></li>
                    <li className="text-base font-semibold text-foreground/90">কাঁচামরিচ</li>
                </ul>
            </nav>


            <header className="rounded-2xl border border-base-300 bg-base-100 p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <span aria-hidden="true" className="grid size-20 shrink-0 place-items-center rounded-2xl bg-base-200 text-4xl">🌶️</span>
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold sm:text-3xl">কাঁচামরিচ</h1>
                        <p className="text-sm text-base-content/70">প্রতি কেজি · সবজি</p>
                        <p className="mt-2 text-sm text-base-content/70">গতকালের তুলনায় আজ দাম <span className="font-semibold">কমেছে</span> ১২.৪%</p>
                    </div>
                    <div className="rounded-box bg-base-200 px-5 py-4 text-center">
                        <p className="text-sm text-base-content/70">আজকের দাম</p>
                        <p className="text-3xl font-bold">৯২</p>
                        <p className="text-sm text-base-content/70">টাকা / কেজি</p>
                        <span className="inline-flex items-center gap-1 font-semibold text-success text-sm" title="কমেছে"><span aria-hidden="true">▼</span><span>১২.৪%</span></span>
                    </div>
                </div>
            </header>

            <ItemPriceDetailsPage />



            <div className="flex flex-wrap gap-2">
                <Link href="/category/sobji" className="btn btn-ghost">🥬 সব সবজি</Link>
            </div>

        </section>
    )
}

export default ProductDetailsPage
