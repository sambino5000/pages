import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
    optimizeDeps: {
      // disabled: false, // https://github.com/vitejs/vite/issues/9703
    },
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
  };
});
