import HotModuleReloadSetup from './HotModuleReloadSetup.js';

async function init() {
  // Setup HMR
  const hmr = new HotModuleReloadSetup();
  // Load a module that will be updated dynamically
  hmr.import(await import('./Draw.js'));
  // Now we access it through hmr.instances['Draw']
  // which will point to the new module when it gets swapped
  function draw() {
    hmr.instances['Draw'].draw(canvas);
    requestAnimationFrame(draw);
  }

  // Setup the canvas & render loop
  const canvas = document.createElement('canvas')
  document.body.appendChild(canvas);
  draw();

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

}

init()