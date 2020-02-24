---
title: "Workshop VR"
date: 2020-02-23T17:56:22+02:00
draft: false
---

Ressources utiles :
[Annonce du lancement et explication rapide du XR Interaction Toolkit](https://blogs.unity3d.com/2019/12/17/xr-interaction-toolkit-preview-package-is-here/)

[Tuto sur Youtube sur les bases de XR Interaction Toolit (en anglais)](https://www.youtube.com/watch?v=ndwJHpxd9Mo&list=PLmc6GPFDyfw90Xo_T69Va6kw07qJ8nLz7&ab_channel=VRwithAndrew)

[Exmemples officiels sur github](https://github.com/Unity-Technologies/XR-Interaction-Toolkit-Examples/issues)

[Doc officielle Unity](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@0.9/manual/index.html)

Vous pouvez télécharger un projet Unity contenant tous les exemples vus durant le workshop [ici](https://drive.google.com/open?id=1vZtj9fTIu6GNEWeUwNL6x0EzMddZX6IP).


Pour utiliser le toolkit : utiliser un version d'unity récente (2019.3). Installer les package "XR Management" et "XR Interaction Toolkit" depuis le package manager. Penser à activer les package en preview dans le menu Advanced.
Dans les reglages du projet, installer le Oculus XR Plugin si vous utilisez un oculus (dans XR Plugin Management). Si vous utilisez un casque Steam VR, cochez "Virtual Reality Supported" dans les player settings.

Pour ajouter une caméra VR au projet, clic droit dans la hiérarchie puis XR > Room Scale XR Rig. Dans le XR Rig on peut trouver la caméra ainsi que les controllers droit et gauche ainsi que les paramètres. 

Par défaut les controllers projetent un rayon qui permet d'interagir avec les objets que l'on pointe. On peut supprimer les trois derniers composants d'un controller et ajouter un "XR Direct Interactor" pour se saisir directement des objets. Ajouter ensuite au controller un Box Collider, l'ajuster à la taille de la manette et activer "Is Trigger".

Pour rendre un objet interactif, il faut lui ajouter un composant "XR Grab Interactable".
Par défaut on se saisit d'un objet par on centre. Pour déplacer le point de saisie de l'objet on peut utiliser le paramètre "Attache Transform". On peut y attacher un empty placé à la position voulu, ou un des controller.

Pour activer la téléportation, choisir l'objet sur lequel vous désirez activer la téléportation puis lui ajouter un composant "Teleportation Area". Ensuite ajouter au XR Rig les composants suivants : Locomotion System, Teleportation Provider.

On peut maintenant se téléporter en pointant le sol. On peut changer la touche utilisée pour se téléporter dans les paramètres des controllers, sous "Select Usage". On peut aussi un objet permettant de viser là ou on se téléporte. Pour cela, créer un objet (sans collider!), puis l'ajouter à "Custom Reticle" dans le composant Teleportation Area.