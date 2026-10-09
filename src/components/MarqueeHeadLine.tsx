import "react-marquee-text/dist/styles.css"
import HeadLineText from "./MarHeadlineText";
import { Suspense } from "react";

const MarqueeHeadLine = async () => {


    return (
        <div>
            <Suspense fallback={<p className="text-center text-base-content/70">...</p>}>
                <HeadLineText />
            </Suspense>
        </div>
    )

}

export default MarqueeHeadLine;