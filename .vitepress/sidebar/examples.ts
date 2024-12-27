import { DefaultTheme } from "vitepress";

export const sidebarExamples: DefaultTheme.Sidebar = [
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
      {
        text: "Guirlande d'actions",
        link: "/exemples/guirlande-actions",
      },
    ],
  },
];
