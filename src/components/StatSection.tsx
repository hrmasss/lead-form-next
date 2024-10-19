import { cn } from "@/lib/utils";
import { statSection } from "@config";
import { Quotes } from "@phosphor-icons/react/dist/ssr";

interface Props {
    className?: string;
}

export default function StatSection({ className }: Props) {
    return (
        <div className={cn("p-4 sm:p-6", className)}>
            <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center lg:justify-between">
                <div className="lg:col-span-5 lg:col-start-1">
                    <div className="mb-8">
                        <h2 className="mb-2 text-3xl font-bold lg:text-4xl">
                            {statSection.title}
                        </h2>
                        <p className="text-foreground/60">
                            {statSection.description}
                        </p>
                    </div>

                    <blockquote className="relative">
                        <Quotes
                            weight="duotone"
                            className="absolute top-0 start-0 transform -translate-x-6 -translate-y-8 size-16 text-foreground/10 rotate-180"
                        />
                        <div className="relative z-10">
                            <p className="text-xl italic text-primary">
                                {statSection.testimonial.quote}
                            </p>
                        </div>

                        <footer className="mt-6">
                            <div className="font-semibold">
                                {statSection.testimonial.author}
                            </div>
                            <div className="text-xs text-foreground/60">
                                {statSection.testimonial.position}
                            </div>
                        </footer>
                    </blockquote>
                </div>

                <div className="mt-10 lg:mt-0 lg:col-span-6 lg:col-end-13">
                    <div className="space-y-6 sm:space-y-8">
                        <ul className="grid grid-cols-2 divide-y divide-x divide-border overflow-hidden">
                            {statSection.stats.map((stat) => (
                                <li
                                    key={stat.label}
                                    className="flex flex-col items-center -m-0.5 p-4 sm:p-8">
                                    <div className="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold mb-2">
                                        {stat.value}
                                    </div>
                                    <p className="text-sm sm:text-base font-semibold text-foreground/60">
                                        {stat.label}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
