---
outline: deep
---

<script setup lang="ts">
import GuirlandeActions from "./utils/GuirlandeActions.vue";
import TableauArticles from "./utils/TableauArticles.vue";

</script>

# Eviter les guirlandes d'actions

Parfois l'interface doit afficher une liste d'éléments et souhaite offrir à
l'utilisateur la possibilité d'exercer des actions pour chaque élément.

Cela se traduit par exemple par ce visuel avec plein de boutons par ligne :

❌ <GuirlandeActions />

---

Préférer par exemple les barres d'outils et lignes sélectionnables.

✔ <TableauArticles  />
