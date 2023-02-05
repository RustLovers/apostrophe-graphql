const { snakeToPascal } = require('./helpers');

module.exports = {
  generateResolvers: (self) => {
    const modules = self.apos.synth.definitions;
    const moduleNames = Object.keys(modules);

    const { queries, resolvers } = generateStaticResolvers(self);

    for (const name of moduleNames) {
      const extend = modules[name].extend;
      if ([ extend?.extend, extend ].includes('@apostrophecms/piece-type')) {
        const moduleName = snakeToPascal(name.replace('@apostrophecms/', ''));
        const schema = self.apos.modules[name].schema;
        if (schema.length) {
          queries[`get${moduleName}s`] = (_, __, { req }) => {
            console.log(req);
            return self.apos.modules[moduleName.toLowerCase()].find(self.apos.task.getReq(), {}).toArray();
          };
          resolvers[moduleName] = {};
        }
      }
    }

    return {
      Query: { ...queries },
      ...resolvers
    };
  }
};

function generateStaticResolvers(self) {
  const modules = self.apos.modules;
  const moduleNames = Object.keys(modules);
  const queries = {};
  const resolvers = {};
  for (const name of moduleNames) {
    const dbModule = modules[name].db;
    if (dbModule?.s?.namespace) {
      const collectionName = dbModule.s.namespace.collection.replace(
        'apos',
        ''
      );
      queries[`get${collectionName}`] = (a, b, ctx, c) => {
        return [];
      };
      resolvers[collectionName] = {};
    }
  }

  return {
    ...queries,
    ...resolvers
  };
}
