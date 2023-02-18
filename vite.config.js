import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
const base = "";
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      mode: "development",
      base: base,
      srcDir: "src",
      filename: "sw.js",
      includeAssets: ["/favicon.ico"],
      strategies: "injectManifest",
      orientation: "portrait",
      manifest: {
        name: "PWA-Template",
        short_name: "PWA-Template",
        theme_color: "F#ffffff",
        start_url: base,
        display: "standalone",
        background_color: "#3FB27",
        icons: [
          {
            src: "manifest-icon-192.maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "manifest-icon-192.maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "manifest-icon-512.maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "manifest-icon-512.maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
});
