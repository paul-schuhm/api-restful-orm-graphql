var express = require("express");
const { buildSchema } = require("graphql");
var { createHandler } = require("graphql-http/lib/use/express");
var { ruruHTML } = require("ruru/server");

const port = 3000;

var app = express();

//Schema
var schema = buildSchema(`
    type Query{
        hello: String
    }`);

//Implémentation du schéma
var root = {
  hello() {
    return "hello from express app";
  },
};

app.get("/", (req, res, next) => {
  res.send("Essayer les URL /grahql et /graphiql");
});

// Serve the GraphiQL IDE.
app.get("/graphiQL", (_req, res) => {
  res.type("html");
  res.end(ruruHTML({ endpoint: "/graphql" }));
});

app.all("/graphql", createHandler({ schema: schema, rootValue: root }));

app.listen(port, () => {
  console.log(`Demo express+graphql running on http://localhost:${port}`);
});
