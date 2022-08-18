import { AmbientLight, DirectionalLight, PointLight } from "three";

function createLights() {
  const ambientLight = new AmbientLight(0x000000, 0.6);

  const dLight = new DirectionalLight(0xffffff, 0.6);
  dLight.position.set(-400, 100, 400);

  const dLight1 = new DirectionalLight(0xffffff, 1);
  dLight1.position.set(-200, 500, 200);

  const dLight2 = new PointLight(0xffffff, 0.8);
  dLight2.position.set(-200, 500, 200);

  return { ambientLight, dLight, dLight1, dLight2 };
}

export { createLights };
