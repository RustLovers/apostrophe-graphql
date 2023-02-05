const { snakeToPascal } = require('./helpers');

module.exports = {
  generateTypedefs: (self) => {
    const modules = self.apos.synth.definitions;
    let queries = '';
    let types = '';
    const moduleNames = Object.keys(modules);

    for (const name of moduleNames) {
      const extend = modules[name].extend;
      if ([extend, extend?.extend].includes('@apostrophecms/piece-type')) {
        const moduleName = snakeToPascal(name.replace('@apostrophecms/', ''));
        types += `type ${moduleName} {\n
          name: String\n
        }\n`;
        queries += `get${moduleName}s: [${moduleName}]\n`;
      }
    }
    console.log(queries);
    return `#graphql
      type Query {
        ${queries}
      }

      ${types}
    `;
  }
};
