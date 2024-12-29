---
outline: deep
---

<script setup lang="ts">
import BadDistance from "./distance-entre-boutons/BadDistance.vue";
import GoodDistance from "./distance-entre-boutons/GoodDistance.vue";
</script>

# Distance entre boutons

Eviter les boutons qui se touchent. En particulier pour des interfaces tactiles.

❌ <BadDistance />

✔ <GoodDistance />

A noter que certains systèmes utilisent deux types d'unité, l'une fixe et
l'autre proportionnelle à la taille de fonte lisible réglable dans le système.

|                                  | Web     | Android |               iOS |
| -------------------------------- | ------- | :-----: | ----------------: |
| Unité fixe                       | px      |   dp    |                pt |
| Unité proportionnelle à la fonte | em, rem |   sp    | pt et DynamicType |

Pour la séparation de containeurs, utiliser l'unité fixe, mais sinon, pour le
texte et les containeurs de texte, utiliser l'unité proportionnelle à la fonte.

Penser aussi à utiliser des systèmes de grilles pour homogénéiser les distances.
[Voir refactoring UI](https://www.refactoringui.com/)
