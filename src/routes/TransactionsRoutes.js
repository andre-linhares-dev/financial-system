import Router from "express";

const transactionsRoutes = Router();

import { createTransactionController } from "../modules/transactions/usecases/CreateTransaction/index.js";
import { listTransactionController } from "../modules/transactions/usecases/ListTransaction/index.js";

// Rota de criação de transação
transactionsRoutes.post("/transactions", (request, response) => {
  return createTransactionController.handle(request, response);
});

// Rota de listagem de transação
transactionsRoutes.get("/transactions", (request, response) => {
  return listTransactionController.handle(request, response);
});

export default transactionsRoutes;

