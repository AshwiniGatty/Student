import { gql } from "apollo-server-express";
export const typeDefs = gql`
    type Student{
        result:String
        id: ID
        first_name: String
        last_name: String
        dob: String
    }
    type Query {
        getStudents : [Student]
    }

    input createStudentInput {
        first_name: String,
        last_name: String,
        dob: String
    }
    type Mutation {
        createStudent(student: createStudentInput): Student
        deleteStudent(id: ID): String
        updateStudent(id: ID, first_name: String, last_name: String, dob: String): Student
    }
`;