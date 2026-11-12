import { defineConfig, transformWithOxc } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    {
      name: 'jsx-in-js',
      enforce: 'pre',

      transform: (code, id) => {
        const filePath = id.split('?')[0].replaceAll('\\', '/');

        if (filePath.includes('/src/') && filePath.endsWith('.js')) {
          return transformWithOxc(code, filePath, {
            lang: 'jsx',
            jsx: {
              runtime: 'automatic',
            },
          });
        }
      },
    },

    react(),
    tailwindcss(),
  ],

  optimizeDeps: {
    rolldownOptions: {
      moduleTypes: {
        '.js': 'jsx',
      },
    },
  },
});