import { ProductType } from "@/app/ProductType";
import MarqueeText from "react-marquee-text";

const HeadLineText = async () => {


    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products');
    const products: ProductType[] = await res.json();

    return (
        <div className="ticker overflow-hidden border-b border-base-300 bg-base-100" role="marquee" aria-label="আজকের দাম পরিবর্তনের তালিকা">
            <div className="ticker-track">
                <ul className="flex shrink-0 items-center">
                    <MarqueeText duration={10} direction="right" pauseOnHover={true}>
                        {products.map((item, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-1.5 border-e border-base-200 px-4 py-2 text-sm md:text-base whitespace-nowrap"
                            >
                                <span aria-hidden="true">{item.categoryIcon}</span>

                                <span className="font-medium">
                                    {item.nameBn}
                                </span>

                                <span className="text-base-content/70">
                                    {item.today} টাকা/{item.unit}
                                </span>

                                <span
                                    className={`font-semibold ${item.change.dir === "up"
                                        ? "text-success"
                                        : "text-error"
                                        }`}
                                >
                                    {item.change.dir === "up" ? "▲" : "▼"} {item.change.pct}%
                                </span>
                            </li>
                        ))}
                    </MarqueeText>

                </ul>
            </div>
        </div>
    )
};

export default HeadLineText;