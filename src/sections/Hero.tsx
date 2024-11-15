"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      id="about"
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip scroll-mt-[140px]"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">Releasing soon</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Find, Fix, and Fortify Code
            </h1>
            <p className="text-xl text-[#0103DE] tracking-tight mt-6">
              Achieve seamless code quality with an app that automatically
              detects and fixes bugs, resolves issues, and generates detailed
              reports on your progress.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Join Waitlist</button>
             {/*  <button className="btn btn-text gap-1">
                Learn more
                <span>
                  <ArrowIcon className="h-5 w-5" />
                </span>
              </button> */}
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={cogImage.src}
              alt="cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              initial={{ translateY: -30 }}
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 2,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={cylImage.src}
              width={220}
              height={220}
              alt="cylinder image"
              className="hidden md:block -top-8 -left-20 absolute"
              initial={{
                translateY: 0,
              }}
              style={{
                translateY,
              }}
            />
            <motion.img
              src={noodleImage.src}
              width={220}
              alt="noddle image"
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
              initial={{
                translateY: 0,
              }}
              style={{
                rotate: 30,
                translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
