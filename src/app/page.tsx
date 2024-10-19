import HeroSection from "@/components/HeroSection";
import StatSection from "@/components/StatSection";
import FaqSection from "@/components/FaqSection";

export default function Home() {
    return (
        <div className="space-y-6 sm:space-y-12 py-12">
            <HeroSection />

            <StatSection />

            <div id="faq-section">
                <FaqSection />
            </div>
        </div>
    );
}
