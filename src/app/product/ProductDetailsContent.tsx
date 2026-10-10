import ItemPriceDetailsPage from "@/components/ItemPriceDetails";
import Link from "next/link";
import { ProductType } from "../ProductType";
import { notFound } from "next/navigation";

export default async function ProductDetailsContent({ params }: { params: Promise<{ productid: string }> }) {
    const { productid } = await params;

    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products/${productid}`);

    if (!res.ok) {
        notFound();
    }

    const product: ProductType = await res.json();

    if (!product) {
        notFound();
    }


    return (
        <section className="space-y-8">
            <nav aria-label="ব্রেডক্রাম্ব" className="breadcrumbs text-sm">
                <ul>
                    <li className="text-base font-semibold text-foreground/90 hover:text-primary">
                        <Link href="/">হোম</Link>
                    </li>

                    <li className="text-base font-semibold text-foreground/90 hover:text-primary">
                        <Link href={`/category/${product.category}`}>
                            {product.categoryNameBn}
                        </Link>
                    </li>

                    <li className="text-base font-semibold text-foreground/90">
                        {product.nameBn}
                    </li>
                </ul>
            </nav>

            <header className="rounded-2xl border border-base-300 bg-base-100 p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <span className="grid size-20 shrink-0 place-items-center rounded-2xl bg-base-200 text-4xl">
                        {product.categoryIcon}
                    </span>
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold sm:text-3xl">
                            {product.nameBn}
                        </h1>
                        <p className="text-sm text-base-content/70">
                            প্রতি {product.unit} · {product.categoryNameBn}
                        </p>
                        <p className="mt-2 text-sm text-base-content/70">
                            গতকালের তুলনায় আজ দাম{" "}
                            <span className={`font-semibold ${product?.change?.dir === "up" ? "price-up" : "price-down"}`}>
                                {product?.change?.dir === "up" ? "বেড়েছে" : "কমেছে"} {product?.change?.pct}%
                            </span>
                        </p>
                    </div>

                    <div className="rounded-box bg-base-200 px-5 py-4 text-center">
                        <p className="text-sm text-base-content/70">আজকের দাম</p>
                        <p className="text-3xl font-bold">{product.today}</p>
                        <p className="text-sm text-base-content/70">টাকা / কেজি</p>
                        <span className={`inline-flex items-center gap-1 text-sm font-semibold ${product?.change?.dir === "up" ? "price-up" : "price-down"}`}>
                            <span aria-hidden="true">{product?.change?.dir === "up" ? "▲" : "▼"}</span>
                            <span>{product?.change?.pct}%</span>
                        </span>
                    </div>
                </div>
            </header>

            <ItemPriceDetailsPage product={product} />

            <div className="flex flex-wrap gap-2">
                <Link href={`/category/${product.category}`} className="btn btn-ghost md:text-lg">
                    {product.categoryIcon} {product.categoryNameBn}
                </Link>
            </div>
        </section>
    );
}