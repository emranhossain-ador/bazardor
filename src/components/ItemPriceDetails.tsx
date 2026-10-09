import { ProductType } from "@/app/ProductType";


const ItemPriceDetailsPage = ({ product }: { product: ProductType }) => {

    const markets = product.markets ?? [];

    const minPrice = markets.length > 0 ? Math.min(...markets.map((market) => market.min)) : null;

    const maxPrice = markets.length > 0 ? Math.max(...markets.map((market) => market.max)) : null;

    const averagePrice = markets.length > 0 ? Math.round(markets.reduce((sum, market) => sum + (market.min + market.max) / 2, 0) / markets.length) : null;

    return (
        <div className="rounded-2xl border border-base-300 bg-base-100 p-5">
            <div className="flex flex-col gap-6">
                <section>
                    <h2 className="mb-3 text-lg font-semibold">দামের সারসংক্ষেপ</h2>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                        <div className="stat rounded-box border border-base-300 bg-base-100">
                            <div className="stat-title">সর্বনিম্ন দাম</div>
                            <div className="stat-value text-2xl text-success">
                                {minPrice}
                                <span className="text-sm font-medium"> টাকা</span>
                            </div>
                            <div className="stat-desc">সবচেয়ে কম দামের বাজার</div>
                        </div>
                        <div className="stat rounded-box border border-base-300 bg-base-100">
                            <div className="stat-title">সর্বাধিক দাম</div>
                            <div className="stat-value text-2xl text-error">
                                {maxPrice}
                                <span className="text-sm font-medium"> টাকা</span>
                            </div>
                            <div className="stat-desc">সবচেয়ে বেশি দামের বাজার</div>
                        </div>
                        <div className="stat rounded-box border border-base-300 bg-base-100">
                            <div className="stat-title">গড় দাম</div>
                            <div className="stat-value text-2xl text-primary">
                                {averagePrice}
                                <span className="text-sm font-medium"> টাকা</span>
                            </div>
                            <div className="stat-desc">প্রতি কেজি-এর হিসাবে</div>
                        </div>

                    </div>
                </section>


                <div>
                    <h2 className="mb-3 text-lg font-semibold">বাজারভিত্তিক আজকের দাম</h2>
                    <div className="overflow-x-auto rounded-box border border-base-300 bg-base-100">
                        <table className="table table-zebra">
                            <thead>
                                <tr>
                                    <th className="text-lg">বাজার</th>
                                    <th className="text-lg">বিভাগ</th>
                                    <th className="text-right text-lg">সর্বনিম্ন</th>
                                    <th className="text-right text-lg">সর্বাধিক</th>
                                    <th className="text-right text-lg">গড়</th>
                                </tr>
                            </thead>
                            <tbody>
                                {product.markets.map((market, index) => (
                                    <tr key={index}>
                                        <td className="text-base font-medium">{market.market}</td>
                                        <td className="text-base text-base-content/70">{market.division}</td>
                                        <td className="text-base text-right">{market.min} টাকা</td>
                                        <td className="text-base text-right">{market.max} টাকা</td>
                                        <td className="text-base text-right font-semibold">{((market.min + market.max) / 2).toFixed(2)} টাকা</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemPriceDetailsPage;