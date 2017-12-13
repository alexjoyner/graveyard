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
    it('displays an input to deposit or withraw into wallet', () => {
        expect(component.find('.input-wallet').exists()).toBe(true);
    });
    describe('when user types into wallet input', () => {
       const userBalance = '25';
       beforeEach(() => {
           component.find('.input-wallet').simulate('change', {target: {value: userBalance}});
       });
        it('updates the local balance in `state` and converts it to a number', () => {
            expect(component.state().balance).toEqual(parseInt(userBalance, 10));
        })
    });
});