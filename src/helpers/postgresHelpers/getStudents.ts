import { sqlQuery } from "../../lib/sqlClient";

export const getSudents = async() => {
    try {
        const query = {
            text: `SELECT * FROM STUDENT`
        }
        const response = await sqlQuery(query);
        return response;
    } catch(e) {
        throw e;
    }
}