import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('Should correctly render expenses summary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={122} />)
    expect(wrapper).toMatchSnapshot();
});

test('Should correctly render expenses summary with more than 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={5} expensesTotal={45343432} />)
    expect(wrapper).toMatchSnapshot();
});