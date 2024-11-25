const { ApolloServer } = require("apollo-server");
const db = require("./database");
const fs = require("fs");
const path = require("path");

// 1- Déclaration du schéma
const typeDefs = fs.readFileSync(
  path.join(__dirname, "../schema.graphql"),
  "utf8"
);

// 2 - Implémentation du schéma GraphQL : définition des resolvers. Un resolver par type. Structure identique au schéma
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => db.links,
  },
  //Le système de type suffit ici, on pourrait commenter le type Link
  //Le résolveur chercherait les clefs id, description et url sur chaque élément par défaut
  Link: {
    id: (parent) => parent.id,
    description: (parent) => parent.description,
    url: (parent) => parent.url,
  },
  Mutation: {
    post: (parent, args) => {
      let currentId = db.links.length;
      const link = {
        id: `link-${currentId + 1}`,
        description: args.description,
        url: args.url,
      };
      db.links.push(link);
      return link;
    },
    updateLink: (parent, args) => {
      let linkToUpdate = db.links.find((link) => link.id == `link-${args.id}`);
      if (!linkToUpdate) return null;
      linkToUpdate.description = args.description ? args.description : linkToUpdate.description;
      linkToUpdate.url = args.url ? args.url : linkToUpdate.url;
      return linkToUpdate;
    },
    deleteLink: (parent, args) => {
      let indexLinkToDelete = db.links.findIndex((link) => link.id == `link-${args.id}`);
      console.log(indexLinkToDelete, args.id, `link-${args.id}`)
      if (indexLinkToDelete === -1) return null;
      return db.links.splice(indexLinkToDelete, 1)[0]
    }
  },
};

// 3
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
