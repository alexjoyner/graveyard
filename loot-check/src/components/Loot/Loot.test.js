import React from 'react';
import {mount, shallow} from 'enzyme';
import { Loot } from './Loot';

describe('Loot', () => {
    let props = {balance: 10, bitcoin: {}}
    let component = shallow(<Loot {...props}/>);
    it('renders correctly', () => {
       expect(component).toMatchSnapshot();
    });
    describe('when mounted', () => {
        const mockFetchBitcoin = jest.fn();
        beforeEach(() => {
            props.fetchBitcoin = mockFetchBitcoin;
            component = mount(<Loot {...props}/>)
        });
        it('dispatches the fetchBitcoin() method it receives from props', () => {
            expect(mockFetchBitcoin).toHaveBeenCalled();
        });
    });
    describe('when there are valid bitcoin props', () => {
        beforeEach(() => {
            props = {balance: 10, bitcoin: {bpi: {USD: {rate: '1,000'}}}};
            component = shallow(<Loot {...props}/>);
        });
        it('displays the correct bitcoin value', () => {
            expect(component.find('h3').text()).toEqual('Bitcoin balance: 0.01');
        });
    })
});