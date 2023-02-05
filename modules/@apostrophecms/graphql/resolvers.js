const resolvers = {
    Query: {
      books: () => [{ name: 'HOLA SOY UN LIBRO' }]
    }
  };

module.exports = {
    resolvers
}