import HotReloadBase from './HotReloadBase.js';

class Draw extends HotReloadBase {
	constructor() {
		super()

		this.counter = 0;
	}

	draw(canvas) {
		this.counter += 1;

		const ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height)

		ctx.fillStyle = 'green';
		const x = Math.sin(this.counter * 0.05) * 100;
		ctx.fillRect(x, 10, 150, 100);
	}

	hotReload(oldModule) {
		this.counter = oldModule.counter;
	}
}

if (import.meta.hot) {
  import.meta.hot.accept(HotReloadBase.HotReloadHandler)
}

export default Draw;