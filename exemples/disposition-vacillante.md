---
outline: deep
---

<script setup lang="ts">
import LumiereVacillante from "./utils/LumiereVacillante.vue"
import FormulaireVacillant from "./utils/FormulaireVacillant.vue"

</script>

# Disposition vacillante

Vacillant ? Ca veut dire quoi ? Essayez la lumière vacillante :

<LumiereVacillante />

Une interface dont la mise en page change de manière non prévisible, parfois
sans action de la part de l'utilisateur est souvent mal percue. C'est bien sûr
plus discret que l'exemple de la lumière vacillante, mais si on peut réduire
toutes les formes de vacillement c'est pas mal.

Cela arrive dans plusieurs cas :

- Apparition d'un message d'erreur, ou d'une publicité dans le flux de mise en
  page et qui provoque ainsi un décalelement vers le bas.
- Apparition de boutons supplémentaires dans une barre d'outil qui est centrée,
  provoquant un décalage des autres boutons.
- Un label de bouton dont la longueur change, et fait bouger la taille du
  bouton.

Suggestion de correction :

- Prévoir les hauteurs des messages d'erreurs sous les champs à l'avance dans
  les formulaires.
- Aligner les boutons de barre d'outils à gauche ou à droite, mais ne pas les
  centrer.
- Ne pas mettre de barre d'outils après un tableau dont la hauteur peut évoluer.

<FormulaireVacillant />
