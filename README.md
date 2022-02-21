# Software landscape

Decompose the graph of a software.

## Fonctionnalités

- *Parse* le code JavaScript d'un logiciel avec [babel-parser](https://babeljs.io/docs/en/babel-parser) pour en extraire les variables et constantes (affectées comme fonction, classe, objet…)
- Lister une série de cartes correspondant aux différentes interfaces (import, appel, transclusion…) des artefacts
- Pour chaque artefact on veut représenter
    - environnement de développement (plateforme, langage de programmation utilisé, version utilisée…)
    - temporelle
        - axe vertical (ordre des requêtes, synchonicité)
        - axe horizontal (effet de bord)
    - spatial
        - axe vertical (emplacement dans l'arborescence)
        - axe horizontal (quelles dépendances)
    - fonctionnel (typage des *inputs* et *outputs*, effet sur l'état du logiciel)
    - développement (explication sur la conception et la mise en œuvre)
    - utilisation (inscructions du la réutilisation de l'artefact)
