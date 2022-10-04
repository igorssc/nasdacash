import { ReactNode } from "react";
import { Particles } from "react-animation-particles";
import "../utils/particles/particles.js";
import { configParticles } from "../utils/particlesjs.config";
interface BackgroundParticlesProps {
  children: ReactNode;
  className?: string;
}

export const BackgroundParticles = ({
  children,
  className,
}: BackgroundParticlesProps) => {
  return (
    <>
      <div
        className={`w-full h-full"
        ${className ? className : ""}`}
      >
        <Particles config={configParticles}>{children}</Particles>
      </div>
      <div className="block md:hidden">{children}</div>
    </>
  );
};
