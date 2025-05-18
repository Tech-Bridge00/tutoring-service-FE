import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@widgets', replacement: '/src/widgets' },
      { find: '@shared', replacement: '/src/shared' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@assets', replacement: '/src/assets' }
    ]
  }
});
