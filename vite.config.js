import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/index.js",
      name: "Widgets",
      fileName: (format) => `test-app.${format}.js`,
    },
    rollupOptions: {
      // external: ["preact"], // exclude preact from the bundle
    },
  },
  plugins: [preact()],
});
