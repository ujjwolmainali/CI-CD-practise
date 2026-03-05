import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/CI-CD-practise/",
  plugins: [tailwindcss()],
});
