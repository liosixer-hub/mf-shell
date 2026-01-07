import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'shell',
  exposes: {
    './Provider': './src/components/ProviderComponent.tsx',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
  dts: {
    generateTypes: {
      compilerInstance: 'node tsc-wrapper.js',
    }
  }
});
