"use client";
import { signOut, useSession } from "@/lib/auth-client";

const ProfilePage = () => {
    const userData = useSession();
    const user = userData.data?.user;

    return (
        <section className="mx-auto flex w-full max-w-2xl flex-col gap-6 ">
            <header>
                <h1 className="text-2xl font-bold">আমার প্রোফাইল</h1>
                <p className="text-sm text-base-content/70">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
            </header>
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-base-300 bg-base-100 p-6 sm:flex-row sm:items-center">
                <span className="avatar avatar-placeholder">
                    <span className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-lg font-bold text-primary-content"><span>M</span></span>
                </span>
                <div className="min-w-0 flex-1 text-center sm:text-left">
                    <h2 className="text-xl font-semibold font-sans">{user?.name}</h2>
                    <p className="truncate text-base-content/70 font-sans">{user?.email}</p>
                </div>
                <button type="button" onClick={() => signOut()} className="btn btn-outline btn-error">↩︎ সাইন আউট</button>
            </div>
            <div className="rounded-2xl border border-base-300 bg-base-100 p-5">
                <h3 className="mb-3 text-lg font-semibold">তথ্য</h3>
                <form className="flex flex-col gap-3">
                    <label className="form-control w-full">
                        <span className="label-text mb-1 block font-medium">নাম</span>
                        <input name="name" className="input input-bordered w-full " placeholder="যেমন: রহিম উদ্দিন" type="text" />
                    </label>
                    <button type="submit" className="btn btn-primary ">আপডেট করুন</button>
                </form>
            </div>
        </section>
    )
};

export default ProfilePage;