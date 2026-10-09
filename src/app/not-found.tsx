
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-[#f4faf6] px-4 py-16">
            {/* Decorative background */}
            <div className="pointer-events-none absolute -left-28 -top-28 size-80 rounded-full bg-emerald-100/60 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 -right-28 size-80 rounded-full bg-green-100/70 blur-3xl" />

            <section className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center text-center">
                {/* Basket illustration */}
                <div className="relative mb-6 md:mb-8 flex size-48 items-center justify-center sm:size-56">
                    <div className="absolute inset-2 rounded-full bg-emerald-100/70 blur-xl" />

                    <div className="relative flex flex-col items-center">
                        <div className="relative z-10 -mb-1.25 flex h-16 w-16 items-center justify-center rounded-xl border border-white bg-white shadow-sm sm:h-20 sm:w-20">
                            <span className="text-4xl sm:text-5xl">😟</span>
                        </div>

                        <div className="relative z-20 h-5 w-32 rounded-lg bg-amber-400 shadow-sm sm:w-40" />

                        <div className="relative -mt-1 flex h-24 w-28 items-center justify-center rounded-b-[28px] border-x-4 border-b-4 border-amber-500 bg-linear-to-b from-amber-300 to-orange-400 shadow-lg sm:h-28 sm:w-36">
                            <span className="text-5xl drop-shadow-sm sm:text-6xl">
                                🛒
                            </span>
                        </div>

                        <div className="mt-3 h-2 w-32 rounded-full bg-emerald-900/10 blur-sm" />
                    </div>

                    <span className="absolute left-3 top-10 rotate-[-20deg] text-3xl text-amber-400">
                        ✦
                    </span>
                    <span className="absolute right-3 top-14 rotate-12 text-2xl text-emerald-400">
                        ✦
                    </span>
                </div>

                {/* Message */}
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
                    404 · পৃষ্ঠা পাওয়া যায়নি
                </p>

                <h1 className="text-2xl md:text-3xl font-extrabold leading-tight text-slate-800 sm:text-5xl">
                    পণ্যটি{" "}
                    <span className="text-emerald-600">খুঁজে পাওয়া যায়নি</span>
                </h1>

                <p className="mt-3 md:mt-4 max-w-lg text-base leading-8 text-slate-600 sm:text-lg">
                    আপনি যে পণ্য বা পাতাটি খুঁজছেন, সেটি সরানো হয়েছে,
                    ঠিকানা পরিবর্তন হয়েছে অথবা এটি আর উপলভ্য নেই।
                    অনুগ্রহ করে অন্য পৃষ্ঠা দেখুন।
                </p>

                {/* Actions */}
                <div className="mt-6 md:mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
                    <Link
                        href="/"
                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-3 font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-700"
                    >
                        <span aria-hidden="true">⌂</span>
                        হোম পেজে যান
                    </Link>
                </div>

                <p className="mt-5 md:mt-6 text-sm text-slate-500">
                    আপনার প্রতিদিনের বাজারদর জানুন — বাজার দর
                </p>
            </section>
        </main>
    );
}