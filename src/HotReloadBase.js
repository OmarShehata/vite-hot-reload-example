class HotReloadBase {
	static HotReloadHandler(newModule) {
		const event = new CustomEvent('hot-module-reload', { detail: { newModule } });
		document.body.dispatchEvent(event);
	}

	static

	hotReload(oldModule) {}
}

export default HotReloadBase;