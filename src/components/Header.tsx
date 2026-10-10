
import Link from "next/link";
import CategoryNavLinks from "./CategoryNavLinks";
import { Now } from "./Now";
import { Suspense } from "react";
import HeaderButtons from "./HeaderButtons";

const Header = () => {

    return (
        <header className="sticky top-0 z-40 border-b border-base-300 bg-base-100/95 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl items-center gap-2 px-3 lg:px-0 py-3">
                <Link className="flex items-center gap-2" href={"/"}>
                    <span aria-hidden="true" className="grid size-8 md:size-10 shrink-0 place-items-center rounded-xl bg-primary text-lg md:text-xl ">🛒</span>
                    <span className="leading-tight">
                        <span className="block text-[22px] leading-none font-extrabold tracking-tight">বাজার দর</span>
                        <span className="block text-xs md:text-sm text-base-content/80"><Now /></span>
                    </span>
                </Link>
                <div className="ms-auto flex items-center gap-2">
                    <HeaderButtons />

                </div>
            </div>

            <Suspense
                fallback={
                    <div className="mx-auto flex max-w-6xl gap-3 px-3 py-3">
                        <div className="h-8 w-20 animate-pulse rounded-full bg-base-200" />
                        <div className="h-8 w-24 animate-pulse rounded-full bg-base-200" />
                        <div className="h-8 w-20 animate-pulse rounded-full bg-base-200" />
                    </div>
                }
            >
                <CategoryNavLinks />
            </Suspense>
        </header>
    )
};

export default Header;