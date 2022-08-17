import { PerspectiveCamera, WebGLRenderer } from "three";
import { aspect, canvasHeight, canvasWidth } from "./config";

const setSize = (camera: PerspectiveCamera, renderer: WebGLRenderer) => {
  camera.aspect = aspect;
  camera.updateProjectionMatrix();

  renderer.setSize(canvasWidth(), canvasHeight());
  renderer.setPixelRatio(window.devicePixelRatio);
};

class Resizer {
  constructor(camera: PerspectiveCamera, renderer: WebGLRenderer) {
    // set initial size
    setSize(camera, renderer);

    window.addEventListener("resize", () => {
      // set the size again if a resize occurs
      setSize(camera, renderer);
      // perform any custom actions
      this.onResize();
    });
  }

  onResize() {}
}

export { Resizer };
