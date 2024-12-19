---
outline: deep
---

# Actions explicites

L'application doit seulement exécuter les actions demandées par l'utilisateur,
et pas d'autre, pour éviter l'effet de (mauvaise) surprise.

Si jamais l'application venait à executer d'autres actions sans que
l'utilisateur l'ait demandé, alors il faut que l'interface l'en informe aussitôt
et que l'utilisateur constate le plus vite possible l'intérêt.

En effet, dans la relation homme-machine, l'homme est le "chef", la machine est
l'assistant. Si l'assistant prend des initiatives, elles ont intérêt à être
bonnes, sinon c'est la catastrophe.

Il peut aussi arriver que le "chef" donne des ordres par erreur, par exemple un
mauvais tremblement de la main sur la souris, dans ce cas, il faut que le
système permette de revenir en arrière, si l'action est réversible. Si l'action
n'est pas réversible, on dit qu'elle est critique et dans cette situation, il
est bien de demander une confirmation de l'action.

::: tip Astuces 😊

1. Les actions critiques devraient avoir une validation par confirmation.
2. Les actions critiques devraient nécessiter deux actions à des endroits
   différent de l'écran.
3. Les raccourcis claviers devraient avoir plusieurs touches simultanées pour ne
   pas avoir d'accident de clavier.
4. Les actions devraient être là où l'utilisateur cherche en premier.
5. Les formulaires ne devraient être envoyés qu'après avoir cliqué sur un bouton
   validation.

:::
