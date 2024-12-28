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

    #  quearys
    type Query {
        authors: [Author]
        readers: [Reader]
        book(authorId: ID): [Book]
        reviews(bookId: ID): [Review]

        author(id: ID): Author
        book(id: ID): Book
        reader(id: ID): Reader
        review(id: ID): Review
    }

    # mutations
    type Mutation {
        addAuthor(name: String!, bio: String): Author!
        addBook(title: String!, authorId: ID): Book!
        addReview(bookId: ID, readerId: ID, content: String!, rating: Int!): Review!
        addReader(name: String!, email: String!): Reader!
    }
`;