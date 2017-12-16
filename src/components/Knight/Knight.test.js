import React from 'react';
import {shallow} from 'enzyme';
import {Knight} from './Knight';


describe('Knight', () => {
   it('renders properly', () => {
       let component = shallow(<Knight />);
       expect(component).toMatchSnapshot();
   })
});