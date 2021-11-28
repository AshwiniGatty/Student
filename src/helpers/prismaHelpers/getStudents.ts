import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

export const getStudents = async() => {
     const students = prisma.student.findMany({
         include: {Class: true}
     });

     const classes = await prisma.class.findMany({
         include: {students: true}
     });
     return classes;
};