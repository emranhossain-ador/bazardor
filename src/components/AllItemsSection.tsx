import AllItemsSort from "./AllItemsSort";
import { ProductType } from "@/app/ProductType";

const getProduct = async (): Promise<ProductType[]> => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products');
    if (!res.ok) { throw new Error("Failed to fetch product"); }
    return res.json();
}

const AllItemsSection = async () => {

    const products = await getProduct();

    return (
        <section id="সব-পণ্য" className="space-y-8">

            <h2 className="mb-3 text-xl lg:text-2xl font-bold">সব পণ্যের তালিকা</h2>

            <AllItemsSort products={products} />

        </section>
    )
}

export default AllItemsSection;