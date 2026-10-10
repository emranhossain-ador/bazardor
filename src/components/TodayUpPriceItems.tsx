
import SectionHeader from "./ui/SectionHeader";
import Itemcard from "./ItemCard";
import { ProductType } from "@/app/ProductType";

const getProduct = async (): Promise<ProductType[]> => {
    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products');
    if (!res.ok) { throw new Error("Failed to fetch product"); }
    return res.json();
}

const TodayUpPriceItems = async () => {

    const products = await getProduct();
    const upPriceProducts = products.filter(
        (product) => product.change.dir === "up"
    ).sort((a, b) => b.change.pct - a.change.pct).slice(0, 6);

    return (
        <section className="space-y-8">

            <SectionHeader title="আজ দাম বেড়েছে" isPriceDown={true} />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {upPriceProducts.length > 0 ? (
                    upPriceProducts.map((product) => (
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

export default TodayUpPriceItems;