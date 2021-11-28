import { sqlQuery } from "../../lib/sqlClient";
import { getStudent } from "./getStudent";

export const deleteStudent = async(id: number) => {
    try {
        const response = await getStudent(id);
        if(response.length > 0) {
            const query = {
                text: `DELETE
                        FROM
                            STUDENT
                        WHERE
                            id = $1`,
                values: [id]
            }
            await sqlQuery(query);
            return `Student ID: ${id} deleted `;
        } else {
            return `Student ID: ${id} not found`
        }
    } catch(e) {
        throw e;
    }

}

