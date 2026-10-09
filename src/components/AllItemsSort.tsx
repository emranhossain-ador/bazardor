"use client";

import { ProductType } from "@/app/ProductType";
import Itemcard from "./ItemCard";
import { useState } from "react";

interface AllItemsSortProps {
    products: ProductType[]
}

const AllItemsSort = ({ products }: AllItemsSortProps) => {

    const [sort, setSort] = useState<"default" | "price-asc" | "price-desc">("default");

    const getSortedProducts = () => {

        if (sort === "price-asc") {
            return [...products.sort((a, b) => a.today - b.today)];
        } else if (sort === "price-desc") {
            return [...products.sort((a, b) => b.today - a.today)];
        }
        return products;
    }

    const sortedProducts = getSortedProducts();

    return (<>
        <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-base text-foreground/80">মোট {products.length}টি পণ্য দেখানো হচ্ছে</p>
            <div className="flex items-center gap-2">
                <label className="text-base text-foreground/80">সাজান</label>
                <select id="sort-products"
                    value={sort}
                    onChange={(e) => { setSort(e.target.value as "default" | "price-asc" | "price-desc") }}
                    className="select select-bordered select-sm text-base md:text-lg select-primary">
                    <option value="default">ডিফল্ট</option>
                    <option value="price-asc">দাম: কম থেকে বেশি</option>
                    <option value="price-desc">দাম: বেশি থেকে কম</option>
                </select>
            </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sortedProducts.map((product) => (
                <Itemcard key={product.id} product={product} />
            ))}
        </div>
    </>)
}

export default AllItemsSort;