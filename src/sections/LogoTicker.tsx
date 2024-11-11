"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import acmeLogo from "@/assets/logo-acme.png";
import quantLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celesLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src={acmeLogo}
              className="logo-ticker-image"
              alt="acme logo"
            />
            <Image
              src={echoLogo}
              className="logo-ticker-image"
              alt="echo logo"
            />
            <Image
              src={celesLogo}
              className="logo-ticker-image"
              alt="celes logo"
            />
            <Image
              src={pulseLogo}
              className="logo-ticker-image"
              alt="pulse logo"
            />
            <Image
              src={quantLogo}
              className="logo-ticker-image"
              alt="quant logo"
            />
            <Image
              src={apexLogo}
              className="logo-ticker-image"
              alt="apex logo"
            />
            {/* Second set of logos for animation */}
            <Image
              src={acmeLogo}
              className="logo-ticker-image"
              alt="acme logo"
            />
            <Image
              src={echoLogo}
              className="logo-ticker-image"
              alt="echo logo"
            />
            <Image
              src={celesLogo}
              className="logo-ticker-image"
              alt="celes logo"
            />
            <Image
              src={pulseLogo}
              className="logo-ticker-image"
              alt="pulse logo"
            />
            <Image
              src={quantLogo}
              className="logo-ticker-image"
              alt="quant logo"
            />
            <Image
              src={apexLogo}
              className="logo-ticker-image"
              alt="apex logo"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
