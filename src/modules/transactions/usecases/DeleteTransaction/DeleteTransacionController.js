import { DeleteTransactionUseCase } from "./DeleteTransactionUseCase.js";

export class DeleteTransactionController {
  constructor() {
    this.deleteTransactionUseCase = new DeleteTransactionUseCase();
  }

  handle(request, response) {
    const { id } = request.params;

    this.deleteTransactionUseCase.execute(id);

    return response.status(204).send();
  }
}