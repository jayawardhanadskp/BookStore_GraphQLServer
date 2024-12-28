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