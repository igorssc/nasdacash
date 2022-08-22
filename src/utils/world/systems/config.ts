const aspect = 1.2;
const cameraZ = 300;

const container = () => document.getElementById("scene-container");

const canvasWidth = () =>
  window.innerWidth > 1024
    ? container()?.offsetHeight ?? 500
    : window.innerWidth > 640
    ? window.innerWidth
    : window.innerWidth * 1.3;
const canvasHeight = () => canvasWidth() / aspect;

console.log(container()?.offsetHeight ?? 500);

// const canvasHeight = () => container()?.offsetHeight ?? 500;
// const canvasWidth = () => canvasHeight() * aspect;

export { aspect, cameraZ, canvasWidth, canvasHeight };
