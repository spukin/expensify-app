import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('Should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'mouse',
        note: 'new one',
        amount: 30,
        createdAt: 1000
    }

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});


test('Should add expense to database and store with default values', (done) => {
    const store = createMockStore({});
    const expenseDefaults = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
               ...expenseDefaults
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
    });
});


// 'Should set up addExpense action object with default values', () => {
// //     const action = addExpense();
// //     expect(action).toEqual({
// //         type: 'ADD_EXPENSE',
// //         expense: {
// //             id: expect.any(String),
// //             description: '', 
// //             note: '', 
// //             amount: 0, 
// //             createdAt: 0
// //         }
// //     });
// // });

