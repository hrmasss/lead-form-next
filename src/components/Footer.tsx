import ThemeToggle from "@/components/ThemeToggle";
import { socials } from "@config";
import { cn } from "@/lib/utils";

interface Props {
    className?: string;
}

export default function Footer({ className }: Props) {
    return (
        <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
                className={cn(
                    "flex flex-col sm:flex-row justify-between items-center gap-2 py-6 border-t",
                    className
                )}>
                <div>
                    <p className="text-sm text-foreground/60">
                        © 2024 zenith ✕ bytes.
                    </p>
                </div>

                <ul className="flex flex-wrap items-center">
                    {socials.map((social, index) => (
                        <li
                            className={`inline-block relative pe-4 text-sm ${
                                index !== socials.length - 1
                                    ? "before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 before:size-[3px] before:rounded-full before:bg-foreground/40"
                                    : "last:pe-0 last-of-type:before:hidden"
                            }`}>
                            <a
                                className="text-sm text-foreground/60 underline hover:text-foreground hover:decoration-2 hover:decoration-primary focus:outline-none focus:decoration-2 decoration-foreground/60"
                                href={social.href}>
                                {social.name}
                            </a>
                        </li>
                    ))}

                    <li className="inline-block">
                        <ThemeToggle />
                    </li>
                </ul>
            </div>
        </footer>
    );
}
