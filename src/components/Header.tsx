import Link from "next/link";
import CategoryNavLinks from "./CategoryNavLinks";

const Header = () => {
    return (
        <header className="sticky top-0 z-40 border-b border-base-300 bg-base-100/95 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 lg:px-0 py-3">
                <Link className="flex items-center gap-2" href="/">
                    <span aria-hidden="true" className="grid size-8 md:size-10 shrink-0 place-items-center rounded-xl bg-primary text-lg md:text-xl ">🛒</span>
                    <span className="leading-tight">
                        <span className="block text-[22px] leading-none font-extrabold tracking-tight">বাজার দর</span>
                        <span className="block text-xs md:text-sm text-base-content/80">বৃহস্পতিবার, ৮ অক্টোবর, ২০২৬</span>
                    </span>
                </Link>
                <div className="ms-auto flex items-center gap-2">
                    <Link className="btn btn-ghost text-base font-bold btn-sm sm:btn-md" href="/signin">সাইন ইন</Link>
                    <Link className="btn btn-primary text-base font-bold btn-sm sm:btn-md" href="/signup">সাইন আপ</Link>
                </div>
            </div>

            <CategoryNavLinks />
        </header>
    )
};

export default Header;