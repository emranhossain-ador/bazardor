const CategoryNavLinks = () => {
    return (
        <div className="border-t border-base-200 bg-base-100">
            <nav aria-label="পণ্য ক্যাটাগরি" className="mx-auto w-full max-w-6xl px-4">
                <ul className="flex items-center gap-1 overflow-x-auto py-2 text-sm">
                    <li className="shrink-0">
                        <a className="btn btn-sm md:text-[15px] font-bold whitespace-nowrap btn-ghost" href="/category/chal">
                            <span aria-hidden="true">🍚</span>চাল</a>
                    </li>
                    <li className="shrink-0">
                        <a className="btn btn-sm md:text-[15px] font-bold whitespace-nowrap btn-ghost" href="/category/dal">
                            <span aria-hidden="true">🫘</span>ডাল</a>
                    </li>
                    <li className="shrink-0">
                        <a className="btn btn-sm md:text-[15px] font-bold whitespace-nowrap btn-ghost" href="/category/tel"><span aria-hidden="true">🛢️</span>তেল</a>
                    </li>
                    <li className="shrink-0">
                        <a className="btn btn-sm md:text-[15px] font-bold whitespace-nowrap btn-ghost" href="/category/sobji">
                            <span aria-hidden="true">🥬</span>সবজি</a>
                    </li>
                    <li className="shrink-0">
                        <a className="btn btn-sm md:text-[15px] font-bold whitespace-nowrap btn-ghost" href="/category/mach">
                            <span aria-hidden="true">🐟</span>মাছ</a>
                    </li>
                    <li className="shrink-0">
                        <a className="btn btn-sm md:text-[15px] font-bold whitespace-nowrap btn-ghost" href="/category/mangsho">
                            <span aria-hidden="true">🍗</span>মাংস</a>
                    </li>
                    <li className="shrink-0">
                        <a className="btn btn-sm md:text-[15px] font-bold whitespace-nowrap btn-ghost" href="/category/dim-dui">
                            <span aria-hidden="true">🥛</span>ডিম-দুধ</a>
                    </li>
                    <li className="shrink-0">
                        <a className="btn btn-sm md:text-[15px] font-bold whitespace-nowrap btn-ghost" href="/category/mosla">
                            <span aria-hidden="true">🌶️</span>মসলা</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default CategoryNavLinks;