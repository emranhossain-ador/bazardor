
import AllItemsSection from "@/components/AllItemsSection";
import HeroSection from "@/components/HeroSection";
import TodayDownPriceItems from "@/components/TodayDownPriceItems";
import TodayUpPriceItems from "@/components/TodayUpPriceItems";

export default function Home() {
  return <>

    <HeroSection />

    <TodayDownPriceItems />
    <TodayUpPriceItems />

    <AllItemsSection />

  </>;
}
