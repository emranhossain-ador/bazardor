
import AllItemsSection from "@/components/AllItemsSection";
import HeroSection from "@/components/HeroSection";
import TodayDownPriceItems from "@/components/TodayDownPriceItems";
import TodayUpPriceItems from "@/components/TodayUpPriceItems";
import { Suspense } from "react";
import HomeSkeleton from "./HomeSkeleton";


export default function Home() {


  return <>

    <HeroSection />

    <Suspense fallback={<HomeSkeleton />}>
      <TodayDownPriceItems />
      <TodayUpPriceItems />
      <AllItemsSection />
    </Suspense>


  </>;
}
