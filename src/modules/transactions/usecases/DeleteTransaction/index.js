import { TransactionRepository } from "../../repositories/TransactionRepository.js";
import { DeleteTransactionUseCase } from "./DeleteTransactionUseCase.js";
import { DeleteTransactionController } from "./DeleteTransacionController.js";

const transactionRepository = TransactionRepository.getInstance();

const deleteTransactionUseCase = new DeleteTransactionUseCase(transactionRepository);

const deleteTransactionController = new DeleteTransactionController(deleteTransactionUseCase);

export { deleteTransactionController };