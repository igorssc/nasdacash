const aspect = 1.2;
const cameraZ = 300;

const container = () => document.getElementById("scene-container");

// const canvasWidth = () => window.innerWidth / 1.8;
// const canvasHeight = () => canvasWidth() / aspect;

const canvasHeight = () => container()?.offsetHeight ?? 500;
const canvasWidth = () => canvasHeight() * aspect;

export { aspect, cameraZ, canvasWidth, canvasHeight };
