import "react-marquee-text/dist/styles.css"
import HeadLineText from "./MarHeadlineText";
import { Suspense } from "react";
import MarqueeSkeleton from "@/app/MarqueeSkeleton";

const MarqueeHeadLine = async () => {


    return (
        <div>
            <Suspense fallback={<MarqueeSkeleton />}>
                <HeadLineText />
            </Suspense>
        </div>
    )

}

export default MarqueeHeadLine;