# PROJET11 - Développez une application Web avec React et React Router

## Guide des étapes clés

[guide](https://course.oc-static.com/projects/D%C3%A9veloppeur+Web/IW_P8+React+Kasa/Guide+d'etapes+cles+-+Creez+une+application+web+de+location+immobiliere+avec+React+1.pdf)

## Guide de codage

[Coding guidelines](https://course.oc-static.com/projects/Front-End+V2/P9+React+1/Coding+guidelines+Kasa+FR.pdf)

## JSON

[JSON](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json)

## Maquette FIGMA

[ORIGINAL](https://www.figma.com/file/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?type=design&node-id=0-1&mode=design&t=1KgUwWWFtuAVbsJ5-0)

[PROTOTYPE](https://www.figma.com/proto/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?type=design&node-id=3-0&t=x8RBKuR4UiE3hhBW-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A0)

[COPY](<https://www.figma.com/file/9ysyvB0HoVKb9BPsDjlLYA/Kasa_FR-(Copy)?type=design&node-id=0-1&mode=design&t=YCIq3AWxALJ9IxUI-0>)

## Contraintes fonctionnelles - Quelques précisions sur les fonctionnalités du site :

Pour le défilement des photos dans la galerie (composant Gallery) :

- Si l'utilisateur se trouve à la première image et qu'il clique sur "image précédente", la galerie affiche la dernière image.
- Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "image suivante", la galerie affiche la première image.

S'il n'y a qu'une seule image, les boutons "suivant" et "précédent" ainsi que la numérotation n'apparaissent pas.

La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.
Collapse :

- Par défaut, les Collapse sont fermés à l'initialisation de la page.
- Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
  Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.
