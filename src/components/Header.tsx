import Typist from "react-typist";
import heroGlow from "../assets/hero-glow.svg";
import logoImg from "../assets/logo.png";
import { World } from "../utils/world";

export const Header = () => {
  return (
    <div className="overflow-hidden relative py-28 bg-header">
      <img
        src={heroGlow}
        alt="glow from background"
        className="absolute w-[200%] top-[50%] left-[50%] z-10 -translate-x-2/4 -translate-y-2/4 scale-[2]"
      />
      <div className="grid md:grid-cols-2 min-h-[40rem] container mx-auto">
        <div className="flex flex-col text-center items-center justify-center gap-10 z-20">
          <img
            src={logoImg}
            alt="Logo from Nasdacash"
            className="w-52 max-w-full h-auto relative z-10"
          />
          <h1 className="text-6xl leading-relaxed text-center relative z-10 tracking-wider">
            <Typist startDelay={1000} className="typist">
              <span className="font-black">
                The{" "}
                <span className="text-tertiary">
                  cryptocurrency
                  <Typist.Backspace count={5} delay={1000} />
                  <Typist.Delay ms={750} />
                  rency
                </span>
              </span>
              <br />
              <span className="font-regular">of the future!</span>
            </Typist>
          </h1>
          <p className="text-xl font-light leading-8">
            Polkadot unites and secures a growing ecosystem of specialized
            blockchains called parachains. Apps and services on Polkadot can
            securely communicate across chains, forming the basis for a truly
            interoperable decentralized web.
          </p>
        </div>
        <div className="flex items-center justify-center z-20">
          <World />
        </div>
      </div>
    </div>
  );
};
