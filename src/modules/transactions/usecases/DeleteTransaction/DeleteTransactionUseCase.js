import { prisma } from "../../../../database/PrismaClient.js";
import { TransactionRepository } from "../../repositories/TransactionRepository.js";
import { AppException } from "../../../../application/errors/AppException.js";

export class DeleteTransactionUseCase {
  // constructor() {
  //   this.transactionRepository = TransactionRepository.getInstance();
  // }

  async execute(id) {
    await prisma.$connect();
 
    const transaction = await prisma.transactions.findUnique({
      where: {
        id,
      },
    });

    if (!transaction ) {
      throw new AppException(404, "Transaction not found!" );
    };

    const deleteTransaction = await prisma.transactions.delete({
      where: {
        id,
      },
    })



    await prisma.$disconnect();

    return deleteTransaction;
  }
}