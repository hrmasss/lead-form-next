import { Envelope, Phone, Question } from "@phosphor-icons/react/dist/ssr";
import type { Routes, Links, ContactSection, StatSection, FAQ } from "@types";

export const routes: Routes = {
    home: "/",
};

export const links: Links = {
    zenithxtech: "https://zenithx.tech",
};

export const socials: Links = {
    Facebook: "#",
    "X (Twitter)": "#",
    LinkedIn: "#",
};

export const contactSection: ContactSection = {
    title: "Let's Bring Your Vision to Life",
    description:
        "Ready to transform your ideas into powerful web applications? Fill out our project form and let's get started on your digital journey.",
    contacts: [
        {
            icon: Envelope,
            label: "Contact us by email",
            value: "zenithxtech@gmail.com",
            href: "mailto:zenithxtech@gmail.com",
        },
        {
            icon: Phone,
            label: "Give us a call",
            value: "+8801688784512",
            href: "tel:+8801688784512",
        },
        {
            icon: Question,
            label: "Visit our FAQ",
            value: "Get quick answers",
            href: "/#faq-section",
        },
    ],
};

export const statSection: StatSection = {
    title: "Excellence in Web Development",
    description:
        "We create cutting-edge web applications that drive business growth with high-quality, efficient solutions.",
    testimonial: {
        quote: "Their web app expertise is unmatched. They delivered ahead of schedule and exceeded expectations.",
        author: "Alamgir Hossain",
        position: "CTO | Btpr Inc.",
    },
    stats: [
        {
            label: "Countries Served",
            value: "4+",
        },
        {
            label: "Satisfied Clients",
            value: "12+",
        },
        {
            label: "Client Retention",
            value: "100%",
        },
        {
            label: "Support Available",
            value: "24/7",
        },
    ],
};

export const faqs: FAQ[] = [
    {
        question: "What types of web applications do you specialize in?",
        answer: "We specialize in e-commerce platforms, CMS, CRM tools, and custom enterprise solutions, covering both front-end and back-end development.",
    },
    {
        question: "How long does a web app project take?",
        answer: "Timelines vary: simple apps may take 4-8 weeks, while complex projects can take 3-6 months. We provide detailed timelines during consultation.",
    },
    {
        question: "Do you offer post-launch support?",
        answer: "Yes, we provide maintenance packages that include updates, security patches, optimization, and ongoing technical support.",
    },
    {
        question: "Can you work with our design?",
        answer: "We can implement existing designs or create custom ones through our UI/UX team, collaborating to refine your vision.",
    },
    {
        question: "What technologies do you use?",
        answer: "We primarily use Python, JavaScript, TypeScript, etc. Our main focuses are Django, Next.js & Astro, but we offer solutions tailored to custom requirements.",
    },
    {
        question: "Do you handle deployment and scaling?",
        answer: "Yes, we use cloud platforms like AWS and Azure for deployment and scaling to ensure optimal performance.",
    },
];
