import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

declare const process;

export default defineConfig({
  plugins: [react()],
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
});
