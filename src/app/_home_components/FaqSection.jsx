
import { Calendar, Car, ChevronDown, CreditCard, FileText, LifeRing, ShieldCheck } from "@gravity-ui/icons";
import { Accordion } from "@heroui/react";
import { montserrat } from "../layout";

const faqItems = [
    {
        content:
            "You can easily browse our available fleet, select your preferred vehicle, choose your rental dates, and complete the booking process in just a few clicks.",
        icon: <Car />,
        title: "How do I book a car on AutoHive?",
    },
    {
        content:
            "Yes, you can modify or cancel your booking through your dashboard before the rental period begins. Please check our cancellation policy for details.",
        icon: <Calendar />,
        title: "Can I modify or cancel my reservation?",
    },
    {
        content:
            "We accept all major credit cards, debit cards, and secure digital payment methods to ensure a smooth and safe transaction experience.",
        icon: <CreditCard />,
        title: "What payment methods are accepted?",
    },
    {
        content:
            "All rentals include standard third-party insurance coverage. You also have the option to upgrade to comprehensive coverage during checkout for extra peace of mind.",
        icon: <ShieldCheck />,
        title: "Is insurance included with the car rental?",
    },
    {
        content:
            "Yes! If you own a vehicle, you can list it on our platform, set your own availability and pricing, and manage your listings securely from your account dashboard.",
        icon: <FileText />,
        title: "How can I list my own car for rent?",
    },
    {
        content:
            "Our customer support team is available 24/7 via live chat and phone to assist you with any roadside emergencies or questions during your trip.",
        icon: <LifeRing />,
        title: "What should I do if I need roadside assistance?",
    },
];

export function FaqSection() {
    return (
        <section className="section-bg py-16">
            <div className="app-container flex flex-col items-center">
                <div className="text-center mb-10">

                    <h2 className={`${montserrat.className} text-3xl md:text-4xl font-bold mt-2 tracking-tight`}>
                        Frequently Asked Questions
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400 mt-4 text-sm leading-relaxed">
                       Got questions about renting or listing a car? Find answers to common
                        inquiries below.
                    </p>
                </div>

                <Accordion className="w-full max-w-2xl">
                    {faqItems.map((item, index) => (
                        <Accordion.Item
                            key={index}
                            className="card-primary mb-4 rounded-lg px-4"
                        >
                            <Accordion.Heading>
                                <Accordion.Trigger className="flex items-center justify-between w-full py-4 text-left font-medium text-primary cursor-pointer">
                                    <div className="flex items-center">
                                        {item.icon ? (
                                            <span className="me-3 size-5 shrink-0 text-secondary">
                                                {item.icon}
                                            </span>
                                        ) : null}
                                        <span>{item.title}</span>
                                    </div>
                                    <Accordion.Indicator className="text-secondary size-4 shrink-0 transition-transform duration-200">
                                        <ChevronDown />
                                    </Accordion.Indicator>
                                </Accordion.Trigger>
                            </Accordion.Heading>
                            <Accordion.Panel>
                                <Accordion.Body className="pb-4 text-secondary text-sm leading-relaxed">
                                    {item.content}
                                </Accordion.Body>
                            </Accordion.Panel>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}