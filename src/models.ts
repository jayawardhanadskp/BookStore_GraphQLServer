import mongoose, { Document, Schema } from "mongoose";

export interface IAuthor extends Document {
    name:string;
    bio:string;
    books:IBook["_id"][];
}

export interface IReader extends Document {
    name:string;
    email:string;  
}

export interface IBook extends Document {
    title:string;
    author:IAuthor["_id"];
    reviews:IReview["_id"][];
}

export interface IReview extends Document {
    book:IBook["_id"];
    reader: IReader["_id"];
    content:string;
    reating:number;
}

// database schemas
const AuthorSchema = new Schema<IAuthor>({
    name: { type: String, required: true },
    bio: { type: String, required: true},
    books: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
});

const ReaderSchema = new Schema<IReader>({
    name : { type: String, required: true },
    email : { type: String, required: true },
});

const BookSchema = new Schema<IBook>({
    title : { type: String, required: true },
    author : { type: Object, ref: 'Author' },
    reviews : [{ type: Schema.Types.ObjectId, ref: 'Review' }]
});

const ReviewSchema = new Schema<IReview>({
    book : { type: Schema.Types.ObjectId, ref: 'Book' },
    reader : { type: Schema.Types.ObjectId, ref: 'Reader' },
    content : { type: String, required: true },
    reating : { type: Number, required: true }
});

export const Author = mongoose.model<IAuthor>("Author", AuthorSchema);
export const Reader = mongoose.model<IReader>("Reader", ReaderSchema);
export const Book = mongoose.model<IBook>("Book", BookSchema);
export const Review = mongoose.model<IReview>("Review", ReaderSchema);