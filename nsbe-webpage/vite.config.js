import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Ensure _redirects file is copied to dist
    rollupOptions: {
      input: {
        main: "./index.html",
      },
    },
  },
  // Configure for SPA routing
  preview: {
    // For local preview to work with client-side routing
    historyApiFallback: true,
  },
  // Ensure static assets are copied
  publicDir: "public",
});
