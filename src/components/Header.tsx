import Link from "next/link";
import { cn } from "@/lib/utils";
import { TrendUp } from "@phosphor-icons/react/dist/ssr";
import { routes, links } from "@config";

interface Props {
    className?: string;
}

export default function Header({ className }: Props) {
    return (
        <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav
                className={cn(
                    "max-w-7xl w-full flex items-center justify-center sm:justify-between px-4 md:px-6 mx-auto border-b py-6",
                    className
                )}>
                <Link
                    href={routes.home}
                    className="rounded-xl text-xl inline-block font-bold focus:outline-none focus:opacity-80 hover:opacity-80 transition">
                    zenith ✕ bytes
                </Link>

                <a
                    href={links.zenithxtech}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:flex items-center gap-1 py-2 px-4 text-sm font-medium rounded-lg bg-card/60 focus:outline-none hover:text-primary transition text-nowrap">
                    zenith ✕ tech
                    <TrendUp />
                </a>
            </nav>
        </header>
    );
}
