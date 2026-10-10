
import { notFound } from "next/navigation";
import { ProductType } from "../ProductType";
import CategoryItemsSort from "./CategoryItemsSort";

interface Category {
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
}

const CategoryItems = async ({ params }: { params: Promise<{ categoryid: string }> }) => {

    // Get category id from params
    const { categoryid } = await params;

    // Get category
    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/categories/${categoryid}`);

    if (!res.ok) {
        notFound();
    }

    const category: Category = await res.json();

    // Get category items
    const catItemRes = await fetch(`https://openapi.programming-hero.com/api/bazardor/products?category=${categoryid}`);

    if (!catItemRes.ok) {
        notFound();
    }

    const catItems: ProductType[] = await catItemRes.json();

    if (!catItems) {
        notFound();
    }

    return (
        <>
            <div className="rounded-2xl border border-base-300 bg-base-100 p-5">
                <div className="flex items-center gap-3">
                    <span aria-hidden="true" className="text-4xl">{category?.icon}</span>
                    <div>
                        <h1 className="text-[27px] leading-5 text-foreground font-bold">{category?.nameBn} </h1>
                        <p className="text-base text-foreground/80">টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                    </div>
                </div>
            </div>

            <CategoryItemsSort catItems={catItems} />
        </>
    )
};


export default CategoryItems;