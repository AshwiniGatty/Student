import express from "express";
import {ApolloServer, gql} from "apollo-server-express";
import { typeDefs } from "./graphql/typeDefs";
import { resolvers } from "./graphql/resolvers";
const app = express();
const port = 4000;

const startServer = async() => {
    const apolloServer =new ApolloServer({
        typeDefs,
        resolvers
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({app});

    app.use((req,res) =>{
        res.send("Helloo from express apollo server");
    })
    app.listen( port, () => {
        // tslint:disable-next-line:no-console
        console.log( `server started at http://localhost:${ port }` );
    });
};

startServer();