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
#Lancer les services
docker compose watch
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

1. Créer la description dans l'OAD de la ressource "La liste des réservations pour un concert". Approche *Design First* ;
2. Implémenter la route `/login` ;
3. Implémenter la route `/concerts/id/reservations` ;
4. **Utiliser l'ORM Sequelize et une vraie base de données** pour authentifier les utilisateurs.