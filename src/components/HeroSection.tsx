import Image from "next/image";

const HeroSection = () => {
    return (
        <div className="flex min-h-107.5 w-full items-center overflow-hidden rounded-[30px] border border-[#dce6df] bg-[#fbfdfb] px-4 py-6 sm:px-8 lg:px-12">

            <div className="flex w-full flex-col items-start lg:flex-row lg:justify-between">

                {/* Left Content */}
                <div className="max-w-xl">

                    <span className="inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary sm:text-base">
                        বৃহস্পতিবার, ৮ অক্টোবর, ২০২৬
                    </span>
                    <h1 className="mt-3 lg:mt-5 text-4xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-[58px]">
                        আজকের বাজারের দাম এক নজরে
                    </h1>

                    <p className="mt-3 lg:mt-5 text-base leading-7 text-base-content sm:text-lg sm:leading-8">
                        চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
                        বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের
                        পরিবর্তন এক জায়গায়।
                    </p>

                    <div className="mt-5 md:mt-7">
                        <button className="btn btn-primary btn-lg">
                            সব পণ্য দেখুন
                        </button>
                    </div>
                </div>

                {/* Right Illustration */}
                <div className="h-auto w-full max-w-xs shrink-0 sm:max-w-sm">
                    <Image height={400} width={400} src={'/assets/bazar-hero.png'} alt="hero-banner" className="w-full h-full object-cover" />
                </div>

            </div>
        </div>
    );
};



export default HeroSection;