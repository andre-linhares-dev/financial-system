import { Transaction } from "../models/Transaction.js";

export class TransactionRepository {
  transactions;

  static INSTANCE;

  constructor() {
    this.transactions = [];
  }

  static getInstance() {
    if (!TransactionRepository.INSTANCE) {
      TransactionRepository.INSTANCE = new TransactionRepository();
    }

    return TransactionRepository.INSTANCE;
  }

  create({ title, type, category, amount }) {
    const transaction = new Transaction();

    Object.assign(transaction, {
      title,
      type,
      category,
      amount,
      created_at: new Date(),
    });

    this.transactions.push(transaction);

    return transaction;
  }

  list() {
    return this.transactions;
  }
}