import { TransactionRepository } from "../../repositories/TransactionRepository.js";
import { AppException } from "../../../../application/errors/AppExceptions.js"

export class UpdateTransactionUseCase { 
    constructor() {
        this.transactionRepository = TransactionRepository.getInstance();
    }

    execute({id, title, type, category, amount}) {
        const transaction = this.transactionRepository.findById(id);

        if(!transaction) {
            throw new AppException(404, "Transaction not found");
        }

        const updatedTransaction = this.transactionRepository.updateById({
            id,
            title,
            type,
            category,
            amount,
        })
        

    return updatedTransaction;
    }
}