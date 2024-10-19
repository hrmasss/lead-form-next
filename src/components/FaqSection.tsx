import { cn } from "@/lib/utils";
import { faqs } from "@config";

interface Props {
    className?: string;
}

export default function FaqSection({ className }: Props) {
    return (
        <div className={cn("p-4 sm:p-6", className)}>
            <div className="text-center mb-7 pb-5 border-b">
                <h2 className="max-w-2xl mx-auto text-2xl font-bold md:text-3xl md:leading-tight">
                    Frequently Asked Questions
                </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 md:gap-12">
                {faqs.map((faq) => (
                    <div key={faq.question}>
                        <h3 className="text-lg font-semibold">
                            {faq.question}
                        </h3>
                        <p className="mt-2 text-foreground/60">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
