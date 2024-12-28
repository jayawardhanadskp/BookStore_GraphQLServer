import { stringify } from "querystring";
import { Author, Reader, Book, Review } from "./models";
import mongoose, { Query } from "mongoose";

const resolvers = {
    Query: {
        authors() {
            return Author.find();
        },

        readers() {
            return Reader.find();
        },

        async books( _: any, { authorId }: any) {
            if (authorId) {
                return Book.find({ authorId }).populate("author");
            }
            return Book.find().populate("author");
        },

        async reviews( _: any, { bookId }: any) {
            if (bookId) {
                return Review.find({ bookId });
            }
            return Review.find();
        },



        async author( _: any, { id }: any) {
            return Author.findById(id);
        },
        async book( _: any, { id }: any ) {
            return Book.findById(id).populate("author");
        },
        async reader( _: any, { id }: any ) {
            return Reader.findById(id);
        },
        async review( _: any, { id }: any ) {
            return Review.findById(id).populate("book").populate("reader");
        }
    },

    
}