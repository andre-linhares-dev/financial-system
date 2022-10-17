import { TransactionRepository } from "../../repositories/TransactionRepository.js";

export class ListTransactionUseCase {
  constructor() {
    this.transactionRepository = TransactionRepository.getInstance();
  }

  async execute() {
    const transaction = await this.transactionRepository.list();

    return transaction;
  }
}