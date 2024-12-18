---
outline: deep
---

# Incitation

## Amener les utilisateurs à effectuer des actions spécifiques

Voyons par l'exemple d'une interrogation, puis par la suggestion d'une solution
logique:

> **Je voudrais que les utilisateurs viennent sur mon site.**

- Pourquoi ?
- Parce que sur mon site il y a des informations intéressantes que je voudrais
  qu'ils lisent.
- Avez-vous pensé à mettre en place des mesures SEO (référencement naturel,
  amélioration de la visibilité sur les moteurs de recherche) ?

---

> **Je voudrais que les utilisateurs créent un compte sur mon site.**

- Mais pourquoi vos utilisateurs le feraient-ils ?
- Mais parce qu'ils en ont besoin pour que je leur envoie ce qu'ils me demandent
  : des produits qu'ils achètent.
- Eh bien explique leur que pour qu'ils puissent recevoir les produits, ils faut
  qu'ils donnent leur nom, prénom, email, telephone, et adresse de livraison,
  puis que pour ne pas répéter le process d'inscription, tu peux mémoriser cela
  sur un compte qu'ils créent.
- Je pense qu'ils ont compris mais ils ne voient pas comment faire pour créer un
  compte.
- Sur quelle page sont ils lorsqu'ils se demandent cela ?
- Ils viennent de cliquer sur "Commander" dans la page du panier.
- Eh bien, à ce moment là, il faut mettre dans leur champ visuel un bouton de
  "création de compte", ou même carrément un formulaire de création de compte !

Sur ces deux exemples, on peut constater que la solution vient naturellement si
on s'interroge **qui est l'utilisateur**, et surtout **quel est son objectif**,
ses attentes en venant sur le logiciel.

Si on comprend ce que cherche à faire l'utilisateur à tout moment de
l'utilisation, alors les écrans peuvent devenir beaucoup plus simples : ils ne
montrent que ce que l'utilisateur attend, et pas autre chose.

Encore mieux : l'utilisateur peut se passer de comprendre certains aspects du
métier lorsque on ne lui laisse pas le choix de faire des « bêtises », c'est à
dire lorsque l'interface le **guide**.

::: tip 😊 Questions à se poser

- C'est qui l'utilisateur ? Il vient faire quoi ?
- Est ce qu'il comprend par où il faut commencer sur le premier écran ?
- Et ensuite il fait quoi ? Et pourquoi l'utilisateur va t'il continuer ?
- Y a t'il pas des choses à l'écran inutiles pour ce que l'utilisateur vient
  faire ?

:::

## Les alternatives, les choix, en fonction des états ou des contextes

Un logiciel doit pouvoir faire face en général à de multiples utilisateurs, avec
des objectifs différents. Un métier est ce qu'il est. Et il est parfois complexe
et ne peut être réduit
([Loi de Tesler](https://ux-lois.github.io/cards/03-law-tesler/)).

Ce n'est pas pour autant que les écrans doivent être complexes, notamment
lorsque l'utilisateur doit faire des choix.

::: tip 😊 Astuces

1. Eviter de faire choisir l'utilisateur mais le mettre en situation de accepter
   ou refuser une proposition.
2. Eviter de faire des questions avec des boutons OUI/NON
3. Appliquer la loi de Fitts :

- Préférer les boutons qui contourent le choix plutôt que les cases à cocher ou
  les boutons radio
- Si boutons radio ou case à cocher alors agrandir les surfaces cliquables

4. Mettre en valeur un choix parmi des boutons secondaires avec un bouton
   primaire.
5. Utiliser un bouton "etcetera" pour mettre des choix rares en retrait.
6. Ne faire apparaitre les questions suivantes après que l'utilisateur ait
   répondu aux questions précédentes. C'est le principe de la "progressive
   disclosure"

:::

## Informations, aides permettant de savoir dans quel état, contexte l'utilisateur se trouve par rapport à son objectif.

En général, il est nécessaire que l'utilisateur sache toujours où il en est, et
que le reste à faire ne soit pas pénible à identifier sur l'interface et ne
paraisse pas difficile à achever.

::: tip 😊 A vérifier

1. Lorsque l'utilisateur parcours plusieurs écrans techniques différents, un
   [fil d'ariane](https://www.redacteur.com/blog/wordpress-fil-ariane-site-web/)
   dans l'entête du site l'aide à savoir où il en est.
2. A la fin d'un processus, ne pas oublier de récompenser l'utilisateur. C'est
   [la règle pic-fin](https://ux-lois.github.io/cards/98-peak-end-rule/).
3. Un bouton qui fait une action longue, devrait se désactiver et indiquer avec
   une animation (ex: spinner) que la partie non visible du logiciel est entrain
   de faire une action longue. Voir à cet effet la règle du
   [goal gradient effect](https://ux-lois.github.io/cards/02-effect-goal-gradient/).
4. Un bouton de validation de formulaire devrait faire l'un ou l'autre en cas de
   champ mal rempli :
   - soit se désactiver pour interdire la soumission
   - soit ̂être actif et servir de débogueur en scrollant vers le champ mal
     rempli.
5. Un champ de saisie mal rempli devrait avoir un message d'erreur.
6. Un message d'erreur ne devrait pas provoquer de
   [Cumulative Layout Shift](https://web.dev/articles/cls?hl=fr).
7. Eviter les champs de saisie libre. Essayer de trouver un équivalent qui
   permet une saisie uniquement en cliquant sur des boutons (ex: Calendrier,
   sélecteur de quantité). On l'appelle ici un **champ de saisie guidé**.
8. Lorsque l'utilisateur arrive sur un formulaire, mettre le focus sur le
   premier champ du formulaire.
9. Lorsque un champ de saisie guidé est complété, il est recommandé de mettre le
   focus sur le suivant pour inviter l'utilisateur dans sa saisie.

:::

## Moyens d'accessibilité permettant à l'utilisateur d'atteindre son objectif.

Aujourd'hui, l'accessibilité est devenue un sujet juridique. En France par
exemple, on peut se référer au
[RGAA et ses critères d'accessibilité](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
pour améliorer l'accessibilité de son logiciel.
