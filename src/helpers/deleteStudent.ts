import { sqlQuery } from "../lib/sqlClient";

export const deleteStudent = async(id: number) => {
    const query = {
        text: `DELETE
                FROM
                    STUDENT
                WHERE
                    id = $1`,
        values: [id]
    }
    const response = await sqlQuery(query);
    return response;
}