const aspect = 1.2;
const cameraZ = 300;

const container = () => document.getElementById("scene-container");

const canvasWidth = () =>
  window.innerWidth /
  (window.innerWidth > 1024 ? 1.8 : window.innerWidth > 640 ? 1 : 1.3);
const canvasHeight = () => canvasWidth() / aspect;

// const canvasHeight = () => container()?.offsetHeight ?? 500;
// const canvasWidth = () => canvasHeight() * aspect;

export { aspect, cameraZ, canvasWidth, canvasHeight };
