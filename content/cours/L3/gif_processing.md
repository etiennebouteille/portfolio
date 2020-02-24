---
title: "Comment créer un gif avec processing"
date: 2019-12-02T17:56:22+02:00
draft: false
---

1. Enregistrer votre sketch processing.
2. Ajouter une fonction saveFrame() à la fin de votre boucle draw. [reference](https://processing.org/reference/saveFrame_.html). 
3. Spécifier un nom de fichier et une extension. Par exemple saveFrame("####.png").
4. En executant le sketch, chaque image affichée par processing est sauvegardée dans le dossier du sketch.
5. Dans Premiere, importer les images. Sélectionner la premiere image du dossier pour cocher "importer comme sequence".
6. Exporter la vidéo au format h.264
7. Uploader la video sur le [gif maker](https://giphy.com/create/gifmaker) de Giphy.

