const graphql = require('./modules/@apostrophecms/graphql');

module.exports = {
  init(self) {
    graphql.start(self);
  }
};
