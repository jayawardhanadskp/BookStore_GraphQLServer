import express, { Application } from "express";
import mongoose from "mongoose";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import schema from "./schemas";
import resolvers from "./resolvers";
import cors from "cors";

const app: Application = express();
const PORT = parseInt(process.env.PORT || "4000");

app.use(express.json());

// connect to mongodb
mongoose.connect("mongodb://localhost/bookstore").then(() => console.log('Mongodb connected')).catch((err) => console.log(err));

// create ApolloServer
const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
});

// start the standlone server
startStandaloneServer(server, {
    listen: { port: PORT},
}).then(({url}) => {
    console.log(`Server run at ${url}`);
});