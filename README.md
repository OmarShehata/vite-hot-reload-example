# Vite Hot Reloading - A Complete Example

Example setup using Vite hot module reloading for creative coding.

It shows how to import modules & swap them dynamically when the code is changed while retaining state.

The video below shows a moving circle. Enabling hot reload on this module allows us to vary its speed without restarting the simulation, or even pause it just by commenting out the line that steps the clock forward.

### How it works

`src/HotModuleReloadSetup.js` encapsulates most of the work.

To enable HMR on any module, add the following:

```javascript
import { HMREventHandler } from './HotModuleReloadSetup.js';

if (import.meta.hot) {
  import.meta.hot.accept(HMREventHandler)
}
```

This is enabled on `src/Draw.js`.

To import this module, use `HotModuleReloadSetup.import(modulePath)`:

```javascript
import HotModuleReloadSetup from './HotModuleReloadSetup.js';
// Setup HMR
const hmr = new HotModuleReloadSetup();
// Load a module that will be updated dynamically
await hmr.import('./Draw.js');
// Now we access it through hmr.instances['Draw']
// which will point to the new module when it gets swapped
```

Then access an instance of your module through `hmr.instances['Draw']` which will get automatically swapped with a new instance when the code changes. This is how it's accessed in `src/index.js`.

Finally, the HMR enabled module has a `hotReload` callback which is where you can copy any state variables from the old instance to the new one.
