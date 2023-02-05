// const { ApolloServer } = require('@apollo/server');
// const { expressMiddleware } = require('@apollo/server/express4');
// const { json } = require('body-parser');
// const cors = require('cors');

// module.exports = {
//   async init(self) {
//     const typeDefs = `#graphql

//         type Query {
//           books: [Book]!
//         }

//         type Book {
//           name: String
//         }
//     `;

//     const resolvers = {
//       Query: {
//         books: () => [{ name: 'HOLA SOY UN LIBRO' }]
//       }
//     };
//     const server = new ApolloServer({
//       typeDefs,
//       resolvers
//     });

//     await server.start();

//     self.apos.app.use('/api/v1/graphql', cors(), json(), expressMiddleware(server));
//   }
// };

module.exports = {
    init(self){
        console.log("Estoy cargando el modulo de GraphQL... VAIS A FLIPAR")
    }
}