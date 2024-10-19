import { cn } from "@/lib/utils";

interface Props {
    className?: string;
}

export default function LeadForm({ className }: Props) {
    return (
        <form
            className={cn(
                "flex flex-col border bg-card rounded-xl p-4 sm:p-6 lg:p-8 space-y-4",
                className
            )}>
            <div>
                <label
                    htmlFor="name"
                    className="sr-only">
                    Full name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full name"
                    className="py-3 px-4 block w-full border rounded-lg text-sm bg-inherit focus:border-primary focus:ring-2 ring-primary disabled:opacity-50 disabled:pointer-events-none outline-none"
                />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
                <div>
                    <label
                        htmlFor="email"
                        className="sr-only">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        placeholder="Email"
                        className="py-3 px-4 block w-full border rounded-lg text-sm bg-inherit focus:border-primary focus:ring-2 ring-primary disabled:opacity-50 disabled:pointer-events-none outline-none"
                    />
                </div>
                <div>
                    <label
                        htmlFor="phone"
                        className="sr-only">
                        Phone number
                    </label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Phone number"
                        className="py-3 px-4 block w-full border rounded-lg text-sm bg-inherit focus:border-primary focus:ring-2 ring-primary disabled:opacity-50 disabled:pointer-events-none outline-none"
                    />
                </div>
            </div>

            <div>
                <label
                    htmlFor="details"
                    className="sr-only">
                    Details
                </label>
                <textarea
                    rows={2}
                    id="details"
                    name="details"
                    placeholder="Project details"
                    className="py-3 px-4 block w-full border rounded-lg text-sm bg-inherit focus:border-primary focus:ring-2 ring-primary disabled:opacity-50 disabled:pointer-events-none outline-none"
                />
            </div>

            <div>
                <label
                    htmlFor="phone"
                    className="sr-only">
                    Project reference
                </label>
                <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Project reference"
                    className="py-3 px-4 block w-full border rounded-lg text-sm bg-inherit focus:border-primary focus:ring-2 ring-primary disabled:opacity-50 disabled:pointer-events-none outline-none"
                />
            </div>

            <button
                type="submit"
                className="w-full py-3 px-4 inline-flex justify-center items-center text-sm font-medium rounded-lg bg-primary hover:bg-primary/80 focus:outline-none focus:bg-primary/80 transition text-background">
                Submit
            </button>

            <p className="text-sm text-foreground/60 text-center">
                We'll get back to you in 2 business days.
            </p>
        </form>
    );
}
