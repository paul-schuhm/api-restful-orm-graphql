# Démo - Design-First avec Swagger Editor

- [Démo - Design-First avec Swagger Editor](#démo---design-first-avec-swagger-editor)
  - [Lancer l'éditeur avec un OAD](#lancer-léditeur-avec-un-oad)
  - [Créer un OAD valide minimal](#créer-un-oad-valide-minimal)
  - [Ajouter un path `/`, `/concerts`](#ajouter-un-path--concerts)
  - [Ajouter une action `GET /`, GET /concerts\`](#ajouter-une-action-get--get-concerts)
  - [Ajouter schema, réponse, etc.](#ajouter-schema-réponse-etc)
  - [Ajouter un serveur pour tester l'api et démarrer l'implémentation du endpoint sur Node.js](#ajouter-un-serveur-pour-tester-lapi-et-démarrer-limplémentation-du-endpoint-sur-nodejs)
  - [Générer le boilerplate code avec Swagger Autogen](#générer-le-boilerplate-code-avec-swagger-autogen)
  - [Implémenter l'API](#implémenter-lapi)
  - [Valider que l'implémentation match à la description](#valider-que-limplémentation-match-à-la-description)
  - [Annexe](#annexe)
  - [Références](#références)


On utilise ici le projet d'API démarré avec [le kit de développement](https://github.com/paul-schuhm/starterpack-api-nodejs) utilisé dans le cours.

Dans cette démo, on emploie une [approche design-first](https://learn.openapis.org/best-practices.html#use-a-design-first-approach), où le design et la description guident l'implémentation.

> Penser à assouplir la Same Origin Policy (SOP) avec une politique CORS (en tête HTTP `Allow-Control-Allow-Origin`) pour permettre à Swagger Editor de lire les réponses de l'API ! [Voir la démo sur la *Same Origin Policy* au besoin](https://github.com/paul-schuhm/demo-same-origin-policy).

Lancer le kit de développement:

~~~bash
docker compose watch
~~~

Lancer Swagger Editor:

~~~bash
docker run -d -p 5005:8080 --name se swaggerapi/swagger-editor
~~~

Arrêter ou arrêter *et* supprimer le conteneur:

~~~bash
docker stop se
#ou
docker rm -f se
~~~

<!-- 
Problèmes rencontrés:

* Serveur enregistré dans Swagger Editor : 
- url est incorrecte dans l'interface. Swagger Editor fabrique une URL relative, en prefixant par son url => Mettre le schéma [x]
- Impossible de contacter le conteneur Node contenant l'API (starter) depuis le conteneur Swagger Editor. Si je lance un shell sur le conteneur de swagger editor => Normal, localhost pointe sur le conteneur lui même. La solution la plus simple est d'ajouter le conteneur se sur le réseau du projet [x]
- Impossible de demander au Swagger Editor de résoudre le nom du conteneur (en IP). Pourtant sur le conteneur se: curl demo-rest-api-api:3000 fonctionne... => Le pb c'est la politique CORS ! C'est pour ce que ca marche avec cURL, cURL n'a pas d'origine, Swagger Editor si ! Non ça marche pas quand meme, meme avec CORS adaptée... []
 -->

## Lancer l'éditeur avec un OAD

Si vous voulez servir un fichier fichier de description (OAD) depuis votre machine hôte `openapi.yaml`, le monter via un volume Docker et utiliser la variable d'environnement `SWAGGER_FILE`:

~~~bash
docker run -d -p 5005:8080 --name se -v $(pwd):/tmp -e SWAGGER_FILE=/tmp/openapi.yaml swaggerapi/swagger-editor
~~~

## Créer un OAD valide minimal

Vider l'éditeur, puis:

~~~yaml
openapi: 3.1.0
~~~

Lisez les erreurs [puis la spec](https://swagger.io/specification/v3/) pour construire un OAD correct. L'élément root de l'OAD est l'OpenAPI Object. Clef obligatoires:

- openapi [x]
- info []
  - title []
  - version []
- path []

On arrive à:

~~~yaml
openapi: 3.0.0
info:
  title: 'Démo Design-first du service web de billetterie de concerts'
  version: 0.0.1
paths: {}
~~~

## Ajouter un path `/`, `/concerts`

> Insert/Add Path Item

## Ajouter une action `GET /`, GET /concerts`

> Insert/Add Operation Item

## Ajouter schema, réponse, etc.


## Ajouter un serveur pour tester l'api et démarrer l'implémentation du endpoint sur Node.js


~~~yaml
servers:
  - url: http://localhost:5001
~~~

Test `GET /` via l'UI, ça marche ! 

## Générer le boilerplate code avec Swagger Codegen

> Voir la démo dédiée

## Implémenter l'API

> Il est l'heure de respecter le contrat de l'OAD et d'implémenter l'API. Vous pouvez vous servir de Swagger CodeGen pour partir d'un *stub* de serveur et d'un client dans la technologie de votre choix. Ou alors simplement via Swagger UI (la documentation interactive).

> Il existe aussi des outils dédiés pour générer des mocks complets du service web comme [prism](https://github.com/stoplightio/prism)

## Aller plus loin : Générer une suite de tests

Il existe des outils pour générer des suites de tests de votre API à partir de l'OAD

Voir les outils de test: https://tools.openapis.org/categories/testing.html

## Aller plus loin : Valider l'implémentation

Il existe des outils pour valider votre implémentation (vérifier automatiquement que votre implémentation respecte votre description et les réponses du service web).

Voir les outils de validation disponibles : https://tools.openapis.org/categories/data-validators

## Annexe

[Accéder à l'OAD de la démo](./oad.yaml)

> L'OAD fourni correspond à celui du service de billetterie. Il est incomplet et son développement est à poursuivre.

## Références

- [Dépôt Swagger Editor](https://github.com/swagger-api/swagger-editor);
- [Utiliser Swagger Editor avec Docker](https://github.com/swagger-api/swagger-editor?tab=readme-ov-file#docker), [voir l'image sur DockerHub](https://hub.docker.com/r/swaggerapi/swagger-editor/)
- [The OpenAPI Specification Explained](https://learn.openapis.org/specification/), **le guide**
- [OpenAPI Specification](https://spec.openapis.org/oas/v3.1.0#openapi-specification), **la référence complète**
- [Utiliser Swagger Editor avec Docker](https://github.com/swagger-api/swagger-editor?tab=readme-ov-file#docker), [voir l'image sur DockerHub](https://hub.docker.com/r/swaggerapi/swagger-editor/)
- [Best practices et avantages Design First](https://learn.openapis.org/best-practices.html#use-a-design-first-approach)