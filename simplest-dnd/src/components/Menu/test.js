import React from 'react';
import {shallow} from 'enzyme';
import {Menu} from '.';


describe('Menu', () => {
    let component;
    beforeEach(() => {
        component = shallow(<Menu/>);
    });
    it('should render properly', () => {
        expect(component).toMatchSnapshot();
    })
});