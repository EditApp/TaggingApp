# TaggingApp
App for import photos, tag them and export information to json

# Getting app :
Git clone from this repo

cd TaggingApp

# Setting up environment :
npm install

# Building app :
npm run build

# Running on port http://localhost:1234/:
npm run dev


# Notes :
Cette mini app présente globalement mes compéténces, elle est faire from scratch (les composants graphiques, les features, meme sans create react app)

Le bundler est Parcel avec son setup simple
La structure des composants reutilisables est mise en place dans le dossier shared (exception useSvg est devenu un Hook donc peut etre a déplacer dans un nouveau dossier hooks ? )
Les fichiers suivent une convention uniforme
Les fonctions sont dans helpers
L'application possede le Layout, les Routes, Les CSS (resets, global, variables)
J'ai pas utilisé Yarn (je sais m'en servir) j'ai pris l'habitude avec npm

# Découpage du problème :
J'ai seté le repo git un peu tard (problème de token) donc je reprends ici les étapes:

1. Mise en place de l'application from scratch avec parcel et typescript
2. Construction de l'architecture et convention du code 
3. creation des composants et les fonctions de l'import de fichier et export sous format JSON
4. Ecriture de feature de taggage useSvg
5. Styling, je ne suis pas parfaitemen satisfaite du rendu encore il me faudrait du temps pour reflechir pour paufier l'interface
6. L'ecriture de fichier JSON est remplacé par generation de format JSON dans le code pour obtenir le rendu desiré.
7. L'ecriture du fichier JSON se fait en node, j'avait pas assez de temps pour regarder le sujet de près, je en maitrise pas node. Ce n'est pas compliqué mais il me faurait un peu plus de temps pour voir comment faire, server est necessaire, live server ou express, j'ai pas eu le temps de creuser
8. Il y a les déails a paufiner au niveau des tags (couleurs, précision), clear au niveau des champs, synchronisation de la zone de tag avec la zone de la photo (pour le moment nous avons le tag playground en fullscreen) 

J'espère que ca vous plait, je me suis eclatée en tout cas ;)


