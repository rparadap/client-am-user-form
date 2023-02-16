// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
import glob from "glob";
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
      reportCompressedSize: true,
      outDir,
      emptyOutDir: true,
      cssCodeSplit: true,
      rollupOptions: {
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
