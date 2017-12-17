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
    });
    it('includes a box', () => {
        expect(component.find('DragSource(Box)').length).toEqual(1);
    })
});