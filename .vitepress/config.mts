import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Critères Ergonomiques",
  description:
    "Utiles pour trouver des points d'améliorations sur des interfaces logicielles.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Critères",
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Préliminaires", link: "/preliminaires" },
          {
            text: "Guidage",
            link: "/01-guidage",
            items: [{ text: "Incitation", link: "/01a-incitation" }],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
