import { ReactNode, useEffect } from "react";
import "../utils/particles/particles.js";
import { configParticles } from "../utils/particles/particlesjs.config.js";

interface BackgroundParticlesProps {
  children: ReactNode;
  className?: string;
}

export const BackgroundParticles = ({
  children,
  className,
}: BackgroundParticlesProps) => {
  useEffect(() => {
    setTimeout(() => {
      // @ts-ignore:next-line
      particlesJS.load("particles-js", configParticles, function () {});
    }, 1000);
  }, []);

  return (
    <>
      <div className="hidden md:block">
        <div
          id="particles-js"
          className={`w-full h-full"
        ${className ? className : ""}`}
        >
          <canvas
            className={`particles-js-canvas-el w-full absolute`}
            height={0}
          ></canvas>
          {children}
        </div>
      </div>
      <div className="block md:hidden">{children}</div>
    </>
  );
};
