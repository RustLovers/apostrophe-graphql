export default typeDefs = `#graphql
    type Query {
        books: [Book]!
    }

    type Book {
        name: String
    }
`;
