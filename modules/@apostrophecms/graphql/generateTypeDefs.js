const { snakeToPascal } = require('./helpers');

module.exports = {
  generateTypedefs: (self) => {
    const modules = self.apos.synth.definitions;
    const moduleNames = Object.keys(modules);

    let { queries, types } = generateStaticTypedefs(self)

    for (const name of moduleNames) {
      const extend = modules[name].extend;
      if ([extend, extend?.extend].includes('@apostrophecms/piece-type')) {
        const moduleName = snakeToPascal(name.replace('@apostrophecms/', ''));
        const schema = self.apos.modules[name].schema;
        if (schema.length) {
          types += `type ${moduleName} {\n
            ${schema.map((t) => `${t.name}: String`).join('\n')}
          }\n`;
          queries += `get${moduleName}s: [${moduleName}]\n`;
        }
      }
    }
    return `#graphql
      type Query {
        ${queries}
      }

      ${types}
    `;
  }
};

function generateStaticTypedefs (self) {
    const modules = self.apos.modules
    const moduleNames = Object.keys(modules);
  
    let queries = '';
    let types = '';
  
    for (const name of moduleNames) {
      const dbModule = modules[name].db
      if(dbModule?.s?.namespace){
        const collectionName = dbModule.s.namespace.collection.replace('apos', '')
  
        types += `type ${collectionName} {\n
          name: String\n
        }\n`;
        queries += `get${collectionName}: [${collectionName}]\n`;
      }
    }
  
    return {
      queries,
      types
    }
  }