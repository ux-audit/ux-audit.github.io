---
outline: deep
---

<script setup lang="ts">
import BadBlock from "./components/BadBlock.vue";
import GoodBlock from "./components/GoodBlock.vue";

</script>

# Distance

Penser à ne pas faire des blocs trop grands où la partie « action » est trop
éloignée de la partie « lecture ».

En fait, pensez à faire des rectangles qui ne s'allongent pas trop, des
rectangles d'or.

❌ ici le rectangle est grand, la partie action est vraiment loin de la partie
identification. <BadBlock />

✔ Il suffit par exemple de réduire le rectangle et la distance se trouve
réduite. <GoodBlock />
