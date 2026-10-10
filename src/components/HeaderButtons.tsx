"use client";
import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";

const HeaderButtons = () => {
    const userdata = useSession();
    const user = userdata.data?.user;

    return (
        <div>
            {
                user ? (
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-sm gap-2 sm:btn-md">
                            <span className="avatar avatar-placeholder">
                                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-primary text-primary-content sm:w-8 sm:h-8">
                                    <span className="text-sm">M</span>
                                </span>
                            </span>
                            <span className="hidden max-w-32 truncate text-base font-sans font-medium sm:inline">{user.name}</span>
                            <span aria-hidden="true" className="text-sm opacity-60">▾</span>
                        </div>
                        <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li className="menu-title">
                                <span className="block text-base font-sans truncate">{user.name}</span>
                                <span className="block truncate font-sans text-sm font-normal opacity-70">{user.email}</span>
                            </li>
                            <li>
                                <Link href="/profile" className="text-[15px]">👤 আমার প্রোফাইল</Link>
                            </li>
                            <li>
                                <button type="button" onClick={() => signOut()} className="text-error text-[15px]">↩︎ সাইন আউট</button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <>
                        <Link className="btn btn-ghost md:text-base font-bold btn-sm sm:btn-md" href="/signin">সাইন ইন</Link>
                        <Link className="btn btn-primary md:text-base font-bold btn-sm sm:btn-md" href="/signup">সাইন আপ</Link>
                    </>
                )
            }
        </div>
    )
};
export default HeaderButtons;