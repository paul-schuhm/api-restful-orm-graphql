# Démo - GraphQl dans une application Express

~~~bash
npm i
npm run start
~~~

Requêtes graphql :

~~~bash
curl localhost:3000/graphql
curl -X POST -H "Content-Type: application/json" -d'{"query": "{hello}"}' http://localhost:3000/graphql
#Essayer avec un champ non défini dans le schéma
curl -X POST -H "Content-Type: application/json" -d'{"query": "{hi}"}' http://localhost:3000/graphql
~~~

## Références

- [Running Express + GraphQL](https://graphql.org/graphql-js/running-an-express-graphql-server/)