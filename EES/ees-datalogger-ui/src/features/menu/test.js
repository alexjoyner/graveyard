import React from 'react';
import { shallow } from 'enzyme';
import { Menu } from '.';

describe('`Menu`', () => {
    let component;
    beforeEach(() => {
        component = shallow(<Menu />);
    });
    it('reanders without exploding', () => {
        expect(component).toMatchSnapshot();
    });
    it('includes a div with id Menu', () => {
        expect(component.find('#Menu').length).toEqual(1);
    });
    it('Contains list items connected to drag source', () => {
       expect(component.find('DragSource(MenuItem)').length).toEqual(4);
    })
});