const graphql = require("modules/@apostrophecms/graphql");

module.exports = {
  bundle: {
    directory: "modules",
    modules: ["@apostrophe/graphql"],
  },
  init(self){
    graphql.init(self)
  }
};
