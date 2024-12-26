import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "UX Audit",
  description:
    "Utiles pour trouver des points d'améliorations sur des interfaces logicielles.",
  head: [["link", { rel: "shortcut icon", href: "/logo.svg" }]],
  themeConfig: {
    logo: "/logo.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Critères", link: "/criteres/introduction" },
      { text: "Exemples", link: "/exemples" },
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
            collapsed: true,
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
            collapsed: true,
            items: [
              { text: "Brièveté", link: "/02a-brievete" },
              {
                text: "Densité informationnelle",
                link: "/02b-densite-informationnelle",
              },
            ],
          },
          {
            text: "Contrôle explicite",
            link: "/03-controle-explicite",
            collapsed: true,
            items: [
              {
                text: "Actions explicites",
                link: "/03a-actions-explicites",
              },
              {
                text: "Contrôle utilisateur",
                link: "/03b-controle-utilisateur",
              },
            ],
          },
          {
            text: "Adaptabilité",
            link: "/04-adaptabilite",
            collapsed: true,
            items: [
              {
                text: "Flexibilité",
                link: "/04a-flexibilite",
              },
              {
                text: "Prise en compte de l'expérience de l'utilisateur",
                link: "/04b-experience-utilisateur",
              },
            ],
          },
          {
            text: "Gestion des erreurs",
            link: "/05-gestion-erreurs",
            collapsed: true,
            items: [
              {
                text: "Protection contre les erreurs",
                link: "/05a-protection-erreurs",
              },
              {
                text: "Qualité des messages d'erreurs",
                link: "/05b-qualite-message-erreurs",
              },
              {
                text: "Correction des erreurs",
                link: "/05c-correction-erreurs",
              },
            ],
          },
          {
            text: "Homogénéité / Cohérence",
            link: "/06-homogeneite-coherence",
          },
          {
            text: "Signifiance des codes et dénomination",
            link: "/07-signifiance-denomination",
          },
          {
            text: "Compatibilité",
            link: "/08-compatibilite",
          },
        ],
      },
      {
        text: "Exemples",
        link: "/exemples/index",
        items: [
          { text: "Label au dessus", link: "/exemples/label_dessus" },
          { text: "Prépositionner", link: "/exemples/prepositionner" },
          {
            text: "Boutons primaires et secondaires",
            link: "/exemples/boutons-primaires-et-secondaires",
          },
          {
            text: "Eviter oui/non",
            link: "/exemples/eviter-oui-non",
          },
          {
            text: "Divulgation progressive",
            link: "/exemples/divulgation-progressive",
          },
          {
            text: "Champ avec espaces",
            link: "/exemples/champ-espaces",
          },
          {
            text: "Disposition vacillante",
            link: "/exemples/disposition-vacillante",
          },
          {
            text: "Gestalt",
            link: "/exemples/gestalt",
            items: [
              {
                text: "Proximité",
                link: "/exemples/gestalt/proximite",
              },
              {
                text: "Contours",
                link: "/exemples/gestalt/contours",
              },
              {
                text: "Similitude",
                link: "/exemples/gestalt/similitude",
              },
              {
                text: "Bonne forme",
                link: "/exemples/gestalt/bonne-forme",
              },
            ],
          },
          {
            text: "Présentation des choix",
            link: "/exemples/ordre-choix",
          },
          {
            text: "Image avant texte",
            link: "/exemples/image-avant-texte",
          },
          {
            text: "Bouton « etcetera »",
            link: "/exemples/bouton-etcetera",
          },
        ],
      },
      {
        text: "Une interface c'est comme...",
        link: "/une-interface-est-comme",
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
  sitemap: {
    hostname: "https://ux-audit.github.io",
  },
});
