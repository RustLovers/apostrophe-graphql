const { ApolloServer } = require('@apollo/server');
const { generateTypedefs } = require('./generateTypedefs');
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
  restApiRoutes(self) {
    return {
      // POST /api/v1/graphql
      async post(req) {
        const server = self.apos.modules.graphql.server;
        const result = await server.executeOperation(req.body, { contextValue: { req } });
        return result.body.singleResult.data;
      }
    };
  }
};
