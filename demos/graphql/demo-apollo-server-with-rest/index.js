const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const {
  ApolloServerPluginDrainHttpServer,
} = require("@apollo/server/plugin/drainHttpServer");
const express = require("express");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");

// The GraphQL schema
const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;

// A map of functions which return data for the schema. Implémentation du schéma
const resolvers = {
  Query: {
    hello: () => "world",
  },
};

const app = express();
const httpServer = http.createServer(app);

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

(async () => {
  await server.start();
  
  //Enregistrer nos middleware pour exposer nos ressources (RESTful API)
  app.get("/", (req, res, next) => {
    res.status(200).send("hello !");
  });

  //Enregistrer le middleware en charge de l'URL GraphQL (GraphQL endpoint)
  app.use('/graphql', cors(), bodyParser.json(), expressMiddleware(server));

  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000`);
})();
