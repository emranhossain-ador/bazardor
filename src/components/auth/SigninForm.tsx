"use client";

import { signIn } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import SocialLoginBtn from "./SocialLoginBtn";

type ErrorsType = {
    email?: string;
    password?: string;
}

const SigninForm = () => {

    const [error, setError] = useState<ErrorsType>({});

    const router = useRouter();

    const signin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const email = String(formData.get("email") ?? "").trim();
        const password = String(formData.get("password") ?? "");

        const newErrors: ErrorsType = {};

        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Please enter a valid email.";
        }

        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 8) {
            newErrors.password = "Password must be at least 8 characters.";
        }

        setError(newErrors);

        if (Object.keys(newErrors).length === 0) {
            const { data, error } = await signIn.email({
                email: email,
                password: password,
                callbackURL: "/",
            });

            if (error) {
                toast.error(error.message)
            } else {
                form.reset();
                toast.success("Sign In Successful");
                router.push("/");
            }
        }
    }

    const inputClass = (field: keyof ErrorsType) =>
        `w-full rounded-lg border px-4 py-3 outline-none ${error[field]
            ? "input input-error w-full min-h-[48px]"
            : "input input-bordered w-full min-h-[48px]"
        }`;


    return (
        <form onSubmit={signin} className="flex flex-col gap-4">
            <label className="form-control w-full">
                <span className="label-text text-foreground mb-1 block font-medium">ইমেইল</span>
                <input className={inputClass("email")} placeholder="you@example.com" type="email" name="email" />
                {error.email && <p className="mt-1 text-sm text-red-500">{error.email}</p>}
            </label>
            <label className="form-control w-full">
                <span className="label-text text-foreground mb-1 block font-medium">পাসওয়ার্ড</span>
                <input className={inputClass("password")} placeholder="কমপক্ষে ৮ অক্ষর" type="password" name="password" />
                {error.password && <p className="mt-1 text-sm text-red-500">{error.password}</p>}
            </label>
            <button type="submit" className="btn btn-primary w-full text-base">অ্যাকাউন্ট তৈরি করুন</button>

            <div className="divider my-0 text-xs">অথবা</div>

            <SocialLoginBtn />

            <p className="text-center text-sm text-foreground/70 font-bold">
                অ্যাকাউন্ট নেই?
                <Link className="link link-primary ml-2" href="/signup">সাইন আপ করুন</Link>
            </p>
        </form>
    );
};
export default SigninForm;