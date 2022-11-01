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

  create({
    title,
    type,
    category,
    amount
  }) {
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


   updateById({ id, title, type, category, amount }) {
    const index = this.transactions.findIndex((transaction) => transaction.id === id);

    Object.assign(this.transactions[index], {
      title,
      type, 
      category, 
      amount
    });

    return this.transactions[index];
  }

  deleteById(id) {
    const index = this.transactions.findIndex((transaction) => transaction.id === id);

    this.transactions.splice(index, 1);
    
    return
  }

}