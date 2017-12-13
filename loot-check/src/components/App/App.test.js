import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
   const component = shallow(<App/>);
   it('renders properly', () => {
       expect(component).toMatchSnapshot();
   });
   it('contains a connected wallet component', () => {
       expect(component.find('Connect(Wallet)').exists()).toBe(true);
   })
});