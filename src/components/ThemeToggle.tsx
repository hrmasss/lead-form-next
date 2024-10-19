"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Sun, MoonStars } from "@phosphor-icons/react";

interface Props {
    className?: string;
}

export default function ThemeToggle({ className }: Props) {
    const { setTheme } = useTheme();

    return (
        <>
            <button
                type="button"
                onClick={() => setTheme("dark")}
                className={cn(
                    "flex dark:hidden relative justify-center items-center size-6 border text-foreground/60 rounded-full hover:bg-primary/20 focus:outline-none focus:bg-primary/20 hover:ring-2 ring-primary focus:ring-2 text-sm",
                    className
                )}>
                <MoonStars />
            </button>
            <button
                type="button"
                onClick={() => setTheme("light")}
                className={cn(
                    "hidden dark:flex relative justify-center items-center size-6 border text-foreground/60 rounded-full hover:bg-primary/20 focus:outline-none focus:bg-primary/20 hover:ring-2 ring-primary focus:ring-2 text-sm",
                    className
                )}>
                <Sun />
            </button>
        </>
    );
}
