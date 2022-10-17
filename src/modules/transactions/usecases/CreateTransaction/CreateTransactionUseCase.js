import { TransactionRepository } from "../../repositories/TransactionRepository.js";


export class CreateTransactionUseCase {
  constructor() {
    this.transactionRepository = TransactionRepository.getInstance();
  }

  execute({ title, type, category, amount }) {


    const transaction = this.transactionRepository.create({
        title,
        type,
        category,
        amount
    });

    return transaction;
  }
}