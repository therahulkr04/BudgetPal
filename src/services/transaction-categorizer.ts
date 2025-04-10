/**
 * Represents a transaction with a description and amount.
 */
export interface Transaction {
  /**
   * The description of the transaction.
   */
  description: string;
  /**
   * The amount of the transaction.
   */
  amount: number;
}

/**
 * Represents a category for a transaction.
 */
export interface TransactionCategory {
  /**
   * The category of the transaction.
   */
  category: string;
}

/**
 * Asynchronously categorizes a given transaction.
 *
 * @param transaction The transaction to categorize.
 * @returns A promise that resolves to a TransactionCategory object containing the category.
 */
export async function categorizeTransaction(transaction: Transaction): Promise<TransactionCategory> {
  // TODO: Implement this by calling an API.

  return {
    category: 'Uncategorized',
  };
}
