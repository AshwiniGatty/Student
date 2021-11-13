import { getSudents } from "../helpers/getStudents";
import { createStudent } from "../helpers/createStudent";
import { deleteStudent } from "../helpers/deleteStudent";
import { updateStudent } from "../helpers/updateStudent";

export const resolvers = {
    Query: {
        getStudents: async ()=> {
            const response = await getSudents();
            return response;
        }
    },
    Mutation: {
        createStudent: async(parent: any, args: any, context: any, info: any) => {
            const {first_name, last_name, dob} = args.student;
            const response = await createStudent(first_name, last_name, dob);
            return response;
        },

        deleteStudent: async(parent: any, args: any, context: any, info: any) => {
            const {id} = args;
            const response = await deleteStudent(id);
            return response;
        },

        updateStudent: async(parent: any, args: any, context: any, info: any) => {
            const {id, first_name, last_name, dob} = args;
            const firstName: string = first_name;
            const lastName: string = last_name;
            const response = await updateStudent({firstName, lastName, dob, id});
            return response;
        }
    }
};