import {Client, QueryConfig} from "pg";

export const sqlQuery = async(query: QueryConfig) =>{
    const sqlClient = new Client({
        host: "localhost",
        user: "user_name_for_postgres",
        port: 5432,
        password: "password_for_postgres",
        database:"database_name_for_postgres"
    });

    sqlClient.connect();
    const response = await sqlClient.query(query)
    sqlClient.end();
    return response.rows;
}

