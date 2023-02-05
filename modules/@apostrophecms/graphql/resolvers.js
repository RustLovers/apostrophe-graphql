const { snakeToPascal } = require('./helpers');

module.exports = {
  generateResolvers: (self) => {
    const modules = self.apos.synth.definitions;
    const queries = {};
    const resolvers = {};
    const moduleNames = Object.keys(modules);
    for (const name of moduleNames) {
      const extend = modules[name].extend;
      if (extend?.extend === '@apostrophecms/piece-type') {
        const moduleName = snakeToPascal(name.replace('@apostrophecms/', ''));
        queries[`get${moduleName}s`] = (a, b, ctx, c) => {
          console.log({ a, b, ctx });
          return [];
        };
        resolvers[moduleName] = {};
        // self.apos[moduleName.toLowerCase()].find({});
      }
    }

    return {
      Query: { ...queries },
      ...resolvers
    };
  }
};
