import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sort by to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toEqual('amount');
});

test('should set sort by to date', () => {
    const testState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const state = filtersReducer(testState, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toBe('date');
});

test('Should set text filter', () => {
    const text = 'this is my text';
    const action = {
        type: 'SET_TEXT_FILTERS',
        text
    }
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe('this is my text');
});

test('Should set startDate', () => {
    const startDate = moment().startOf('month');
    const action = {
        type: 'SET_START_DATE',
        startDate
    }
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate)
});

test('Should set endDate', () => {
    const endDate = moment().endOf('month');
    const action = {
        type: 'SET_START_DATE',
        endDate
    }
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate)
});