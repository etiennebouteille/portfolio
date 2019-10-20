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

<br/>

Exercice 2 :  Maquiller le visage
===========

Dans Photoshop, créer un nouveau document de taille 1024x1024 avec un fond transparent. *La taille est importante au bon fonctionnement de la texture.* 

Importer dans le document une des deux textures du dossier faceMesh : *faceFeminine.jpg* ou *faceMasculine.jpg*. Cette texture nous servira de repère afin de savoir où peindre notre texture sur le visage.

Créer un nouveau calque au dessus de la texture puis dessiner sur tout ou partie du visage.

![Dessiner](/img/cours/spark/2-1.PNG)

Cacher le calque de texture afin que le fond soit transparent. Exporter l'image au format PNG afin de conserver la transparence.

![Exporter](/img/cours/spark/2-2.PNG)

Dans SparkAR, importer la texture de la même manière que vous avez importé le masque précédemment.

![Add asset](/img/cours/spark/1-4.PNG)

Créer un nouveau materiau qui va contenir le maquillage. Add Asset > Material. Puis renommer le materiau en "maquillage".

![Materiau](/img/cours/spark/2-3.PNG)

Sélectionner le nouveau materiau, puis dans le panneau de droite changer le type de Shader en "Face Paint" et appliquer la texture de maquillage.

![Add asset](/img/cours/spark/2-5.PNG)

Créer un nouveau FaceMesh qui servira uniquement pour le maquillage. Clic droit sur FaceTracker0 > Add > FaceMesh > Insert.

![Add asset](/img/cours/spark/2-6.PNG)

Sélectionner le nouveau faceMesh, puis cliquer sur le + à côté de Materials et choisir "maquillage".

Enfin, ajouter une deformation et choisir l'objet déja utilisé pour le premier faceMesh.

![Add asset](/img/cours/spark/2-7.PNG)

<br>

Exercice 3 : Ajouter un objet flottant sur le visage
===============

Ouvrir un nouveau projet dans Blender.

Supprimer tous les objets, puis importer faceMesh.obj. *Cette fois-ci nous allons utiliser le facemsh comme référence de taille pour modéliser notre objet*.

Modéliser votre objet autour du viage.

![Lunettes modélisée.](/img/cours/spark/3-1.PNG)

Sélectionner le ou les objets modélisés et les exporter au format FBX. Au moment d'exporter, cocher la case "Selected objects".

![Selected Objects](/img/cours/spark/3-2.PNG)

Importer l'objet dans Spark, puis le déposer sur le FaceTracker.

![Lunettes enfant faceTracker](/img/cours/spark/3-3.PNG)

L'objet est maintenant attaché au visage. On peut le déplacer, tourner ou aggrandir avec les flèches de couleur si besoin.

![Outils spark](/img/cours/spark/3-4.PNG)

Créer un nouveau matériau. Add asset > Material. Importer ensuite une texture d'environment. Add Asset > Environment Texture > Machine Shop.

![Add environment texture](/img/cours/spark/3-5.PNG)

Changer le type de ShaderType en "Physically Based". Choisir une couleur jaune, puis glisser le curseur Metallic à 100%. Enfin, cocher la case "Environment".

![PBR gold Shader Spark](/img/cours/spark/3-6.PNG)

Ajouter une lumière à la scène. Add object > Environment Light > Insert.

![Insert light](/img/cours/spark/3-7.PNG)

Sélectionner environmentLight0 puis sous texture, choisir machineShop0.

![Texture lumière](/img/cours/spark/3-8.PNG)

Enfin, sélectionner votre objet puis lui ajouter le materiau que vous avez créé.

![Lunettes finis](/img/cours/spark/3-9.PNG)












