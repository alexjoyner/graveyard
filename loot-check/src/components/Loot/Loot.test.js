import React from 'react';
import {shallow} from 'enzyme';
import { Loot } from './Loot';

describe('Loot', () => {
    const component = shallow(<Loot/>);
    it('renders correctly', () => {
       expect(component).toMatchSnapshot();
    });
});