import React from 'react';
import { shallow } from 'enzyme';
import { HeaderPage } from '../../components/HeaderPage';


test('should render Header correctly', () => {
    const wrapper = shallow(<HeaderPage startLogout={() => { }} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should call startLogout', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<HeaderPage startLogout={startLogout} />);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});
