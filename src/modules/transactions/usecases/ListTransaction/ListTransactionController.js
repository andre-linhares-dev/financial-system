import { ListTransactionUseCase } from "./ListTransactionUseCase.js";

export class ListTransactionController {
  constructor() {
    this.listTransactionUseCase = new ListTransactionUseCase();
  }

  async handle(request, response) {
    const transactions = await this.listTransactionUseCase.execute();

    response.statusCode = 200;
    
    return response.json(transactions);
  }
}