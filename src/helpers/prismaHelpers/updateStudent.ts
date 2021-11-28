import { PrismaClient } from ".prisma/client";
const prisma = new PrismaClient();

export const updateStudent = async(req: {
    firstName: string
    lastName: string
    classId: number
}, id: number) => {
 const result = prisma.student.update({
     data: req,
     where:{
         id: Number(id)
     }
 });
 return result;
}