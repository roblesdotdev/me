import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import remixConfig from "./remix.config";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  build: { minify: isProd ? "terser" : false, sourcemap: true, ssr: false },
  plugins: [remix(remixConfig), tsconfigPaths()],
});
