"use client";

import { useState } from "react";
import { ProductType } from "../ProductType";
import Itemcard from "@/components/ItemCard";

interface CategoryItemsSortProps {
    catItems: ProductType[];
}


const CategoryItemsSort = ({ catItems }: CategoryItemsSortProps) => {

    const [sortByPrice, setSort] = useState<'default' | 'price-asc' | 'price-desc'>('default');

    const getSortedItems = () => {
        if (sortByPrice === 'price-asc') {
            return [...catItems].sort((a, b) => a.today - b.today);
        } else if (sortByPrice === 'price-desc') {
            return [...catItems].sort((a, b) => b.today - a.today);
        }
        return catItems;
    };

    const sortedItems = getSortedItems();


    return (
        <>
            <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-base text-foreground/80">মোট {catItems?.length} টি পণ্য দেখানো হচ্ছে</p>
                <div className="flex items-center gap-2">
                    <label className="text-base text-foreground/80">সাজান</label>
                    <select id="sort-products" value={sortByPrice}
                        onChange={(e) => setSort(e.target.value as 'default' | 'price-asc' | 'price-desc')}
                        className="select select-bordered select-sm text-base select-primary">
                        <option value="default">ডিফল্ট</option>
                        <option value="price-asc">দাম: কম থেকে বেশি</option>
                        <option value="price-desc">দাম: বেশি থেকে কম</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {sortedItems?.map((product) => (
                    <Itemcard key={product.id} product={product} />
                ))}
            </div>

        </>

    )
};

export default CategoryItemsSort;