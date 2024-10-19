import { cn } from "@/lib/utils";
import { contactSection } from "@config";
import LeadForm from "@/components/LeadForm";
import { TrendUp } from "@phosphor-icons/react/dist/ssr";

interface Props {
    className?: string;
}

export default function HeroSection({ className }: Props) {
    return (
        <div className={cn("p-4 sm:p-6", className)}>
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-16">
                <div className="space-y-6">
                    <h1 className="font-bold text-2xl sm:text-3xl">
                        {contactSection.title}
                    </h1>

                    <p className="text-foreground/60">
                        {contactSection.description}
                    </p>

                    <div className="space-y-6">
                        {contactSection.contacts.map((option) => (
                            <div className="flex gap-4">
                                <option.icon
                                    weight="duotone"
                                    className="size-6 mt-1.5 text-primary"
                                />
                                <div className="grow">
                                    <h3 className="font-semibold">
                                        {option.label}
                                    </h3>
                                    <a
                                        className="group flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-primary focus:outline-none focus:text-primary"
                                        href={option.href}>
                                        {option.value}
                                        <TrendUp className="group-hover:translate-x-1 transition duration-300 size-4" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <LeadForm />
            </div>
        </div>
    );
}
