import React from 'react';
import {shallow} from 'enzyme';
import {Dash} from '.';


describe('Dash', () => {
    let component;
    beforeEach(() => {
        component = shallow(<Dash/>);
    });
    it('should render properly', () => {
        expect(component).toMatchSnapshot();
    });
    describe('base components', () => {
        it('contains a menu', () => {
            expect(component.find('Menu').length).toEqual(1);
        });
        it('contains a drop pool', () => {
            expect(component.find('DropTarget(DropPool)').length).toEqual(1);
        })
    });
    describe('drag drop components', () => {
        it('should have a drag drop context', () => {
            expect(component.find('DragDropContextProvider').length).toEqual(1);
        })
    })
});