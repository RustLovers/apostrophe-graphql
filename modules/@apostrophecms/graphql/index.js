const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { json } = require('body-parser');
const { generateTypedefs } = require('./generateTypedefs');
const { generateResolvers } = require('./generateResolvers');

module.exports = {
  async init(self) {
    const typeDefs = generateTypedefs(self);
    const resolvers = generateResolvers(self);

    const server = new ApolloServer({
      context: (req, res, next) => ({
        req,
        res,
        next
      }),
      typeDefs,
      resolvers
    });

    await server.start();

    self.apos.app.use('/api/v1/graphql', json(), expressMiddleware(server));
  }
};
