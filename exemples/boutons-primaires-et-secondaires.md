---
outline: deep
---

# Boutons primaires et secondaires

Ils servent à mettre en valeur la priorité mise au processus nominal par rapport
aux processus secondaires. Ainsi, l'utilisateur comprend mieux l'interface sans
avoir à se concentrer sur la signification des textes dans les boutons.

<script lang="ts" setup>
import BadChoices from './boutons-primaires-et-secondaires/BadChoices.vue'
import GoodChoices from './boutons-primaires-et-secondaires/GoodChoices.vue'
import ArabicBadChoices from './boutons-primaires-et-secondaires/ArabicBadChoices.vue'
import ArabicGoodChoices from './boutons-primaires-et-secondaires/ArabicGoodChoices.vue'
</script>

❌ <BadChoices />

✔ <GoodChoices />

---

L'exemple est encore plus flagrant lorsque vous ne comprenez pas la langue,
d'autant plus que les mises en page sont inversées.

❌ <ArabicBadChoices />

✔ <ArabicGoodChoices />
