const typeDefs = `#graphql
    type Query {
        books: [Book]!
    }

    type Book {
        name: String
    }
`;

module.exports = {
    typeDefs
}
