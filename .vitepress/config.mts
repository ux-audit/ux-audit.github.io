import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Critères Ergonomiques",
  description:
    "Utiles pour trouver des points d'améliorations sur des interfaces logicielles.",
  head: [["link", { rel: "shortcut icon", href: "/logo.svg" }]],
  themeConfig: {
    logo: "/logo.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Critères", link: "/criteres/introduction" },
      { text: "Exemples", link: "/exemples/introduction" },
    ],

    sidebar: [
      {
        text: "Critères",
        base: "/criteres",
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Préliminaires", link: "/preliminaires" },
          {
            text: "Guidage",
            link: "/01-guidage",
            items: [
              { text: "Incitation", link: "/01a-incitation" },
              {
                text: "Groupement / Distinction",
                link: "/01b-groupement-distinction",
              },
              { text: "Feedback immédiat", link: "/01c-feedback-immediat" },
              { text: "Lisibilité", link: "/01d-lisibilite" },
            ],
          },
          {
            text: "Charge de travail",
            link: "/02-charge-de-travail",
            items: [
              { text: "Brièveté", link: "/02a-brievete" },
              {
                text: "Densité informationnelle",
                link: "/02b-densite-informationnelle",
              },
            ],
          },
        ],
      },
      {
        text: "Exemples",
        items: [
          { text: "Introduction aux exemples", link: "/exemples/introduction" },
          { text: "Label au dessus", link: "/exemples/label_dessus" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/ux-audit/ux-audit.github.io",
      },
    ],
    footer: {
      message: "Site publié sous licence MIT",
      copyright: `Copyright © 2019-${new Date().getFullYear()} Jean-Louis GUENEGO`,
    },
  },
});
