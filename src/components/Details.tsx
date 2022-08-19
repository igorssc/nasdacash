import logoImg from "../assets/logo.png";
import { BackgroundParticles } from "../components/BackgroundParticles";

export const Details = () => {
  return (
    <div>
      <BackgroundParticles>
        <div className="max-w-[1100px] m-auto flex flex-col justify-around items-center ">
          <img
            src={logoImg}
            alt="Logo from Nasdacash"
            className="w-96 max-w-full h-auto relative z-10"
          />

          <h1 className="text-5xl leading-relaxed text-center relative z-10">
            <span className="block font-black">
              The <span className="text-tertiary">cryptocurrency</span>
            </span>
            <span className="font-regular">of the future!</span>
          </h1>
          {/* <div className="flex items-center justify-center">
            <img
              src={networkImg}
              alt="Network from cryptocurrency"
              className="w-[40rem] max-w-full h-auto"
            />
          </div> */}
        </div>
      </BackgroundParticles>
    </div>
  );
};
