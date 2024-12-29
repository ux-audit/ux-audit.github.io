---
outline: deep
---

# Contrôle utilisateur

L'utilisateur doit toujours avoir la sensation qu'il est le chef, aux commandes.
Lorsqu'ils veut démarrer une action, la suspendre ou la reprendre, il doit vite
trouver comment faire sur l'interface.

Ensuite, il faut savoir que l'utilisateur a des limites motrices. Des fois, il
peut cliquer approximativement sur des boutons. Il faut donc que les boutons
aient des tailles minimum et soit un peu distant entre eux.

::: tip Astuces 😊

1. Un utilisateur ne doit pas être limité en temps par des phénomènes
   indépendant de sa volonté pour intéragir avec un écran.
2. Eviter les CLS (Cumulative Layout Shift)
3. Eviter les carroussels ininterrompables.
4. Une action en cours doit pouvoir être interrompable, et pourquoi pas
   reprenable de là où elle a été arrêtée.
5. Prévoir des actions "undo"/"redo"
6. Prévoir une taille minimum pour les boutons
7. Augmenter la surface clickable au label.
8. [Prévoir un minimum de distance entre les boutons](../exemples/distance-entre-boutons).
9. Si une carte a une image, du texte et seulement une action, alors faire que
   l'action soit le clic sur la carte elle-même, même si il y a un visuel de
   bouton.

:::
