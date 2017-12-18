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
    it('has a header', () => {
        expect(component.find('.header').length).toEqual(1);
    });
    it('has a dash body', () => {
        expect(component.find('GraphBlock').length).toEqual(1);
    });
});