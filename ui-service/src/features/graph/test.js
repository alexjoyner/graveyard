import React from 'react';
import {shallow} from 'enzyme';
import {Graph} from ".";


describe('Features/Graph', () => {
    let component;
    beforeEach(() => {
        component = shallow(<Graph />);
    });
    it('renders without exploding', () => {
        expect(component.length).toEqual(1);
    });
    describe('analog gauge graph', () => {
        it('should render if called with analog gauge as prop type');
    });
    describe('line graph', () => {
        it('should render if called with line graph as prop type');
    });
});