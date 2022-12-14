import heroGlow from "../assets/hero-glow.svg";
import logoImg from "../assets/logo.png";
import { World } from "../utils/world";
import { Slogan } from "./Slogan";

export const Header = () => {
  return (
    <>
      <div className="overflow-hidden relative py-10 lg:pb-28 lg:pt-16 bg-header">
        <img
          src={heroGlow}
          alt="glow from background"
          className="absolute w-[200%] top-[50%] left-[50%] z-10 -translate-x-2/4 -translate-y-2/4 scale-[2]"
        />
        <div className="grid lg:grid-cols-2 min-h-[40rem] lg:container mx-auto">
          <div className="flex flex-col items-center justify-center gap-10 z-20 px-4 lg:px-0">
            <img
              src={logoImg}
              alt="Logo from Nasdacash"
              className="w-52 max-w-full h-auto relative z-10"
            />
            <h1 className="text-3xl md:text-6xl text-center relative z-10 tracking-wider">
              <Slogan />
            </h1>
            <p className="text-xl leading-8 text-justify sm:text-center">
              Nasdacash is known as a digital currency with a focus on Ease of
              use, anonymity and transaction speed. These features are
              implemented on a network of dedicated servers known as
              masternodes, which gives rise to many exciting features that are
              not available on conventional blockchains.
            </p>
          </div>
          <div className="w-full flex items-center justify-center z-20 h-60 sm:h-72 lg:h-auto -bottom-24 sm:-bottom-44 md:-bottom-56 lg:bottom-0 relative">
            <World />
          </div>
        </div>
      </div>
    </>
  );
};
