import {Client, QueryConfig} from "pg";
import dotenv from "dotenv";
dotenv.config();

export const sqlQuery = async(query: QueryConfig) =>{
    try {
        const sqlClient = new Client({
            host: process.env.DATABASE_HOST,
            user: process.env.DATABASE_USER_NAME,
            port: Number(process.env.DATABASE_PORT),
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME
        });

        sqlClient.connect();
        const response = await sqlClient.query(query)
        sqlClient.end();
        return response.rows;
    } catch (e) {
        throw e;
    }
}

