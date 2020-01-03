import expensesReducers from '../../reducers/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('should return default StaticRange', () => {
    const state = expensesReducers(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by ID', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 5
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add expense', () => {
    const expense = {
        id: 4,
        description: 'New PC',
        note: '',
        amount: 500,
        createdAt: moment(0).add(5, 'days').valueOf()
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const amount = 666;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            amount
        }
    };
    const state = expensesReducers(expenses, action);
    expect(state[0].amount).toBe(amount)
});

test('should not edit an expense if incorrect id', () => {
    const amount = 666;
    const action = {
        type: 'EDIT_EXPENSE',
        id: 15,
        updates: {
            amount
        }
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual(expenses)
});