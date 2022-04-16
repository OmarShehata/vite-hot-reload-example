import { defineConfig } from "vite";

export default defineConfig({
  build: {
    minify: false,// TODO - I think you only need minifyInternalExports: false but I couldn't get that to work
  }
  // Uncomment this setting when running 
  // with SSL (hosting on Glitch etc)
  // server: {
  //   strictPort: true,
  //   hmr: {
  //     port: 443 // Run the websocket server on the SSL port
  //   }
  // }
});
