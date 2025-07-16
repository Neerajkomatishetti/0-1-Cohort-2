/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const spendingMap = new Map();

  for (let tx of transactions) {
    const category = tx.category;
    const currentTotal = spendingMap.get(category) || 0;
    spendingMap.set(category, currentTotal + tx.price);
  }

  return Array.from(spendingMap.entries()).map(([category, totalSpent]) => ({
    category,
    totalSpent,
  }));
}

module.exports = calculateTotalSpentByCategory;
