"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Category {
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
}

interface Props {
    categories: Category[];
}

export default function CategoryNavClient({ categories }: Props) {
    const pathname = usePathname();

    const currentSlug = pathname.startsWith("/category/")
        ? pathname.split("/")[2]
        : "";

    return (
        <div className="border-t border-base-200 bg-base-100">
            <nav
                aria-label="পণ্য ক্যাটাগরি"
                className="mx-auto w-full max-w-6xl px-4"
            >
                <ul className="flex items-center gap-1 overflow-x-auto py-2 text-sm">
                    {categories.map((category) => {
                        const isActive = currentSlug === category.slug;

                        return (
                            <li key={category.id} className="shrink-0">
                                <Link
                                    href={`/category/${category.slug}`}
                                    aria-current={isActive ? "page" : undefined}
                                    className={`btn btn-sm whitespace-nowrap font-bold md:text-[15px] ${isActive
                                        ? "btn-primary"
                                        : "btn-ghost"
                                        }`}
                                >
                                    <span aria-hidden="true">{category.icon}</span>
                                    {category.nameBn}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}