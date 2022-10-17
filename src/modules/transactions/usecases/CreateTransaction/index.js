import { TransactionRepository } from "../../repositories/TransactionRepository.js";
import { CreateTransactionUseCase } from "./CreateTransactionUseCase.js";
import { CreateTransactionController } from "./CreateTransactionController.js";

const transactionRepository = TransactionRepository.getInstance();

const createTransactionUseCase = new CreateTransactionUseCase(transactionRepository);

const createTransactionController = new CreateTransactionController(createTransactionUseCase);

export { createTransactionController };