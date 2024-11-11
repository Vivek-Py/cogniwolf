import Image from "next/image";
import logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import SocialLi from "@/assets/social-linkedin.svg";
import SocialYt from "@/assets/social-youtube.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialIg from "@/assets/social-insta.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#bcbcbc] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:w-full before:top-2 before:bottom-0 before:blur before:bg-[linear-gradient(to_right,#f87bff,#fb92cf,#ffdd9b,#c2f0b1,#2fd8fe)] before:absolute">
          <Image src={logo} height={40} alt="saas logo" className="relative" />
        </div>

        <nav className="flex flex-col gap-6 mt-6 md:flex-row md:justify-center">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
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
