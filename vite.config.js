import { defineConfig } from "vite";

export default defineConfig((command, mode) => {
  if (command === 'serve') return;
  else {
    return {
      base: '/hfro/',
      plugins: []
    }
  }
})