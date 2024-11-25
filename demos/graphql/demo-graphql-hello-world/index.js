var { graphql, buildSchema } = require("graphql");

//Construit un schéma

var schema = buildSchema(`
 type Query{
     hello: String
 }
`);

//rootValue object: fournit un resolver (une fonction) pour chaque endpoint de l'API
var rootValue = {
  hello() {
    return "hello world";
  },
};

//Executer une requête avec la fonction graphql
graphql({
  schema,
  source: "{hello}",
  rootValue,
}).then((response) => {
  console.log(response);
  console.log(response.data.hello);
});
