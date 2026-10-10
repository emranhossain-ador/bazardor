"use client";

import SignupForm from "@/components/auth/SignupForm";
import Link from "next/link";

const SignUp = () => {

    return (
        <div className="mx-auto flex w-full max-w-lg flex-col gap-6 py-6  md:px-4  md:py-8">
            <header className="text-center">
                <h1 className="text-2xl font-bold">অ্যাকাউন্ট তৈরি করুন</h1>
                <p className="mt-1 text-sm text-base-content/70">বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
            </header>
            <div className="card border border-base-300 bg-base-100 py-1.5 md:py-3">
                <div className="card-body px-4 md:px-6">
                    <SignupForm />
                </div>
            </div>
            <p className="text-center text-sm text-base-content/60">
                <Link className="text-base hover:text-primary transition-all duration-200 font-semibold" href="/">← হোম পেজে ফিরে যান</Link>
            </p>
        </div>
    )
}

export default SignUp;