import React from 'react';
import {shallow} from 'enzyme';
import {Home} from './Home';

describe('layout feature', () => {
    let component;
    beforeEach(() => {
        component = shallow(<Home/>);
    });
    it('renders without exploding', () => {
        expect(component).toMatchSnapshot();
    });
    it('is a `DragDropContextProvider` at it\'s root', () => {
       expect(component.find('DragDropContextProvider').length).toEqual(1);
    });
    it('has a Header', () => {
        expect(component.find('Header').length).toEqual(1);
    });
    it('has a Menu', () => {
        expect(component.find('Menu').length).toEqual(1);
    });
    it('has a dash body', () => {
        expect(component.find('GraphBlock').length).toEqual(1);
    });
});