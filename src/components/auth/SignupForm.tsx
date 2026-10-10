"use client";

import { signUp } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";


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
                router.refresh();
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
            <div className="flex flex-col gap-2 sm:flex-row">
                <button type="button" className="btn btn-outline border-2 border-gray-400/50 md:flex-1 text-xs font-bold">
                    <svg viewBox="0 0 48 48" aria-hidden="true" className="size-4"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65Z"></path><path fill="#FBBC05" d="M10.53 28.59A14.4 14.4 0 0 1 9.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.94 23.94 0 0 0 0 24c0 3.87.93 7.53 2.56 10.78l7.97-6.19Z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.9-5.8l-7.73-6c-2.15 1.45-4.92 2.3-8.17 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z"></path></svg>
                    Google দিয়ে চালিয়ে যান
                </button>
                <button type="button" className="btn btn-outline border-2 border-gray-400/50 md:flex-1 text-xs font-bold">
                    <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 fill-current">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"></path>
                    </svg>
                    GitHub দিয়ে চালিয়ে যান
                </button>
            </div>
            <p className="text-center text-sm text-foreground/70 font-bold">
                অ্যাকাউন্ট আছে?
                <Link className="link link-primary ml-2" href="/signin">সাইন ইন করুন</Link>
            </p>
        </form>
    )
};

export default SignupForm;
