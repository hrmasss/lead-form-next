import { Envelope, Phone, Question } from "@phosphor-icons/react/dist/ssr";

export const links = {
    home: "/",
    zenithxtech: "https://zenithx.tech",
};

export const socials = [
    { name: "Facebook", href: "#" },
    { name: "X (Twitter)", href: "#" },
    { name: "LinkedIn", href: "#" },
];

export const contacts = {
    title: "Let's Bring Your Vision to Life",
    description:
        "Ready to transform your ideas into powerful web applications? Fill out our project form and let's get started on your digital journey.",
    contacts: [
        {
            icon: Envelope,
            title: "Contact us by email",
            value: "zenithxtech@gmail.com",
            link: "mailto:zenithxtech@gmail.com",
        },
        {
            icon: Phone,
            title: "Give us a call",
            value: "+8801688784512",
            link: "tel:+8801688784512",
        },
        {
            icon: Question,
            title: "Visit our FAQ",
            value: "Get quick answers",
            link: "/#faq-section",
        },
    ],
};

export const stats = {
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
            value: "4+",
            label: "Countries Served",
        },
        {
            value: "12+",
            label: "Satisfied Clients",
        },
        {
            value: "100%",
            label: "Client Retention",
        },
        {
            value: "24/7",
            label: "Support Available",
        },
    ],
};
export const faqs = [
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
