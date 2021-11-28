import { getStudents } from "../helpers/prismaHelpers/getStudents";
import { createStudent } from "../helpers/prismaHelpers/createStudent";
import { deleteStudent } from "../helpers/prismaHelpers/deleteStudent";
import { updateStudent } from "../helpers/prismaHelpers/updateStudent";


export const resolvers = {
    Query: {
        // getStudents: async ()=> {
        //     const response = await getSudents();
        //     return response;
        // }

        getStudents: async ()=> {
            const response = await getStudents();
            return response;
        }

    },
    Mutation: {
        createStudent: async(parent: any, args: any, context: any, info: any) => {
            const response = await createStudent(args.student);
            return response;
        },

        deleteStudent: async(parent: any, args: any, context: any, info: any) => {
            const {id} = args;
            const response = await deleteStudent(id);
            return response;
        },

        updateStudent: async(parent: any, args: any, context: any, info: any) => {
            const {id, firstName, lastName, classId} = args;
            const response = await updateStudent({firstName, lastName, classId}, id);
            return response;
        }
    }
};