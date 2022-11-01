import { UpdateTransactionUseCase } from "./UpdateTransactionUseCase.js";

export class UpdateTransactionController {
  constructor() {
    this.updateTransactionUseCase = new UpdateTransactionUseCase();
  }

  handle(request, response) {
    const { id } = request.params;
    const { title, type, category, amount } = request.body;

    this.updateTransactionUseCase.execute({
      id,
      title,
      type,
      category,
      amount
    });

    return response.status(204).send();
  }
}