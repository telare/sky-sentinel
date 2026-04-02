import path from "node:path";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import { qrcode } from "vite-plugin-qrcode";

export default defineConfig(({ command }) => {
  const common = {
    plugins: [reactRouter(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@/shared": path.resolve(__dirname, "src", "shared"),
        "@/store": path.resolve(__dirname, "src", "store"),
        "@/assets": path.resolve(__dirname, "src", "assets"),
      },
    },
    envDir: path.resolve(__dirname, "../../"),
  };

  // dev
  if (command === "serve") {
    return {
      plugins: [...common.plugins, qrcode()],
      resolve: common.resolve,
      envDir: common.envDir,

      server: {
        port: 4173,
        open: true,
        strictPort: true,
      },
    };
  }

  // build
  return {
    plugins: [...common.plugins, visualizer({ emitFile: false })],
    resolve: common.resolve,
    envDir: common.envDir,
  };
});
