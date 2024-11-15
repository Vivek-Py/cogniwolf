"use client";
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Join waitlist for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "2x weekly scans and fixes",
      "Single Project",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 299,
    buttonText: "Join waitlist now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Upto 5 projects",
      "Daily Scans and Fixes",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: null,
    buttonText: "Contact now",
    popular: false,
    inverse: false,
    features: [
      "Unlimited project members",
      "Unlmited projects",
      "Trigger scans and fixes on merge",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="bg-white scroll-mt-[40px]">
      <div className="container py-24">
        <div className="section-heading">
          <h2 className="section-title">Pricing</h2>
          <p className="section-description mt-5">
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website in just minutes with the set of free components
            for Framer.
          </p>
        </div>

        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            (
              { title, monthlyPrice, buttonText, popular, inverse, features },
              idx
            ) => {
              return (
                <div
                  key={`pricing-${idx}`}
                  className={twMerge(
                    "card",
                    inverse === true && "border-black bg-black text-white"
                  )}
                >
                  <div className="flex justify-between">
                    <h3
                      className={twMerge(
                        "text-lg font-bold text-black/50",
                        inverse === true && "text-white/60"
                      )}
                    >
                      {title}
                    </h3>
                    {popular && (
                      <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                        <motion.span
                          className="bg-[linear-gradient(to_right,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff)] [background-size:200%] text-transparent bg-clip-text font-medium"
                          animate={{
                            backgroundPositionX: "100%",
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop",
                          }}
                        >
                          Popular
                        </motion.span>
                      </div>
                    )}
                  </div>
                  {monthlyPrice !== null && (
                    <div className="flex items-baseline gap-1 mt-[30px">
                      <span className="text-4xl font-bold tracking-tighter leading-none">
                        ${monthlyPrice}
                      </span>
                      <span className="tracking-tight font-bold text-black/50">
                        /month
                      </span>
                    </div>
                  )}
                  <button
                    className={twMerge(
                      "btn btn-primary w-full mt-[30px]",
                      inverse === true && "bg-white text-black"
                    )}
                  >
                    {buttonText}
                  </button>
                  <ul className="flex flex-col gap-5 mt-8">
                    {features.map((feature, idx) => (
                      <li
                        key={`feature-${idx}`}
                        className="text-sm flex items-center gap-4"
                      >
                        <CheckIcon className="w-6 h-6" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};
