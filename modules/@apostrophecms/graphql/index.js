const { ApolloServer } = require('@apollo/server');
const { generateTypedefs } = require('./generateTypedefs.js');
const { generateResolvers } = require('./generateResolvers');

module.exports = {
  async init(self) {
    const typeDefs = generateTypedefs(self);
    const resolvers = generateResolvers(self);

    const server = new ApolloServer({
      typeDefs,
      resolvers
    });

    await server.start();
    self.apos.modules.graphql.server = server;
  },
  routes(self) {
    return {
      post: {
        // GET /api/v1/graphql/query
        async query(req, res) {
          const server = self.apos.modules.graphql.server;
          const result = await server.executeOperation(req.body, { contextValue: { req } });
          return res.send(result.body.singleResult.data);
        }
      }
    };
  }
};
