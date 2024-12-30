import { DefaultTheme } from "vitepress";

export const sidebarExamples: DefaultTheme.Sidebar = [
  {
    text: "Exemples",
    base: "/exemples",
    link: "/",
    items: [
      { text: "Label au dessus", link: "/label_dessus" },
      { text: "Prépositionner", link: "/prepositionner" },
      {
        text: "Boutons primaires et secondaires",
        link: "/boutons-primaires-et-secondaires",
      },
      {
        text: "Eviter oui/non",
        link: "/eviter-oui-non",
      },
      {
        text: "Divulgation progressive",
        link: "/divulgation-progressive",
      },
      {
        text: "Champ avec espaces",
        link: "/champ-espaces",
      },
      {
        text: "Disposition vacillante",
        link: "/disposition-vacillante",
      },
      {
        text: "Gestalt",
        link: "/gestalt/index.md",
        collapsed: true,
        items: [
          {
            text: "Proximité",
            link: "/gestalt/proximite",
          },
          {
            text: "Contours",
            link: "/gestalt/contours",
          },
          {
            text: "Similitude",
            link: "/gestalt/similitude",
          },
          {
            text: "Bonne forme",
            link: "/gestalt/bonne-forme",
          },
        ],
      },
      {
        text: "Présentation des choix",
        link: "/ordre-choix",
      },
      {
        text: "Image avant texte",
        link: "/image-avant-texte",
      },
      {
        text: "Bouton « etcetera »",
        link: "/bouton-etcetera",
      },
      {
        text: "Guirlande d'actions",
        link: "/guirlande-actions",
      },
      {
        text: "Loi de Fitts",
        link: "/loi-de-fitts/index.md",
        collapsed: true,
        items: [
          {
            text: "Taille",
            link: "/loi-de-fitts/taille",
          },
          {
            text: "Distance",
            link: "/loi-de-fitts/distance",
          },
        ],
      },
      {
        text: "Distance entre boutons",
        link: "/distance-entre-boutons",
      },
      {
        text: "Border radius",
        link: "/border-radius",
      },
    ],
  },
];
