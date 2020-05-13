import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('App', () => {
    const component = shallow(<App/>);
    it('renders properly', () => {
        expect(component).toMatchSnapshot();
    });
    it('contains a connected wallet component', () => {
        expect(component.find('Connect(Wallet)').exists()).toBe(true);
    });
    it('contains a connected loot component', () => {
        expect(component.find('Connect(Loot)').exists()).toBe(true);
    });
});