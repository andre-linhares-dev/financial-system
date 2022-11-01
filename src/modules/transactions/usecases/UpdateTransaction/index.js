import { TransactionRepository } from "../../repositories/TransactionRepository.js";
import { UpdateTransactionUseCase } from "./UpdateTransactionUseCase.js";
import { UpdateTransactionController } from "./UpdateTransactionController.js";

const transactionRepository = TransactionRepository.getInstance();

const updateTransactionUseCase = new UpdateTransactionUseCase(transactionRepository);

const updateTransactionController = new UpdateTransactionController(
  updateTransactionUseCase
);

export { updateTransactionController };