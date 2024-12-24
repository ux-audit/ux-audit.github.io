---
outline: deep
---

<script setup lang="ts">
import LumiereVacillante from "./utils/LumiereVacillante.vue"
import FormulaireVacillant from "./utils/FormulaireVacillant.vue"
import TableauEtBarreOutils from "./utils/TableauEtBarreOutils.vue"

</script>

# Disposition vacillante

Vacillant ? Ca veut dire quoi ? Essayez la lumière vacillante :

<LumiereVacillante />

C'est pas bon hein ? 😁

Oui l'effet est un peu exagéré. Mais les vacillements sont plus nombreux qu'il y
parait sur les interfaces et il faut les gommer.

En anglais, vacillement se dit **flickering**. Lorsque le vacillement concerne
la mise en page (layout), on parle de **CLS (Cumulative Layout Shift)**, en
français vacillement de mise en page.

Cela arrive dans plusieurs cas :

## Message d'erreurs ou publicités

Si les espaces pour les messages d'erreurs ou publicité n'ont pas été réservés
avant, ils produiront des CLS.

<FormulaireVacillant />

## Tableau et barre d'outils centrées

Selectioner des lignes du tableau pour faire apparaître le bouton "Supprimer".
La contrainte de centrage va conduire les autres boutons à se décaler sur la
gauche.

Si les boutons sont alignés à gauche, alors il n'y a pas de problème de
décalage, et donc pas de CLS.

<TableauEtBarreOutils />

## Longueur de boutons non contrôlées

Un label de bouton dont la longueur change, fait bouger la taille du bouton.

<BoutonCLS />
