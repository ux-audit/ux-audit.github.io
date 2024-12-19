---
outline: deep
---

# Qualité des messages d'erreurs

Si la plupart des situations d'erreurs peut être évitées par le chapitre
précédent (protection contre les erreurs), il faut cependant faire face à des
situations d'erreurs dûes à des conditions externes ou des systèmes externes que
l'on ne maîtrise pas :

- erreur de réseau internet, site web absent, DNS mal réglé, certificat
  invalide, etc.
- périphérique non présent ou non visible
- système externe exigeant une authentification, et qui s'est déconnecté sur sa
  propre initiative.
- système externe renvoyant une erreur interne technique (web: erreur >=500)
- une librairie du système d'exploitation non présente et nécessaire pour faire
  fonctionner le système logiciel.
- erreur de surcharge de système (quota dépassé, etc.),
- validation que seul le back-end connait.

::: tip Astuces 😊

1. Dans l'idéal, essayer de faire passer les messages d'erreur comme des
   informations, sans prendre les codes habituelles de message d'erreur (page de
   rouge, pas de point d'exclamation, ou de tonalité de réprimande)
2. Adopter un ton diplomatique et télégraphique, qui est rapide à lire et à
   comprendre.
3. Utiliser des termes les plus précis possible tout en étant compris par les
   utilisateurs.
4. Eviter l'humour, cas aucune réelle maîtrise du contexte. On peut rire de tout
   mais pas avec tout le monde.
5. Montrer le ou les champs qui ne sont pas correctement rempli pour permettre
   le bon traitement d'un formulaire.

:::
