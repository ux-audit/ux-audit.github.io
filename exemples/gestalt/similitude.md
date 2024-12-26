---
outline: deep
---

<script setup lang="ts">
import FormulaireSimilitude from "../utils/FormulaireSimilitude.vue"
import RegroupementParSimilarite from "../utils/RegroupementParSimilarite.vue"

</script>

# Gestalt - Loi de la similitude

« Ce qui est similaire en forme, couleur, taille, et tout autre attributs
devrait aller ensemble. »

C'est ce que se dit le cerveau subconscient au cerveau conscient de l'esprit de
l'utilisateur. Si celui-ci constate le contraire, il ressentira un malaise.

Dans les interfaces, il est important d'appliquer soigneusement cette loi : une
fois le style des boutons, des labels, de champs bien définis et bien
distinguables les uns des autres, appliquer l'homogénéïté en réutilisant les
mêmes visuels pour les mêmes mécanismes d'utilisation.

L'interface devient un ensemble d'écrans, qui sont composés d'éléments appelés
**composants**, chacun d'une classe donnée (bouton, label, champs, menu, lien,
icônes, etc.), avec des déclinaisons de contexte (bouton primaire, secondaire,
etc.)

Une fois que l'utilisateur a compris le sens et la façon de reconnaître et
d'intéragir avec les composants, il ne se pose plus de question sur leur
utilisation.

C'est pourquoi la définition d'un catalogue de composants est important pour
élaborer une interface. De manière plus large, il faut construire un système de
design.

Regarder à titre d'exemple le
[système de design de l'état français](https://www.systeme-de-design.gouv.fr/)
bien que ce dernier soit interdit d'utilisation dans ses visuels sauf si on est
un ministère. Le site [designsystemsrepo.com](https://designsystemsrepo.com)
s'efforce de lister des exemples de système de design.

## Trop de similarité

Dans cet exemple, on a mis un peu trop de similarité entre label, champ et
boutons.

<FormulaireSimilitude />

## Regroupement par similarité

Lors d'une recherche visuelle parmi un ensemble d'éléments il est bien que
certains attributs de ces éléments soit différenciés visuellement, par la
couleur, l'intensité, la taille, la forme ou autre.

Par exemple dans cette liste de véhicules, on distingue plus facilement les
différents type de véhicule par une icône et une couleur différente : le texte
ne suffit pas.

<RegroupementParSimilarite />
