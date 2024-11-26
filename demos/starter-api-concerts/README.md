# Démo - Conception et implémentation du service de billeterie (wip)

> Pour l'instant le projet n'a implémenté que les ressources "La liste des concerts à venir" et "Le détail d'un concert".

## Lancer le projet

~~~bash
#Créer votre fichier d'environnement local
cp .env.dist .env
#Générer la clef
node gensecretkey.js
#Créer la base de données
npx sequelize-cli db:create
#Initialiser le schéma et les privilèges
npx sequelize-cli db:migrate
#Initialiser les données en base
npx sequelize-cli db:seed --seed 20241126083002-insert-users.js
#Lancer les services
docker compose watch
~~~

> Remarque: L'idéal ici serait d’exécuter `sequelize-cli` directement sur le conteneur Node pour harmoniser les variables d'environnement


Tester

~~~bash
curl localhost:5001
~~~

S'authentifier

~~~bash
curl -X POST localhost:5001/login -d"pseudo=ed&password=astrongpassword"
~~~

Accéder à une ressource protégée

~~~bash
curl localhost:5001/concerts/1/reservations \
-H"Authorization: Bearer <votre jwt>"
~~~


## Lancer Swagger Editor

Pour le design et le test de l'API, utiliser Swagger Editor

~~~bash
docker run -d \
  -p 5005:8080 \
  --name se \
  -v $(pwd):/tmp \
  -e SWAGGER_FILE=/tmp/openapi.yaml \
  swaggerapi/swagger-editor
~~~

## Exercice

1. Créer la description dans l'OAD de la ressource "La liste des réservations pour un concert". Approche *Design First* ; [x]
2. Implémenter la route `/login` ; [x]
3. **Utiliser l'ORM Sequelize et une vraie base de données** pour authentifier les utilisateurs. [x]
4. Implémenter la route `/concerts/id/reservations` ; []
5. Utiliser l'ORM Sequelize et une vraie base de données pour les concerts et les réservations []