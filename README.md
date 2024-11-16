# API RESTful, ORM et GraphQL

Les sources (démo, exercices, corrections) du module de formation API RESTful, ORM et GraphQL (4e année)

- [API RESTful, ORM et GraphQL](#api-restful-orm-et-graphql)
  - [Exercices et corrections](#exercices-et-corrections)
    - [Exercices sur la conception d'API](#exercices-sur-la-conception-dapi)
  - [Kit de développement web API](#kit-de-développement-web-api)
  - [Références](#références)
    - [API RESTful, RFC utiles, Media-Types et sémantique des hypermédias](#api-restful-rfc-utiles-media-types-et-sémantique-des-hypermédias)
    - [Spécification OpenAPI](#spécification-openapi)
    - [ORM](#orm)
    - [GraphQL](#graphql)


## Exercices et corrections

### Exercices sur la conception d'API

[Voir les corrections du module Dev API RESTful](https://github.com/paul-schuhm/web-api/blob/main/exercices/suggestions-exercices-web-api)

- [Exercice 7 : Prise en main de cURL](https://github.com/paul-schuhm/web-api/blob/main/exercices/suggestions-exercices-web-api/exercice-7.md)

## Kit de développement web API

[Accéder au dépôt Starter pack: RESTful web API avec Node.js, Express.js, MySQL et Adminer](https://github.com/paul-schuhm/starterpack-api-nodejs). [Suivre les instructions](https://github.com/paul-schuhm/starterpack-api-nodejs?tab=readme-ov-file#lancer-le-projet-avec-compose) pour l'installer.


## Références

### API RESTful, RFC utiles, Media-Types et sémantique des hypermédias

[Voir les références du module Dev API RESTful](https://github.com/paul-schuhm/web-api?tab=readme-ov-file#r%C3%A9f%C3%A9rences)

### Spécification OpenAPI 

OpenAPI est une description standardisée d'API et un framework de développement d'API HTTP. 

> Elle ne s'intéresse pas à la sémantique des messages (vocabulaire, actions)

- [La spécification OpenAPI](https://www.openapis.org/what-is-openapi) est une description formelle et standardisée d'une web API au format texte (JSON ou Yaml). Elle est maintenue et développée par l'[OpenAPI Initiative (OAI](https://www.openapis.org/about)), un consortium ouvert d'experts de l'industrie. Ce projet collaboratif est porté par la [Linux Foundation](https://www.linuxfoundation.org/).  
- La spécification ouverte OpenAPI a été crée à l'origine par [Wordnik](https://en.wikipedia.org/wiki/Wordnik) en 2010, sous le nom de *Swagger specification*. [SmartBear Software](https://en.wikipedia.org/wiki/SmartBear_Software) et d'autres acteurs ont repris la spécification à partir de 2015. Le projet est devenu l'*OpenAPI Specification*.
- [Swagger](https://en.wikipedia.org/wiki/Swagger_(software)) désigne aujourd'hui *une suite d'outils* pour le développement d'API, publiés par [SmartBear Software](https://en.wikipedia.org/wiki/SmartBear_Software). Cette enterprise est membre du comité de l'OpenAPI Initiative et maintient et [développe plusieurs logiciels open source](https://swagger.io/tools/open-source/) autour de la spécification, comme [Swagger Editor](https://swagger.io/tools/swagger-editor/). Il existe [de nombreux autres outils](https://tools.openapis.org/) développés par la communauté
- [Le guide officiel pour démarrer avec OpenAPI](https://learn.openapis.org/) ;
- [OpenAPI tooling](https://tools.openapis.org/), liste tous les outils développés par la communauté pour travailler avec la spécification ;
- [The OpenAPI Specification Explained](https://learn.openapis.org/specification/), **le guide**
- [OpenAPI Specification](https://spec.openapis.org/oas/v3.1.0#openapi-specification), **la référence complète**
- [OpenAPI Best Practices](https://learn.openapis.org/best-practices.html), un guide de bonnes pratiques et de recommandations pour travailler avec la spécification OpenAPI
- [OpenAPI Initiative](https://www.openapis.org/), le site web officiel de la spécification OpenAPI, une description standardisée de web API;

### ORM

- [Les ORM (Object-Relational Mapping)](https://gayerie.dev/epsi-b3-orm/javaee_orm/intro.html), de David Gayerie, avec exemple dans l'écosystème Java;
- [Sequelize](https://sequelize.org/)
- [Sequelize v6](https://sequelize.org/docs/v6/)
- [Anemic Domain Model](https://www.martinfowler.com/bliki/AnemicDomainModel.html), de Martin Fowler. Utiliser des objets "anémiques", débarrassés de tout comportement délégués à une couche *service* est un *anti-pattern*. En POO, un objet métier (du domaine) devrait contenir toute la logique métier placée sous sa responsabilité. Le problème avec les ORMs c'est que la couche persistance est "confondue" avec les objets métier. Soit on les découple (et on "brise" la POO), soit on les maintient (et on couple la logique de persistance avec la logique métier, ce qui n'est pas désirable). Il faut donc faire des compromis entre les deux (ou ne pas utiliser d'ORM !) ;
- [Anemic Domain Model vs. Rich Domain Model](https://medium.com/@inzuael/anemic-domain-model-vs-rich-domain-model-78752b46098f), billet de Matthias Schenk, synthèse sur ce problème discuté dans l'ouvrage [Implementing Domain-Driven Design](https://www.oreilly.com/library/view/implementing-domain-driven-design/9780133039900/), d'Eric Evans;
- [Adding behavior to Entities](https://www.doctrine-project.org/projects/doctrine-orm/en/current/tutorials/getting-started.html#adding-behavior-to-entities), discussion dans la documentation de l'ORM Doctrine sur la différence entre les entités anémiques (*anemic entities*) et les entités riches (*rich entities*).
- [Your Database Skills Are Not 'Good to Have' And a hateful ode to Object-Relational Mappers](https://renegadeotter.com/2023/11/12/your-database-skills-are-not-good-to-have.html), d'Andrei Taranchenko

### GraphQL

- [GraphQL](https://graphql.org/), le site officiel
- [Documentation officielle](https://graphql.org/learn/)

