import "@/styles/global.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "zenith ✕ bytes",
    description:
        "A lead form to collect information about clients and projects for zenith ✕ bytes.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning>
            <body>
                <ThemeProvider
                    enableSystem
                    attribute="class"
                    defaultTheme="system">
                    <Header />
                    <main className="max-w-7xl px-4 md:px-8 mx-auto">
                        {children}
                    </main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
