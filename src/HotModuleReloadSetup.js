class HotModuleReloadSetup {
	constructor() {
		this.modules = {};
		this.instances = {};

		document.body.addEventListener('hot-module-reload', (event) => {
			const { newModule } = event.detail;
			this.swapModule(newModule)
		});
	}

	swapModule(newModule) {
		const name = newModule.default.name;
		const oldModule = this.modules[name];
		const oldInstance = this.instances[name]
		if (!oldModule) return;

		const newInstance = new newModule.default();
  		newInstance.hotReload(oldInstance)

  		this.modules[name] = newModule
  		this.instances[name] = newInstance
	}

	import(newModule) {
		const newInstance = new newModule.default();

		const name = newModule.default.name;
		this.modules[name] = newModule
  		this.instances[name] = newInstance
	}
}

export default HotModuleReloadSetup;

export function HMREventHandler(newModule) {
	const event = new CustomEvent('hot-module-reload', { detail: { newModule } });
	document.body.dispatchEvent(event);
}