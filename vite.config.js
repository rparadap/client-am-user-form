// vite.config.js
// import progress from "vite-plugin-progress";
import { resolve } from "path";
import { defineConfig, loadEnv } from "vite";
import glob from "glob";
import inject from "@rollup/plugin-inject";
import solidPlugin from "vite-plugin-solid";

export default defineConfig(({ command, mode }) => {
  const root = resolve(__dirname, "src");
  const outDir = resolve(__dirname, "dist");
  return {
    root,
    plugins: [solidPlugin()],
    worker: {
      rollupOptions: { treeshake: false },
    },
    build: {
      target: "esnext",
      minify: false,
      // manifest: true,
      reportCompressedSize: true,
      outDir,
      emptyOutDir: true,
      cssCodeSplit: true,
      rollupOptions: {
        // plugins: [
        //   // Add it first
        //   inject({
        //     $: "jquery",
        //     jQuery: "jquery",
        //     moment: "moment",
        //     exclude: ["src/server/**/*.js"],
        //   }),
        //   // progress(),
        //   // Other plugins...
        // ],
        treeshake: false,
        input: [...glob.sync(resolve(__dirname, "src/**/*.{html,js,css}"))],
        preserveEntrySignatures: true,
        output: {
          preserveModules: true,
          preserveModulesRoot: "src",
          entryFileNames: ({ name: fileName }) => {
            return `${fileName}.js`;
          },
        },
      },
    },
  };
});
