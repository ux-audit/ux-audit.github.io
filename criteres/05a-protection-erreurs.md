---
outline: deep
---

# Protection contre les erreurs

Mettre en place les mécanismes d'interface pour bien détecter et prévenir les
erreurs.

::: tip Astuces 😊

1. Bien guider l'utilisateur pour qu'il ne tombe pas dans des situations
   d'erreurs.
   - ne pas faire d'appel non authentifié alors que back-end exige une
     authentification.
   - ne pas faire d'appel au back-end qui vont renvoyer une erreur 400, 401,
     403, 404, etc.
2. L'empêcher de saisir des champs en faisant des erreurs. Filtrage de
   caractères. Validation synchrone, asynchrone avec debounce, et avant
   validation.
3. Eventuellement désactiver le bouton d'envoi du formulaire tant que certains
   champs sont invalides. Ou alors activer le bouton, mais lui demander de
   scroller vers le champ invalide aulieu d'envoyer le formulaire.
4. Désactiver ou cacher les boutons qui n'ont pas de sens dans le contexte ou
   l'état.

:::
