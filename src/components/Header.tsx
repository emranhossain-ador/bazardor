
import Link from "next/link";
import CategoryNavLinks from "./CategoryNavLinks";
import { Now } from "./Now";
import { Suspense } from "react";

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

                    {/* <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-sm gap-2 sm:btn-md">
                            <span className="avatar avatar-placeholder">
                                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-primary text-primary-content sm:w-8 sm:h-8">
                                    <span className="text-sm">M</span>
                                </span>
                            </span>
                            <span className="hidden max-w-32 truncate text-base font-sans font-medium sm:inline">MD. Al Mahmud</span>
                            <span aria-hidden="true" className="text-sm opacity-60">▾</span>
                        </div>
                        <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li className="menu-title">
                                <span className="block text-base font-sans truncate">MD. Al Mahmud</span>
                                <span className="block truncate font-sans text-sm font-normal opacity-70">emran@gmail.com</span>
                            </li>
                            <li>
                                <Link href="/profile" className="text-[15px]">👤 আমার প্রোফাইল</Link>
                            </li>
                            <li>
                                <button type="button" className="text-error text-[15px]">↩︎ সাইন আউট</button>
                            </li>
                        </ul>
                    </div> */}

                    <Link className="btn btn-ghost md:text-base font-bold btn-sm sm:btn-md" href="/signin">সাইন ইন</Link>
                    <Link className="btn btn-primary md:text-base font-bold btn-sm sm:btn-md" href="/signup">সাইন আপ</Link>
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