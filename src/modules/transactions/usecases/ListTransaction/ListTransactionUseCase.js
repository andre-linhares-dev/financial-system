import { AppException } from "../../../../application/errors/AppExceptions.js";
import { TransactionRepository } from "../../repositories/TransactionRepository.js";

export class ListTransactionUseCase {
  constructor() {
    this.transactionRepository = TransactionRepository.getInstance();
  }

  async execute() {

    const transaction = await this.transactionRepository.list();

    if (!transaction.length === 0 ) {
      throw new AppException(404, "Transactions not found")
    }

    return transaction;
  }
}