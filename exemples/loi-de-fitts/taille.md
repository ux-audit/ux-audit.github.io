---
outline: deep
---

<script setup lang="ts">
import BadCHeckBox from "./components/BadCheckBox.vue";
import GoodCHeckBox from "./components/GoodCheckBox.vue";

</script>

# Taille

Parfois la taille de composants clickables est trop petite pour que
l'utilisateur se sente bien à l'aise pour cliquer dessus.

❌ Bouton checkbox trop petit <BadCHeckBox />

Heureusement, dans ce cas, on a pensé à faire une zone clickable élargie à tous
le texte et le bloc qui l'entoure.

On va donc chercher à faire des composants de taille plus généreuse.

✔ Bouton checkbox revisité. <GoodCHeckBox />
