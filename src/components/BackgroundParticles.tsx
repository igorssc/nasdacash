import { ReactNode, useEffect } from "react";
import "../utils/particles/particles.js";
import { configParticles } from "../utils/particles/particlesjs.config.js";

interface BackgroundParticlesProps {
  children: ReactNode;
  heightBackground: number;
  className?: string;
}

export const BackgroundParticles = ({
  children,
  heightBackground,
  className,
}: BackgroundParticlesProps) => {
  useEffect(() => {
    // @ts-ignore:next-line
    particlesJS.load("particles-js", configParticles, function () {
      // console.log("callback - particles-js config loaded");
    });
  }, []);

  return (
    <>
      <div
        id="particles-js"
        className={`w-full h-${
          heightBackground ? "[" + String(heightBackground) + "px]" : "full"
        } ${className ? className : ""}`}
      >
        <canvas
          className="particles-js-canvas-el w-full h-full absolute"
          width="1013"
          height={String(heightBackground)}
        ></canvas>
        {children}
      </div>
    </>
  );
};
