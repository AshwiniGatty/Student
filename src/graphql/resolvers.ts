import { getSudents } from "../helpers/getStudent";
import { createStudent } from "../helpers/createStudent";
import { deleteStudent } from "../helpers/deleteStudent";
import { updateStudent } from "../helpers/updateStudent";

export const resolvers = {
    Query: {
        hello: () => {
            return "hello Ashwini"
        },
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
            await deleteStudent(id);
            return `OK, student ${id} deleted `;
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