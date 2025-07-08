// @ts-check
// @ts-ignore
import { defineConfig, envField } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: false,
      fallbackType: "redirect",
    },
    fallback: {
      en: "es",
    },
  },
  env: {
    schema: {
      PUBLIC_ENV: envField.string({
        context: "client",
        access: "public",
        optional: false,
      }),
      REACT_APP_DEV_URL: envField.string({
        context: "client",
        access: "public",
        optional: true,
      }),
      REACT_APP_PROD_URL: envField.string({
        context: "client",
        access: "public",
        optional: false,
      }),
      BACKEND_DEV_URL: envField.string({
        context: "client",
        access: "public",
        optional: true,
      }),
      BACKEND_PROD_URL: envField.string({
        context: "client",
        access: "public",
        optional: false,
      }),
    },
  },
  vite: {
    build: {
      minify: true,
      sourcemap: false,
      cssCodeSplit: false,
    },
  },
  site: "https://www.red-coupons.com",
  integrations: [
    sitemap({
      lastmod: new Date(),
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-CO",
          en: "en-US",
        },
      },
    }),
  ],
});
