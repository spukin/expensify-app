import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should set remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({     //toBe would not work because {} === {} -> false, [] === [] -> false 
        type: 'REMOVE_EXPENSE',  //Need to use toEqual for obj comparison and toBe for strings, bool, number
        id: '123abc'
    });
});


test('Should not be equal', () => {
    const action = editExpense('234abc', { note: 'new value' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '234abc',
        updates: {
            note: 'new value'
        }
    });
});

test('Should set up addExpense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: '5000',
        createdAt: 1000,
        note: 'This was last month rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('Should set up addExpense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0
        }
    });
});

