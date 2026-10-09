

const ItemPriceDetailsPage = () => {
    return (
        <div className="rounded-2xl border border-base-300 bg-base-100 p-5">
            <div className="flex flex-col gap-6">
                <section>
                    <h2 className="mb-3 text-lg font-semibold">দামের সারসংক্ষেপ</h2>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                        <div className="stat rounded-box border border-base-300 bg-base-100">
                            <div className="stat-title">সর্বনিম্ন দাম</div>
                            <div className="stat-value text-2xl text-success">
                                ৮২
                                <span className="text-sm font-medium"> টাকা</span>
                            </div>
                            <div className="stat-desc">সবচেয়ে কম দামের বাজার</div>
                        </div>
                        <div className="stat rounded-box border border-base-300 bg-base-100">
                            <div className="stat-title">সর্বাধিক দাম</div>
                            <div className="stat-value text-2xl text-error">
                                ১০২
                                <span className="text-sm font-medium"> টাকা</span>
                            </div>
                            <div className="stat-desc">সবচেয়ে বেশি দামের বাজার</div>
                        </div>
                        <div className="stat rounded-box border border-base-300 bg-base-100">
                            <div className="stat-title">গড় দাম</div>
                            <div className="stat-value text-2xl text-primary">
                                ৯২
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
                                    <th>বাজার</th>
                                    <th>বিভাগ</th>
                                    <th className="text-right">সর্বনিম্ন</th>
                                    <th className="text-right">সর্বাধিক</th>
                                    <th className="text-right">গড়</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="font-medium">মাঠ বাজার</td>
                                    <td className="text-base-content/70">ময়মনসিংহ</td>
                                    <td className="text-right">৮২ টাকা</td>
                                    <td className="text-right">৯১ টাকা</td>
                                    <td className="text-right font-semibold">৮৬.৫০ টাকা</td>
                                </tr>
                                <tr>
                                    <td className="font-medium">সদর বাজার</td>
                                    <td className="text-base-content/70">রাজশাহী</td>
                                    <td className="text-right">৮৩ টাকা</td>
                                    <td className="text-right">৯২ টাকা</td>
                                    <td className="text-right font-semibold">৮৭.৫০ টাকা</td>
                                </tr>
                                <tr>
                                    <td className="font-medium">বাজারহাট</td>
                                    <td className="text-base-content/70">খুলনা</td>
                                    <td className="text-right">৮৩ টাকা</td>
                                    <td className="text-right">৯৪ টাকা</td>
                                    <td className="text-right font-semibold">৮৮.৫০ টাকা</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemPriceDetailsPage;