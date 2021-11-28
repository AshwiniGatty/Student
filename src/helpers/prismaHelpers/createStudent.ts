import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();
export const createStudent = async(req: {
    firstName: string
    lastName: string
    classId: number
}) => {

    const result = prisma.student.create({
        data: {
            firstName: req.firstName,
            lastName: req.lastName,
            classId: Number(req.classId)
        }
    });
    return result;
};