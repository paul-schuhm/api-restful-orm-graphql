# Démo OpenAPI - Swagger Autogen


- [Démo OpenAPI - Swagger Autogen](#démo-openapi---swagger-autogen)
  - [Swagger Autogen](#swagger-autogen)
  - [Installer Swagger Codegen](#installer-swagger-codegen)
  - [Exemple d'utilisation](#exemple-dutilisation)
    - [Générer un SDK client à partir d'un document OpenAPI](#générer-un-sdk-client-à-partir-dun-document-openapi)
    - [Générer un stub serveur à partir d'un document OpenAPI](#générer-un-stub-serveur-à-partir-dun-document-openapi)
    - [Utiliser le code client pour consommer l'API](#utiliser-le-code-client-pour-consommer-lapi)
  - [Références](#références)


## Swagger Autogen

A partir de l'OAD on peut générer:

- **Un code stub serveur** dans de nombreux langages;
- **Un SDK client** de l'API dans de nombreux langages;

> "Stub" : ébauche

**Swagger** : Ensemble d'outils open source basés sur la spécification Open API pour designer, développer, documenter et consommer (client) des APIs RESTful.

- [__Swagger Editor__](https://editor.swagger.io/)
- [__Swagger UI__](https://github.com/swagger-api/swagger-ui)
- [__Swagger Codegen__](https://github.com/swagger-api/swagger-codegen) : générer le code serveur et le code client à partir de votre document OpenAPI


## Installer Swagger Codegen

> Attention, il existe deux version de Swagger Codegen maintenues séparément (3.X et 2.X)

- [Voir les instructions pour installer Swagger Codegen](https://github.com/swagger-api/swagger-codegen?tab=readme-ov-file#getting-started);
- [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) est développé en Java.

~~~bash
#Installer version 3.x
wget https://repo1.maven.org/maven2/io/swagger/codegen/v3/swagger-codegen-cli/3.0.63/swagger-codegen-cli-3.0.63.jar -O swagger-codegen-cli.jar
#Tester
java -jar swagger-codegen-cli.jar -h
~~~

## Exemple d'utilisation

### Générer un SDK client à partir d'un document OpenAPI

~~~bash
#Afficher les langages disponibles
java -jar swagger-codegen-cli.jar langs
#Générer un client php à partir de l'oad
java -jar swagger-codegen-cli.jar generate -i ./oad.yaml -l php -o php
#Générer un client javascript (es6) à partir de l'oad
java -jar swagger-codegen-cli.jar generate -i ./oad.yaml -l javascript -o js
#Voir les configurations possibles pour un langage (ici javascript)
java -jar swagger-codegen-cli.jar config-help -l javascript
~~~

### Générer un stub serveur à partir d'un document OpenAPI

Voir ici un [guide sur la génération de différents stub server](https://github.com/swagger-api/swagger-codegen/wiki/server-stub-generator-howto)

~~~bash
java -jar swagger-codegen-cli.jar -l nodejs-server
~~~

### Utiliser le code client pour consommer l'API

Par exemple, avec le client PHP généré:

~~~bash
cd SwaggerClient-php
composer install
php index.php
~~~

> Penser à servir votre API pour le client ou un mock.

## Références

- [Swagger Codegen Documentation](https://swagger.io/docs/open-source-tools/swagger-codegen/)
- [swagger-codegen](https://github.com/swagger-api/swagger-codegen#getting-started), le dépôt Github de l'outil
- [FAQ Swagger-Codegen](https://github.com/swagger-api/swagger-codegen/wiki/FAQ)
