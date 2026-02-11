import { defineConfig, type ConfigEnv, type Plugin } from "vite";
import dtsBundleGenerator from "unplugin-dts-bundle-generator/vite";
import typescript from "vite-plugin-typescript";
import rollupLicensePlugin from "rollup-plugin-license";

export default function viteConfig(configEnv: ConfigEnv) {
  const isServe = configEnv.command === "serve";
  if (isServe) {
    return serveConfig(configEnv);
  }
  return buildConfig(configEnv);
}

function buildConfig(configEnv: ConfigEnv) {
  return defineConfig({
    build: {
      lib: {
        entry: "src/index.ts",
        name: "testbed",
        formats: ["es", "umd"],
      },
      minify: false,
      sourcemap: true,
      rollupOptions: {
        external: ["planck"],
      },
      outDir: "dist",
    },
    plugins: [
      rollupLicensePlugin({
        banner: getLicense(),
      }) as Plugin,
      typescript({}),
      dtsBundleGenerator({
        fileName: "planck-testbed.d.ts",
      }),
    ],
  });
}

function serveConfig(configEnv: ConfigEnv) {
  return defineConfig({
    resolve: {},
    define: {},
  });
}

function getLicense() {
  const version = process.env.npm_package_version;
  const license = `
Testbed for Planck v${version ?? "?"}
@copyright Copyright (c) Ali Shakiba
@license License under the MIT license
  `;
  return license;
}
