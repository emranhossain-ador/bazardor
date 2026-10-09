
import AllItemsSection from "@/components/AllItemsSection";
import HeroSection from "@/components/HeroSection";
import TodayDownPriceItems from "@/components/TodayDownPriceItems";
import TodayUpPriceItems from "@/components/TodayUpPriceItems";
import { Suspense } from "react";
import Loader from "@/components/Loader";


export default function Home() {


  return <>

    <HeroSection />

    <Suspense fallback={<Loader />}>
      <TodayDownPriceItems />
      <TodayUpPriceItems />
      <AllItemsSection />
    </Suspense>


  </>;
}
