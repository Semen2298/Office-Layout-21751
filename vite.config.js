import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import nunjucks from "vite-plugin-nunjucks";

export default defineConfig({
  plugins: [
    tailwindcss(),
    nunjucks({
      templatesDir: "resources/views"
    })
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true
  }
});
