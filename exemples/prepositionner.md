---
outline: deep
---

# Prépositionner

Eviter de laisser l'utilisateur devoir faire un choix à chaque fois qu'il fait
une action fréquente. Prépositionner sur son choix le plus probable. Cela évite
une charge mentale et motrice à chaque passage.

<script lang="ts" setup>
import BadPaymentMethod from './prepositionner/BadPaymentMethod.vue'
import GoodPaymentMethod from './prepositionner/GoodPaymentMethod.vue'
</script>

❌ <BadPaymentMethod />

✔ <GoodPaymentMethod />

## Autre exemples

### Arrivée sur un site web

Quand vous arrivez sur un site, on vous prépositionne sur une page d'accueil. On
ne vous demande pas sur quelle page vous voulez aller.

### Site ecommerce

Quand vous sélectionner un article sur un site d'ecommerce, on vous demande pas
tout de suite la quantité, elle est prépositionnée sur 1. Mais vous pouvez
l'ajuster par la suite si vous souhaitez.

## Contre exemples

Quand l'utilisateur considère qu'à chaque passage sur le processus nominal, il
faut qu'il fasse un choix éclairé, alors ne pas faire la préposition.

### Moteur de recherche

Quand on arrive sur la page d'acceuil de
[Google](https://www.google.fr/?zx=1734943360362&no_sw_cr=1), celui-ci aurait pu
prépositionner sur une recherche déjà faite. Et on aurait juste à changer la
recherche...

Par contre le bouton "J'ai de la chance" est une préposition sur le premier
résultat de recherche. Notez qu'il n'est pas sur le processus nominal, mais
secondaire.

### Bandeau cookie

Il fut un temps où les cookies étaient systématiquement ajoutés aux sites web.
Maintenant, pour des raisons juridiques,
[les sites doivent vous demander explicitement si vous les acceptez ou pas](https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/que-dit-la-loi).
En France, La loi oblige même à faire en sorte que les boutons d'acceptation ou
de refus soit aussi mis en valeur l'un et l'autre. Gare à ceux qui ne respectent
pas toujours la loi, il risque de payer une amende pouvant aller jusqu'à 4% de
leur chiffre d'affaire global, comme
[Google](https://www.conseil-etat.fr/actualites/cookies-publicitaires-google-definitivement-condamne-a-payer-100-millions-d-euros),
[Facebook](https://www.lefigaro.fr/secteur/high-tech/cookies-la-cnil-clot-une-injonction-prononcee-envers-facebook-20220728),
[Yahoo](https://www.cnil.fr/fr/cookies-la-cnil-sanctionne-yahoo-dune-amende-de-10-millions-deuros),
[Doctissimo](https://www.cnil.fr/fr/donnees-de-sante-et-utilisation-des-cookies-doctissimo-sanctionne-par-une-amende-de-380-000-euros),
[Amazon](https://www.lexisveille.fr/cookies-le-conseil-detat-valide-la-sanction-de-35-meu-prononcee-en-2020-par-la-cnil-contre-amazon),
etc.
