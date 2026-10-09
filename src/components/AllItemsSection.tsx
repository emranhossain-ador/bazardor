import Itemcard from "./ItemCard";

const AllItemsSection = () => {
    return (
        <section className="space-y-8">

            <h2 className="mb-3 text-xl lg:text-2xl font-bold">সব পণ্যের তালিকা</h2>
            <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-base text-foreground/80">মোট ৩৩টি পণ্য দেখানো হচ্ছে</p>
                <div className="flex items-center gap-2">
                    <label className="text-base text-foreground/80">সাজান</label>
                    <select id="sort-products" className="select select-bordered select-sm text-lg select-primary">
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

export default AllItemsSection;