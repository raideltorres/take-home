import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@theme": `${path.resolve(__dirname, "./src/theme/")}`,
      "@atoms": `${path.resolve(__dirname, "./src/components/atoms/")}`,
      "@molecules": `${path.resolve(__dirname, "./src/components/molecules/")}`,
      "@sections": `${path.resolve(__dirname, "./src/components/sections/")}`,
      "@layouts": `${path.resolve(__dirname, "./src/components/layouts/")}`,
    },
  },
  plugins: [react()],
});
