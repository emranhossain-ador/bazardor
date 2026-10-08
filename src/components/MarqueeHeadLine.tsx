import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css"

const MarqueeHeadLine = () => {

    const marketData = [
        { icon: "🍚", name: "স্বর্ণমাছি চাল", price: "১৪৮", unit: "কেজি", change: "২.১", direction: "up" },
        { icon: "🍚", name: "মিনিকেট চাল", price: "৯৯", unit: "কেজি", change: "২.৯", direction: "down" },
        { icon: "🍚", name: "বাটাম সাইজ চাল", price: "৬৬", unit: "কেজি", change: "৩.১", direction: "up" },
        { icon: "🫘", name: "মসুর ডাল", price: "১৪২", unit: "কেজি", change: "২.৯", direction: "up" },
        { icon: "🫘", name: "ছোলা", price: "১২০", unit: "কেজি", change: "২.৪", direction: "down" },
        { icon: "🫘", name: "আমন ডাল (খোসাসিলা)", price: "১৫৬", unit: "কেজি", change: "২.৬", direction: "up" },
        { icon: "🫙", name: "সরিষার তেল", price: "১৯২", unit: "লিটার", change: "২.১", direction: "up" },
        { icon: "🛢️", name: "পাম তেল", price: "১৬৮", unit: "কেজি", change: "২.৩", direction: "down" },
        { icon: "🫙", name: "ঘানি ভাঙা সরিষার তেল", price: "২১৫", unit: "লিটার", change: "২.৪", direction: "up" },
        { icon: "🥔", name: "আলু", price: "৩০", unit: "কেজি", change: "৬.২", direction: "down" },
        { icon: "🧅", name: "পেঁয়াজ", price: "৫৪", unit: "কেজি", change: "১২.৫", direction: "up" },
        { icon: "🌶️", name: "কাঁচামরিচ", price: "৯২", unit: "কেজি", change: "১২.৪", direction: "down" },
        { icon: "🍆", name: "বেগুন", price: "৪৪", unit: "কেজি", change: "৪.৮", direction: "up" },
        { icon: "🐟", name: "রুই মাছ", price: "৪৬", unit: "কেজি", change: "৪.৫", direction: "up" },
        { icon: "🐠", name: "ইলিশ মাছ", price: "১,৮৫০", unit: "কেজি", change: "৩.৪", direction: "up" },
        { icon: "🐠", name: "কাতলা মাছ", price: "৪৩", unit: "কেজি", change: "৪.৪", direction: "down" },
        { icon: "🦐", name: "চিংড়ি মাছ (খোলা)", price: "৩৩০", unit: "কেজি", change: "৩.১", direction: "up" },
        { icon: "🍗", name: "মুরগির মাংস", price: "২২৫", unit: "কেজি", change: "১.৩", direction: "down" },
        { icon: "🥩", name: "গরুর মাংস", price: "৭৯০", unit: "কেজি", change: "১.২", direction: "down" },
        { icon: "🍖", name: "খাসির মাংস", price: "১,২৯০", unit: "কেজি", change: "৩.০", direction: "down" },
        { icon: "🦆", name: "হাঁসের মাংস", price: "২৮৫", unit: "কেজি", change: "৩.৪", direction: "down" },
        { icon: "🥚", name: "ডিম", price: "১৫৮", unit: "ডজন", change: "৩.৯", direction: "up" },
        { icon: "🥛", name: "দুধ", price: "১০২", unit: "লিটার", change: "২.০", direction: "up" },
        { icon: "🧈", name: "মাখন (১০০ গ্রাম)", price: "১৪৫", unit: "পিস", change: "৩.৬", direction: "up" },
        { icon: "🫚", name: "আদা", price: "৮৫", unit: "কেজি", change: "৯.০", direction: "up" },
        { icon: "🧄", name: "রসুন", price: "১২৫", unit: "কেজি", change: "৭.৪", direction: "down" },
        { icon: "🌶️", name: "মরিচ গুঁড়া", price: "২৪৫", unit: "কেজি", change: "২.০", direction: "down" },
    ];

    return (
        <div>
            <div className="ticker overflow-hidden border-b border-base-300 bg-base-100" role="marquee" aria-label="আজকের দাম পরিবর্তনের তালিকা">
                <div className="ticker-track">
                    <ul className="flex shrink-0 items-center">
                        <MarqueeText duration={10} direction="right" pauseOnHover={true}>
                            {marketData.map((item, index) => (
                                <li
                                    key={`${item.name}-${index}`}
                                    className="flex items-center gap-1.5 border-e border-base-200 px-4 py-2 text-sm md:text-base whitespace-nowrap"
                                >
                                    <span aria-hidden="true">{item.icon}</span>

                                    <span className="font-medium">
                                        {item.name}
                                    </span>

                                    <span className="text-base-content/70">
                                        {item.price} টাকা/{item.unit}
                                    </span>

                                    <span
                                        className={`font-semibold ${item.direction === "up"
                                            ? "text-success"
                                            : "text-error"
                                            }`}
                                    >
                                        {item.direction === "up" ? "▲" : "▼"} {item.change}%
                                    </span>
                                </li>
                            ))}
                        </MarqueeText>

                    </ul>
                </div>
            </div>
        </div>
    )

}

export default MarqueeHeadLine;