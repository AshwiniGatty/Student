import { sqlQuery } from "../lib/sqlClient";

export const updateStudent = async(params: {
    firstName?: string,
    lastName?: string,
    dob?: string
    id: number
}) => {
    const {firstName, lastName, dob, id} = params;
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
    const response = await sqlQuery(query);
    return response[0];
}