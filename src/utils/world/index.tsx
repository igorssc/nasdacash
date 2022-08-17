import { useEffect } from "react";
import { World as GlobeWorld } from "./world";

export const World = () => {
  useEffect(() => {
    if (!document.getElementById("globe-canvas")) {
      const container = document.querySelector("#scene-container");
      const world = new GlobeWorld(container as Element);
      world.start();
    }
  }, []);

  return <div id="scene-container" className="h-full w-full"></div>;
};
