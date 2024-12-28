import { gql } from "apollo-server-express";

const typeDefs = gql`

    type Author {
        id: ID!
        name: String!
        bio: String!
        books: [Book]
    }

    type Reader {
        id: ID!
        name: String!
        email: String!
        reviews: [Review]
    }

    type Book {
        id: ID!
        title: String!
        author: Author!
        reviews: [Review]
    }

    type Review {
        id: ID!
        book: Book!
        reader: Reader!
        content: String!
        rating: Int!
    }
`;