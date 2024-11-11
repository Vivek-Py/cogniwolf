import Image from "next/image";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas3.png";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Guarding your code, enhancing your security.
        </p>
        {/*  <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div> */}
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex justify-between items-center">
            <Image src={Logo} alt="CogniWolf Logo" height={200} width={200} />
            <MenuIcon className="h-4 w-4 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#about">About</a>
              <a href="#showcase">Showcase</a>
              <a href="#pricing">Pricing</a>
              <a href="#testimonial">Testimonial</a>
              <a href="#contact">Follow Us</a>
              <button className="btn btn-primary">Join Waitlist</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
