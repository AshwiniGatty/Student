import { sqlQuery } from "../lib/sqlClient"

export const createStudent = async(firstName:string, lastName: string, dob: string) => {

    const query = {
        text: ` INSERT INTO STUDENT(first_name, last_name, dob) VALUES ($1, $2, $3) RETURNING *`,
        values: [firstName, lastName, dob]
    }
    const response = await sqlQuery(query);
    return response[0];
}