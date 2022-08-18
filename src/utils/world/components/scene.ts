import { Fog, Scene } from "three";

function createScene() {
  const scene = new Scene();
  scene.fog = new Fog(0xffffff, 400, 2000);

  return scene;
}

export { createScene };
