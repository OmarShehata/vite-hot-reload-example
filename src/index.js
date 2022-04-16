

const canvas = document.createElement('canvas')
document.body.appendChild(canvas);

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Listen for hot module reload of patterns
let activeModule = await import('./Draw.js');
let activeInstance = new activeModule.default();

document.body.addEventListener('hot-module-reload', (event) => {
  const { newModule } = event.detail;
  // If the module that changed is not the one currently active, ignore it
  if (activeModule.default.name != newModule.default.name) {
    return;
  }
  const newInstance = new newModule.default();
  newInstance.hotReload(activeInstance)
  activeInstance = newInstance;

  activeModule = newModule;
});

function draw() {
  activeInstance.draw(canvas);

  requestAnimationFrame(draw);
}

draw();
