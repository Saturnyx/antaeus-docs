// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://harshal.is-cool.dev/antaeus-docs/",
  base: "/antaeus-docs",
  integrations: [
    starlight({
      title: "Antaeus Documentation",
      favicon: "/favicon.png",
      customCss: ["./src/styles/main.scss"],
      components: {
        ThemeSelect: "./src/components/ThemeSelect.astro",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Saturnyx/antaeus",
        },
      ],
      sidebar: [
        {
          label: "Getting Started",
          items: [{ autogenerate: { directory: "intro" } }],
        },
        {
          label: "Examples",
          items: [{ autogenerate: { directory: "examples" } }],
        },
      ],
    }),
  ],
});
