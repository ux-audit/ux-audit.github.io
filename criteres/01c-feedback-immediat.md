---
outline: deep
---

# Feedback immédiat

Lorsqu'un utilisateur déclenche une action sur une interface, celle-ci doit
répondre immédiatement. Il peut s'agit d'un avertissement sonore, mais bien
souvent l'interface est silencieuse. Alors on utilise un moyen visuel : on
montre un changement d'état indiquant que l'action a été déclenchée. Si l'action
est longue alors l'interface signale par un état que l'action est entrain de se
faire en tâche de fond. Une animation est bienvenue car elle reflète le travail,
et un travail est un mouvement. Lorsque l'action est très longue, le mouvement
devrait refléter une progression. Pour rendre l'utilisateur encore plus patient
on peut utiliser des outils comme le
[goal gradient effect](https://ux-lois.github.io/cards/02-effect-goal-gradient/).
Une fois l'action terminée, l'utilisateur doit constater immédiatement le
résultat de l'action.

On appelle **temps de latence** le temps entre l'ordre de l'utilisateur et le
démarrage effectif de l'action.

L'utilisateur a besoin de feedback immédiat :

- pour une meilleure sensation de contrôle de l'état de l'application.
- pour limiter l'impatience où la divagation (émotion négative).

Un utilisateur peut en effet commencer à divaguer après 1 seconde d'attente sur
un processus.

::: tip Astuces 😊

1. Utiliser des boutons à taille suffisamment grosses pour cliquer dessus
   agréablement. C'est la loi de Fitts.
2. Utiliser de préférence des boutons avec un "border radius" sauf si le site
   est jugé formel. Les utilisateurs, inconsciemment n'aiment pas cliquer sur
   des choses pointues.
3. Laisser un peu d'espace entre les boutons, pour aerer visuellement et surtout
   empêcher les utilisateurs de cliquer sur le bouton d'à côté.
4. Penser à désactiver un bouton pendant qu'il effectue son action. Cela évite
   aux utilisateurs de lancer l'action plusieurs fois de suite, sans faire
   exprès.
5. Insérer un spinner dans le bouton pendant qu'il fait son action.
6. Insérer une barre de progression près du bouton pour montrer une action qui
   progresse.
7. Si l'action est très longue, penser à utiliser le goal gradient effect.
8. Eviter les temps de latence, surtout si l'interface sert à piloter un
   automate en temps réel.
9. Dans un champ de saisie, il est possible de vouloir valider l'entrée
   utilisateur en temps réel. Si cette validation prends du temps, cela peut
   provoquer de la latence. Il faut alors utiliser le **debounce**, et la
   validation asynchrone (ie: qui ne bloque pas le processus de la fenêtre).
10. Certains boutons, comme par exemple des zooms, de la translation peuvent
    causer des actions à répétition et créer une saturation de la machine. On
    suggère alors le **throttle** pour atténuer.
11. Une action asynchrone a 4 états :

    - avant de commencer
    - entrain de faire l'action, avec un taux d'avancement
    - sortie en erreur, avec cause et suggestion de correction
    - sortie en succès, avec temps de réalisation et résultat.

    L'interface devrait montrer éventuellement les différents états.

12. Une action asynchrone devrait éventuellement être interruptable et
    réversible.

13. Dans le cas d'entrée confidentielle, mettre au moins des asterisques, et un
    bouton oeil.
14. Dans un processus à étapes, penser à mettre un récapitulatif des options
    déjà sélectionnées.

:::
