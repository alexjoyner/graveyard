import React from 'react';
import { shallow } from 'enzyme';
import {Board} from './Board';


describe('Board root component', () => {
    let component;
    beforeEach(() => {
        component = shallow(<Board knightPosition={[0,0]}/>)
    });
    it('renders without exploding', () => {
        expect(component).toMatchSnapshot();
    });
    it('contains a full board of squares', () => {
       expect(component.find('Square').length).toEqual(64);
    });
    it('contains a knight component', () => {
        expect(component.find('Knight').exists()).toBe(true);
    })
});
