import { sqlQuery } from "../lib/sqlClient";
import { getStudent } from "./getStudent";

export const updateStudent = async(params: {
    firstName?: string,
    lastName?: string,
    dob?: string
    id: number
}) => {
    try {
        const {firstName, lastName, dob, id} = params;
        let response = await getStudent(id);
        if(response.length > 0 ) {
            const query = {
                text: `UPDATE
                            STUDENT
                        SET
                            first_name = COALESCE($1, first_name),
                            last_name = COALESCE($2, last_name),
                            dob = COALESCE($3, dob)
                        WHERE
                            id = $4
                        RETURNING
                            *`,
                values: [firstName,lastName, dob, id]
            }
            response = await sqlQuery(query);
            return response[0];
        } else {
            return "No student updated";
        }
    } catch(e) {
        throw e;
    }
}