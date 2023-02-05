const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { json } = require('body-parser');
const cors = require('cors');
const typeDefs = require('./modules/@apostrophecms/graphql/typedefs');
const resolvers = require('./modules/@apostrophecms/graphql/resolvers');

module.exports = {
  async init(self) {
    const server = new ApolloServer({
      typeDefs,
      resolvers
    });

    await server.start();

    self.apos.app.use('/api/v1/graphql', cors(), json(), expressMiddleware(server));
  }
};