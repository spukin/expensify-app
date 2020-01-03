import { setTextFilters, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';
import moment from 'moment';

test('Should set textFilter to text', () => {
    const filter = setTextFilters('coffee');
    expect(filter).toEqual({
        type: "SET_TEXT_FILTERS",
        text: 'coffee'
    });
});

test('Should set textFilter to empty string', () => {
    const filter = setTextFilters();
    expect(filter).toEqual({
        type: "SET_TEXT_FILTERS",
        text: undefined
    });
});

test('Should sort by date', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
    });
});

test('Should sort by amount', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
    });
});

test('Should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('Should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});
