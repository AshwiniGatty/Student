import { sqlQuery } from "../lib/sqlClient";

export const getSudents = async() => {
    const query = {
        text: `SELECT * FROM STUDENT`
    }
    const response = await sqlQuery(query);
    return response;
}