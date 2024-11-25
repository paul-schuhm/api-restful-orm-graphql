# Démo Service GraphQL complet avec Apollo


- [Démo Service GraphQL complet avec Apollo](#démo-service-graphql-complet-avec-apollo)
  - [Dépendances notables](#dépendances-notables)
  - [Lancer le projet](#lancer-le-projet)
  - [Utiliser la démo](#utiliser-la-démo)
  - [Exercice](#exercice)
  - [Références](#références)

Un démo d'un service web GraphQL, clone d'un Hacker News.

## Dépendances notables

- [GraphQL.js](https://www.npmjs.com/package/graphql), [implémentation JS de référence](https://graphql.org/graphql-js/) de la spécification GraphQL
- [@apollo/server](https://www.npmjs.com/package/@apollo/server), version 4 du serveur Apollo

## Lancer le projet

~~~bash
npm i
npm run start
~~~

## Utiliser la démo

Requête

~~~bash
curl -X POST \
-H 'content-type: application/json' \
-H 'Accept: application/json' \
-data '{"query":"query { __typename }"}'
http://localhost:4000/
~~~

Aller sur l'URL avec le navigateur, explorer votre API avec l'IDE explorer d'Apollo https://studio.apollographql.com/sandbox/explorer.

**Requête**

~~~js
query {
  info,
  feed{
    id,
    url,
    description
  }
}
~~~

**Mutation**

~~~js
mutation {
  post(url: "www.prisma.io", description: "Prisma replaces traditional ORMs") {
    id
  }
}
~~~

`{id}` indique le résultat de la requête à retourner.

## Exercice

1. **Implémenter le CRUD complet pour le schéma suivant** :

~~~js
type Query {
  # Fetch a single link by its `id`
  link(id: ID!): Link
}

type Mutation {
  # Update a link
  updateLink(id: ID!, url: String, description: String): Link

  # Delete a link
  deleteLink(id: ID!): Link
}
~~~

Requête

~~~js
mutation MaMutation($url: String!, $description: String!, $updateLinkId: ID!) {
  updateLink(id: $updateLinkId, description: $description) {
    description
  }
}
~~~

avec variables `$description`, `$updateLinkId`, `$url`

Avec cURL:

~~~bash
curl --request POST \
    --header 'content-type: application/json' \
    --url http://localhost:4000/ \
    --data '{"query":"mutation MaMutation($url: String!, $description: String!, $updateLinkId: ID!) {\n  updateLink(id: $updateLinkId, description: $description) {\n    description\n  }\n}","variables":{"updateLinkId":"1","url":"foo.com","description":"description mise à jour"}}'
~~~

2. [Finir le tutoriel](https://www.howtographql.com/graphql-js/1-getting-started/). Utiliser Sequelize au lieu de Prisma pour la partie base de données. **Faire en priorité la partie** [Realtime GraphQL Subscriptions](https://www.howtographql.com/graphql-js/7-subscriptions/) pour tester les abonnements.

## Références

- [Getting Started](https://www.howtographql.com/graphql-js/1-getting-started/), tutoriel publié par [howtographql](https://www.howtographql.com), avec Node.js et Apollo. Contrairement au tutoriel, nous utilisons ici la dernière version d'Apollo (v4)
- [Get Started with Apollo Server](https://www.apollographql.com/docs/apollo-server/getting-started), guide sur Apollo Server v4