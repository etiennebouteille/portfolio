---
title: "Cours Spark AR"
date: 2019-10-17T17:56:22+02:00
draft: false
---

Prérequis
=========

*   [Blender](https://www.blender.org/) (version 2.8 recommandée)
*   [SparkAR](https://sparkar.facebook.com/)
*   Application "Spark AR Player" sur le téléphone (Appstore, Playstore)
*   Télécharger les [Face Reference Assets](https://developers.facebook.com/docs/ar-studio/before-you-start/basics/using-the-face-reference-assets/)

Exercice 1 : Créer un masque de visage 
======================
Dans Blender, commencer un nouveau fichier.

Sélectionner tous les objets de la scène (A), puis les supprimer (X).

Importer "faceMesh.obj". Fichier > Importer > Wavefront (.obj). *il se trouve dans le dossier des face assets.*

Le masque est visible mais il est tout petit. Il faut zoomer dessus pour le voir. *Il ne faut pas aggrandir l'objet.*

![Passer en mode sculpture](/img/cours/spark/1-1.PNG)

Sélectionner le masque et passer en mode Sculpture. Vous pouvez utiliser les différents brush pour déformer le visage. Utiliser (F) pour changer la taille du brush et (Shift + F) pour changer sa dureté.

![Visage scuplté](/img/cours/spark/1-2.PNG)

Une fois satisfait du résultat, retourner en mode object, puis exporter le masque au format fbx. Sélectionner le masque > Fichier > Exporter > FBX.

Ouvrir SparkAR et créer un nouveau projet.

![Crée un nouveau projet](/img/cours/spark/1-3.PNG)

Importer votre nouveau visage dans Spark : Add Asset > Import from computer

![Add asset](/img/cours/spark/1-4.PNG)

Ajouter un FaceMesh dans votre scène. Add Object > FaceMesh > Insert.

![Add facemesh](/img/cours/spark/1-5.PNG)

Un visage en damier apparait. C'est le facemesh. *Notez que deux objets ont été ajoutés à la scène : FaceTracker0 et FaceMesh0. Facetracker est un objet invisible qui permet de situer le visage dans la scène. Le FaceMesh est groupé sous le Factracker.*

![Faetracker](/img/cours/spark/1-6.PNG)

Sélectionner le FaceMesh, sur la droite, cliquer sur le "+" à côté de déformation, puis choisir l'objet exporté depuis Blender.

![Deformation](/img/cours/spark/1-7.PNG)

La déformation est maintenant appliquée au visage.

![Deformation](/img/cours/spark/1-8.PNG)




