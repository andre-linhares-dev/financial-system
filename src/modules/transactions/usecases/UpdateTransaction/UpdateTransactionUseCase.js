import { TransactionRepository } from "../../repositories/TransactionRepository.js";
import { prisma } from "../../../../database/PrismaClient.js";
import { AppException } from "../../../../application/errors/AppException.js"

export class UpdateTransactionUseCase { 
    // constructor() {
    //     this.transactionRepository = TransactionRepository.getInstance();
    // }

   async execute({id, title, type, category, amount}) {

        await prisma.$connect();

        const transaction = await prisma.transactions.findUnique({
            where: {
                id,
            },
        });

        if(!transaction) {
            throw new AppException(404, "Transaction not found")
        }

        const updatedTransaction = await prisma.transactions.update({
            where: {
                id,
            },
            data: {
            title,
            type,
            category,
            amount,
            },
        });


            await prisma.$disconnect();

    return updatedTransaction;
    };
};