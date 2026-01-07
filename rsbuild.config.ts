import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import moduleFederationConfig from "./module-federation.config";

const publicUrl = process.env.PUBLIC_URL || "http://localhost:3001/";

export default defineConfig({
  plugins: [pluginReact(), pluginModuleFederation(moduleFederationConfig)],
  server: {
    port: 3001,
    htmlFallback: false,
  },
  dev: {
    assetPrefix: publicUrl,
  },
  output: {
    assetPrefix: publicUrl,
  },
  tools: {
    rspack: {
      watchOptions: {
        ignored: /node_modules/,
      },
    },
  },
});
