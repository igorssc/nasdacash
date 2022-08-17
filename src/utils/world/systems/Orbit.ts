import { PerspectiveCamera } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

class Orbit extends OrbitControls {
  constructor(camera: PerspectiveCamera, canvas: HTMLCanvasElement) {
    super(camera, canvas);
  }

  tick = () => this.update();
}

export { Orbit };
