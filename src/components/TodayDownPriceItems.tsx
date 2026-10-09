
import SectionHeader from "./ui/SectionHeader";
import Itemcard from "./ItemCard";
import { ProductType } from "@/app/ProductType";

const getProduct = async (): Promise<ProductType[]> => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products');
    if (!res.ok) { throw new Error("Failed to fetch product"); }
    return res.json();
}

const TodayDownPriceItems = async () => {

    const products = await getProduct();
    const downPriceProducts = products.filter(
        (product) => product.change.dir === "down"
    ).sort((a, b) => a.change.pct - b.change.pct).slice(0, 6);

    return (
        <section className="space-y-8">

            <SectionHeader title="আজ দাম কমেছে" isPriceDown={false} />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {downPriceProducts.length > 0 ? (
                    downPriceProducts.map((product) => (
                        <Itemcard key={product.id} product={product} />
                    ))
                ) : (
                    <p className="col-span-full py-10 text-center text-gray-500">
                        আজ কোনো পণ্যের দাম কমেনি।
                    </p>
                )}

            </div>


        </section>
    );
};

export default TodayDownPriceItems;