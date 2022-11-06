import { AppException } from "../../../../application/errors/AppException.js";
import { prisma } from "../../../../database/PrismaClient.js";
import { TransactionRepository } from "../../repositories/TransactionRepository.js";

export class ListTransactionUseCase {
  // constructor() {
  //   this.transactionRepository = TransactionRepository.getInstance();
  // }

  async execute() {

    await prisma.$connect();

    const transaction = await prisma.transactions.findMany();
   

    if (!transaction.length) {
      console.log("Erro 404, transaction not found");
      // throw new AppException(404, "Transactions not found");
      
    }

    console.log(transaction)
    await prisma.$disconnect();

    return transaction;
    
  }
}