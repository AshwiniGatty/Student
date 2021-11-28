import { PrismaClient } from ".prisma/client";
const prisma = new PrismaClient();
export const deleteStudent = async(id: number) => {
    const result = prisma.student.delete({
        where:{
            id: Number(id)
        }
    })
    return result;
};