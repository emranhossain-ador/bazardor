"use client";

import { signUp } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import SocialLoginBtn from "./SocialLoginBtn";


type FormError = {
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
};


const SignupForm = () => {

    const [error, setErrors] = useState<FormError>({});

    const router = useRouter();

    const signup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const name = String(formData.get("name") ?? "").trim();
        const email = String(formData.get("email") ?? "").trim();
        const password = String(formData.get("password") ?? "");
        const confirmPassword = String(formData.get("confirmPassword") ?? "");

        const newErrors: FormError = {};

        if (name.length < 3) {
            newErrors.name = "Name must be at least 3 characters long";
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Please enter a valid email.";
        }

        if (password.length < 8) {
            newErrors.password = "Password must be at least 8 characters.";
        }

        if (password !== confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match.";
        }

        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {

            const { data, error } = await signUp.email({
                name: name,
                email: email,
                password: password,
                callbackURL: "/",
            });

            if (error) {
                toast.error(error.message)
            } else {
                form.reset();
                toast.success("Registration Successfull");
                router.push("/");
            }

        }

    }

    const inputClass = (field: keyof FormError) =>
        `w-full rounded-lg border px-4 py-3 outline-none ${error[field]
            ? "input input-error w-full min-h-[48px]"
            : "input input-bordered w-full min-h-[48px]"
        }`;


    return (
        <form onSubmit={signup} className="flex flex-col gap-4">
            <label className="form-control w-full">
                <span className="label-text text-foreground mb-1 block font-medium">নাম</span>
                <input className={inputClass("name")} placeholder="যেমন: রহিম উদ্দিন" type="text" name="name" />
                {error.name && (
                    <p className="mt-1 text-sm text-red-500">{error.name}</p>
                )}
            </label>

            <label className="form-control w-full">
                <span className="label-text text-foreground mb-1 block font-medium">ইমেইল</span>
                <input className={inputClass("email")} placeholder="you@example.com" type="email" name="email" />
                {error.email && (
                    <p className="mt-1 text-sm text-red-500">{error.email}</p>
                )}
            </label>
            <label className="form-control w-full">
                <span className="label-text text-foreground mb-1 block font-medium">পাসওয়ার্ড</span>
                <input className={inputClass("password")} placeholder="কমপক্ষে ৮ অক্ষর" type="password" name="password" />
                {error.password && (
                    <p className="mt-1 text-sm text-red-500">{error.password}</p>
                )}
            </label>
            <label className="form-control w-full">
                <span className="label-text text-foreground mb-1 block font-medium">পাসওয়ার্ড নিশ্চিত করুন</span>
                <input className={inputClass("confirmPassword")} placeholder="আবার লিখুন" type="password" name="confirmPassword" />
                {error.confirmPassword && (
                    <p className="mt-1 text-sm text-red-500">{error.confirmPassword}</p>
                )}
            </label>
            <button type="submit" className="btn btn-primary w-full text-base">অ্যাকাউন্ট তৈরি করুন</button>

            <div className="divider my-0 text-xs">অথবা</div>

            <SocialLoginBtn />

            <p className="text-center text-sm text-foreground/70 font-bold">
                অ্যাকাউন্ট আছে?
                <Link className="link link-primary ml-2" href="/signin">সাইন ইন করুন</Link>
            </p>
        </form>
    )
};

export default SignupForm;
