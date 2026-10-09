import Link from "next/link"
import type { ProductType } from "@/app/ProductType";

interface ItemCardProps {
    product: ProductType;
}

const Itemcard = ({ product }: ItemCardProps) => {
    return (
        <Link href={`/product/${product.id}`} className="card border border-base-300 bg-base-100 transition hover:border-primary hover:shadow-md focus-visible:outline-2 focus-visible:outline-primary">
            <div className="card-body gap-3 p-4">
                <div className="flex items-start gap-3">
                    <span aria-hidden="true" className="grid size-14 shrink-0 place-items-center rounded-xl bg-base-200 text-3xl">{product.categoryIcon}</span>
                    <div className="min-w-0">
                        <h3 className="truncate text-lg text-foreground font-semibold">{product.nameBn}</h3>
                        <p className="text-sm text-base-content/60">প্রতি {product.unit}</p>
                    </div>
                </div>
                <div className="flex items-end justify-between gap-2">
                    <div>
                        <p className="text-sm text-base-content/80">আজকের দাম</p>
                        <p className="text-xl font-bold text-foreground">{product.today} <span className="text-sm font-medium">টাকা</span></p>
                    </div>
                    <span className={`inline-flex items-center gap-1 rounded-full bg-base-200 px-2 py-1 text-xs font-semibold ${product.change.dir === "up" ? "price-up" : "price-down"}`}>
                        <span aria-hidden="true">{product.change.dir === "up" ? "▲" : "▼"}</span>{product.change.pct}%
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default Itemcard;