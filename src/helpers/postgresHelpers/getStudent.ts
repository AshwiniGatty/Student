import { sqlQuery } from "../../lib/sqlClient";

export const getStudent = async(id: number) => {
    try {
        const query = {
            text: `SELECT
                        *
                    FROM
                        STUDENT
                    WHERE
                        id = $1`,
            values: [id]
        }

        const response = await sqlQuery(query);
        return response;
    } catch(e) {
        throw e;
    }
}