import { TransactionRepository } from "../../repositories/TransactionRepository.js";

// import { AppException } from "../../../../application/errors/AppException.js";

export class DeleteTransactionUseCase {
  constructor() {
    this.transactionRepository = TransactionRepository.getInstance();
  }

  execute(id) {
 
    // console.log(this.transactionRepository.deleteById(id));

    return this.transactionRepository.deleteById(id);
  }
}