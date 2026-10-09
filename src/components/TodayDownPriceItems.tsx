
import SectionHeader from "./ui/SectionHeader";
import Itemcard from "./ItemCard";

const TodayDownPriceItems = () => {
    return (
        <section className="space-y-8">

            <SectionHeader title="আজ দাম কমেছে" isPriceDown={false} />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Itemcard />
                <Itemcard />
                <Itemcard />
            </div>


        </section>
    );
};

export default TodayDownPriceItems;