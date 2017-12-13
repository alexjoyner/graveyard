import React from 'react';
import {shallow} from 'enzyme';
import {Wallet} from './Wallet';

describe('Wallet', () => {
    const props = {balance: 20};
    const component = shallow(<Wallet {...props}/>);
    it('renders properly', () => {
        expect(component).toMatchSnapshot();
    });
    it('displays the balance from props', () => {
       expect(component.find('.balance').text()).toEqual('Wallet Balance: 20');
    });
});