import React from 'react';

const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-0.5">
        <path d="M10 18A8 8 0 1010 2a8 8 0 000 16z" stroke="#579A62" strokeWidth="1.5" />
        <path d="M6.5 10l2.5 2.5 4.5-4.5" stroke="#579A62" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const plans = [
    {
        name: "Hourly",
        description: "Perfect for testing recipes or small batch production",
        price: "$35",
        period: "/hour",
        features: [
            "Access to all equipment",
            "Cold storage during session",
            "Cleaning supplies included",
            "Flexible scheduling"
        ],
        buttonText: "Book Hourly",
        isPopular: false
    },
    {
        name: "Half Day",
        description: "Ideal for regular production runs and catering prep",
        price: "$150",
        period: "/ 4 hour",
        features: [
            "All hourly benefits",
            "Reserved time block",
            "Storage between sessions",
            "Priority booking",
            "15% savings vs hourly"
        ],
        buttonText: "Book Half Day",
        isPopular: true
    },
    {
        name: "Full day",
        description: "Best value for large-scale production and events",
        price: "$250",
        period: "/ 8 hour",
        features: [
            "All half-day benefits",
            "Extended storage access",
            "Exclusive use period",
            "Delivery coordination",
            "25% savings vs hourly"
        ],
        buttonText: "Book Full Day",
        isPopular: false
    }
];

const PricingOptions = () => {
    return (
        <section className="bg-[#FAFBF9] py-16 sm:py-24">
            <div className="max-w-6xl mx-auto px-4 lg:px-8">

                {/* ── Cards Grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                    {plans.map((plan, i) => (
                        <div key={i} className={`relative flex flex-col h-full ${plan.isPopular ? 'z-10' : 'md:pb-12 lg:pb-16'}`}>
                            {plan.isPopular ? (
                                // ── Most Popular Highlight Wrapper ──
                                <div className="bg-(--color-primary) rounded-[20px] flex flex-col pt-3 pb-2 px-2 h-full">
                                    <div className="text-white text-center text-xs font-semibold font-primary pb-3 leading-none">
                                        Most popular
                                    </div>
                                    <div className="bg-white rounded-2xl h-full p-6 lg:p-8 flex flex-col justify-between">
                                        <CardContent plan={plan} />
                                    </div>
                                </div>
                            ) : (
                                // ── Standard Card ──
                                <div className="bg-white rounded-2xl border border-gray-200 h-full p-6 lg:p-8 flex flex-col justify-between">
                                    <CardContent plan={plan} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

// Extracted inner content to avoid repeating HTML
const CardContent = ({ plan }) => (
    <>
        <div>
            <h3 className="text-gray-900 font-bold font-poppins text-2xl mb-3">
                {plan.name}
            </h3>
            <p className="text-gray-600 font-primary text-sm leading-relaxed mb-6 min-h-[40px]">
                {plan.description}
            </p>
            <div className="flex items-baseline gap-1 mb-8">
                <span className="text-gray-900 font-bold font-poppins text-4xl leading-none">
                    {plan.price}
                </span>
                <span className="text-gray-600 font-primary text-sm">
                    {plan.period}
                </span>
            </div>

            <ul className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="text-gray-600 font-primary text-sm">
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>
        </div>

        <button
            className={`w-full cursor-pointer py-3.5 rounded-xl font-semibold font-primary text-sm transition-all duration-200
                ${plan.isPopular
                    ? "bg-(--color-primary) text-white hover:bg-[#4a8754]"
                    : "bg-white text-(--color-primary) border border-(--color-primary) hover:bg-gray-50"
                }
            `}
        >
            {plan.buttonText}
        </button>
    </>
);

export default PricingOptions;
