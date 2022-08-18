import { CaretDown } from "phosphor-react";
import { useEffect, useState } from "react";
import logoImg from "../assets/logo.png";
import { BackgroundParticles } from "../components/BackgroundParticles";

export const Details = () => {
  const [heightBackground, setHeightBackground] = useState(0);

  const handleWindowSizeChange = () => {
    setHeightBackground(
      document.getElementsByTagName("header")[0].getBoundingClientRect().height
    );
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <div>
      <BackgroundParticles heightBackground={heightBackground}>
        <header className="min-h-screen max-w-[1100px] m-auto flex flex-col justify-around items-center ">
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
          <div className="h-56 flex justify-center items-center">
            <CaretDown size={90} color="#fff" />
          </div>
        </header>
      </BackgroundParticles>
    </div>
  );
};
