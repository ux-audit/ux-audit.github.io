---
outline: deep
---

# Groupement / Distinction

Bastien et Scapin font une nuance entre l'incitation directe, par un message
explicite et les incitations indirectes, par les affordances.

On peut sur une interface exprimer des messages, sans forcement les dire.

Par exemple, certaines portes n'ont pas besoin d'écriteau "tirer" ou "pousser"
pour que les utilisateurs sachent la manoeuvrer. La présence ou l'absence de
gonds dans la vision périphérique peut suffire. Une porte donnant sur un
couloir, ou une rue se tire afin de ne pas gêner le passage sur lequel elle
débouche, sauf pour raison d'incendie.
[Voir portes de Donald Norman](https://www.hteumeuleu.fr/les-portes-de-norman/).

## Par la localisation

Les utilisateurs identifient rapidement les entêtes, pied de page, barres de
côté. Les disposition des éléments fait énormément appel aux lois de la Gestalt.
Par exemple,

- [loi de la proximité](https://ux-lois.github.io/cards/04-gestalt-02-law-of-proximity/),
- [loi des contours](https://ux-lois.github.io/cards/04-gestalt-law-of-common-region/),
- [loi de la similitude](https://ux-lois.github.io/cards/04-gestalt-law-of-similarity/)

sont utilisées pour mettre ensemble ou au contraire distinguer des groupes.

::: tip Astuces 😊

1. Identifier les bugs de [loi de proximité](../exemples/gestalt/proximite).
2. Identifier les bugs de [loi de contour](../exemples/gestalt/contours).
3. Identifier les bugs de [loi de similitude](../exemples/gestalt/similitude).
4. Identifier les bugs de [bonne forme](../exemples/gestalt/bonne-forme).
5. Dans une liste, mettre les choix les plus spécifiques en premier et les plus
   généraux et primaire en dernier. Pour éviter que l'utilisateur
   [choisisse une solution générale sans avoir vu qu'une solution plus spécifique](../exemples/ordre-choix)
   lui correspondait mieux.
6. Dans une liste, préférer un ordre cohérent : alphabétique, ou du plus
   recent/ancien, ou du plus grand au plus petit, ou du plus utilisé au moins
   utilisé, etc.
7. Considérer la loi de Hick : mettre moins de choix apparent, et
   [intégrer les choix restants dans un menu "..."](../exemples/bouton-etcetera)
8. [Préférer montrer une image avant le contenu](../exemples/image-avant-texte),
   que ce soit en lecture verticale ou horizontale.
9. Attention au sens de lecture :
   - arabe/hébreux : toute la mise en page se met en miroir par rapport au
     latin, les images se mettent à droite de leur contenu, le futur est à
     gauche tandis que le passé est à droite.
   - vertical : les images se mettent au dessus de leur contenu, le futur est en
     bas, tandis que le passé est en haut.
10. Aérer l'interface en partant de grosses valeurs d'espacement et faites les
    réduires jusqu'à une taille visuellement acceptable.
11. Utiliser moins de bordure et plus d'espacement. Privilégier la loi de
    proximité à la loi de contour.
12. Utiliser des flèches ou chevron de direction, le futur est à droite pour le
    latin, à gauche pour l'hébreu et l'arabe.
13. Le pied de page est un marqueur visuel, ne pas l'oublier de l'ajouter si
    l'utilisateur a des doutes de bien être en bas de l'écran.

:::

## Par le format

::: tip Astuces 😊

1. Appliquer la loi de Fitts :

- Préférer les boutons qui contourent le choix plutôt que les cases à cocher ou
  les boutons radio
- Si boutons radio ou case à cocher alors agrandir les surfaces cliquables

2. Plonger le réel dans l'écran. Exemple : vous voulez afficher un ticket de
   cinema ? Alors mettez un ticket de cinema à l'écran... et l'utilisateur verra
   un ticket de cinema sans que ce soit besoin d'écrire "Ticket de cinema".
3. [Utiliser des formes convaincantes et distinctes](../exemples/gestalt/bonne-forme)
   selon la nature, par exemple :

   - Faire des champs de saisie qui se ressemblent.
   - Faire des labels qui se ressemblent.
   - Faire des champs de saisie qui ne ressemblent pas à des labels.

4. Utiliser des paradigmes de mise en page :
   - une carte est un duo image, et texte.
   - une carte avec action :
     - verticale : image en haut, texte, et boutons en bas.
     - horizontale : image à gauche, texte, et boutons à droite.
5. Eviter les guirlandes d'actions dans des listes et préférer des items
   selectionnables avec barres d'outils en haut de la liste.

:::
