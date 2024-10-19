import type { Route } from "next";
import type { Icon } from "@phosphor-icons/react";

export type Routes = Record<string, Route>;

export type Links = Record<string, string>;

export type FAQ = {
    question: string;
    answer: string;
};

export type Testimonial = {
    quote: string;
    author: string;
    position: string;
};

export type ContactSection = {
    title: string;
    description: string;
    contacts: {
        icon: Icon;
        label: string;
        value: string;
        href: string;
    }[];
};

export type StatSection = {
    title: string;
    description: string;
    testimonial: Testimonial;
    stats: {
        label: string;
        value: string;
    }[];
};
