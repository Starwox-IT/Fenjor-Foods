import React from "react";

import RecipeBg from "../../../assets/RecipeHome.png";
import RecipeBgMobile from "../../../assets/RecipeHomeMobile.png";

const RecipeHome = () => {
    return (
        <section className="bg-white py-10 sm:py-14">
            <div className="max-w-6xl mx-auto px-4 lg:px-8">

                {/* Wrapper — rounded image container with text overlay */}
                <div className="relative w-full rounded-2xl overflow-hidden">

                    {/* Desktop image — hidden on mobile */}
                    <img
                        src={RecipeBg}
                        alt="Chefs working in the kitchen"
                        className="hidden sm:block w-full h-[420px] lg:h-[480px] object-cover"
                    />

                    {/* Mobile image — hidden on desktop */}
                    <img
                        src={RecipeBgMobile}
                        alt="Chefs working in the kitchen"
                        className="block sm:hidden w-full h-[500px] object-cover object-center"
                    />

                    {/* Bottom gradient for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Quote text — bottom left */}
                    <div className="absolute bottom-0 left-0 px-6 pb-8 sm:px-8 sm:pb-10 max-w-2xl">
                        <p className="text-white font-bold italic font-poppins text-xl sm:text-2xl lg:text-3xl leading-snug">
                            Your recipes. Our kitchen. Together, we&apos;re building
                            something meaningful.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default RecipeHome;
