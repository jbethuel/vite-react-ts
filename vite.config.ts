import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import environmentPlugin from 'vite-plugin-environment';
import eslintPlugin from 'vite-plugin-eslint';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig(() => {
  const ENVIRONMENT = 'ENVIRONMENT';

  return {
    plugins: [
      react(),
      eslintPlugin(),
      environmentPlugin([ENVIRONMENT]),
      createHtmlPlugin({
        inject: {
          data: {
            [ENVIRONMENT]: process.env[ENVIRONMENT],
          },
        },
      }),
    ],
  };
});
