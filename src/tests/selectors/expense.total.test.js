import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const result = selectExpensesTotal([]);
    expect(result).toBe(0);
});

test('should return expense if there is only one', () => {
    const result = selectExpensesTotal([expenses[0]]);
    expect(result).toBe(1.55);
});

test('should sum all expenses if there is more than 1', () => {
    const result = selectExpensesTotal(expenses);
    expect(result).toBe(114001.55);
});
