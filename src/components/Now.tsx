"use client";

import { startTransition, useEffect, useState } from "react";

export function Now() {
    const [now, setNow] = useState<number | null>(null);

    useEffect(() => {
        startTransition(() => {
            setNow(Date.now());
        });

        const id = setInterval(() => {
            startTransition(() => {
                setNow(Date.now());
            });
        }, 1000);

        return () => clearInterval(id);
    }, []);

    return (
        <time>
            {now
                ? new Date(now).toLocaleDateString("bn-BD", {
                    dateStyle: "full",
                })
                : "…"}
        </time>
    );
}