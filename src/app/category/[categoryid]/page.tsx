import Itemcard from "@/components/ItemCard"

const CategoryPage = () => {
    return (
        <section className="space-y-8">
            <div className="rounded-2xl border border-base-300 bg-base-100 p-5">
                <div className="flex items-center gap-3">
                    <span aria-hidden="true" className="text-4xl">🍚</span>
                    <div>
                        <h1 className="text-[27px] leading-5 text-foreground font-bold">চাল</h1>
                        <p className="text-base text-foreground/80">৪টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-base text-foreground/80">মোট ৩৩টি পণ্য দেখানো হচ্ছে</p>
                <div className="flex items-center gap-2">
                    <label className="text-base text-foreground/80">সাজান</label>
                    <select id="sort-products" className="select select-bordered select-sm text-base select-primary">
                        <option value="default">ডিফল্ট</option>
                        <option value="price-asc">দাম: কম থেকে বেশি</option>
                        <option value="price-desc">দাম: বেশি থেকে কম</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Itemcard />
                <Itemcard />
                <Itemcard />
                <Itemcard />
                <Itemcard />
                <Itemcard />
                <Itemcard />
            </div>
        </section>
    )
}

export default CategoryPage