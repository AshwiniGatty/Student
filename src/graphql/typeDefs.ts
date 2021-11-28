import { gql } from "apollo-server-express";
export const typeDefs = gql`
    type Class{
        id: ID
        className: String
        students: [Student]
    }
    type Student{
        id: ID
        firstName: String
        lastName: String
        classId:ID
    }
    type Query {
        getStudents : [Class]
    }

    input createStudentInput {
        firstName: String
        lastName: String
        classId: ID
    }
    type Mutation {  
        createStudent(student: createStudentInput): Student
        deleteStudent(id: ID): Student
        updateStudent(firstName: String, lastName: String, classId: ID, id: ID): Student
    }
`;