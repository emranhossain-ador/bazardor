"use client";

export default function Loader() {
    return (<div className="flex min-h-80 w-full flex-col items-center justify-center rounded-2xl bg-linear-to-b from-green-50 via-white to-white px-4 py-12">
        {/* Animated Loader Icon */} <div className="relative mb-8 flex h-20 w-20 items-center justify-center"> <div className="absolute inset-0 animate-ping rounded-full bg-green-200/40" />

            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-green-400 to-emerald-600 shadow-lg shadow-green-200">
                <svg
                    className="h-9 w-9 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 8H6"
                    />
                    <circle cx="10" cy="21" r="1" fill="currentColor" />
                    <circle cx="18" cy="21" r="1" fill="currentColor" />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 11h7m-3.5-3.5v7"
                    />
                </svg>
            </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-center text-xl font-bold text-emerald-800 sm:text-2xl">
            পণ্যের লোড হচ্ছে
            <span className="inline-block animate-pulse">...</span>
        </h2>

        <p className="mt-3 max-w-sm text-center text-sm leading-6 text-gray-500 sm:text-base">
            কিছুক্ষণের মধ্যেই সর্বশেষ বাজারদর দেখতে পাবেন।
        </p>

        {/* Animated Progress Bar */}
        <div className="mt-7 h-1.5 w-48 overflow-hidden rounded-full bg-green-100">
            <div className="h-full w-1/2 animate-[loader_1.5s_ease-in-out_infinite] rounded-full bg-linear-to-r from-green-400 to-emerald-600" />
        </div>

        <style jsx>{`
        @keyframes loader {
        0% {
            transform: translateX(-100%);
        }
        50% {
            transform: translateX(100%);
        100% {
            transform: translateX(300%);
        }}`}</style>
    </div>


    );
}
