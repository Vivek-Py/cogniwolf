import Image from "next/image";
import logo from "@/assets/logosaas3-dark.png";
import SocialX from "@/assets/social-x.svg";
import SocialLi from "@/assets/social-linkedin.svg";
import SocialYt from "@/assets/social-youtube.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialIg from "@/assets/social-insta.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#bcbcbc] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:w-full before:top-2 before:bottom-0 before:blur before:absolute">
          <Image src={logo} height={40} alt="saas logo" className="relative" />
        </div>

        <nav className="flex flex-col gap-6 mt-6 md:flex-row md:justify-center">
          <a href="#about">About</a>
          <a href="#showcase">Showcase</a>
          <a href="#pricing">Pricing</a>
          <a href="#testimonial">Testimonial</a>
          <a href="#contact">Follow Us</a>
        </nav>
      </div>
      <div className="flex justify-center gap-6 mt-6">
        <SocialX />
        <SocialLi />
        <SocialYt />
        <SocialPin />
        <SocialIg />
      </div>
      <p className="mt-6">&copy; 2024 CogniWolf, Inc. All rights reserved.</p>
    </footer>
  );
};
