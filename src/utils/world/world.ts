import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { createCamera } from "./components/camera";
import { Globe } from "./components/globe";
import { createLights } from "./components/lights";
import { createScene } from "./components/scene";
import { createControls } from "./systems/controls";
import { Loop } from "./systems/loop";
import { Orbit } from "./systems/Orbit";
import { createRenderer } from "./systems/renderer";
import { Resizer } from "./systems/resizer";
import { pointOfView } from "./systems/utils";

let camera: PerspectiveCamera;
let controls: Orbit;
let renderer: WebGLRenderer;
let scene: Scene;
let loop: Loop;
let globe: Globe;

class World {
  constructor(container: Element) {
    renderer = createRenderer();
    scene = createScene();
    camera = createCamera();

    loop = new Loop(camera, scene, renderer);
    controls = createControls(camera, renderer.domElement);
    controls.update();
    loop.updatables.push(controls);

    const { ambientLight, dLight, dLight1, dLight2 } = createLights();
    camera.add(ambientLight, dLight, dLight1, dLight2);

    globe = new Globe();
    globe.init();
    loop.updatables.push(globe.instance);

    scene.add(camera, globe.instance);

    pointOfView(
      camera,
      controls,
      globe.instance,
      // Brazil
      // { lat: -22.9068, lng: -43.1729 },
      { lat: 22.3193, lng: 114.1694 },
      1000
    ); // China HongKong

    const resizer = new Resizer(camera, renderer);

    container.append(renderer.domElement);
  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
