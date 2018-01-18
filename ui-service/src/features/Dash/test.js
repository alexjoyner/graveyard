import React from 'react';
import { shallow } from 'enzyme';
import { Dash } from '.';

describe('`Dash`', () => {
    let component;
    beforeEach(() => {
        const identity = el => el;
        const props = {
            connectDropTarget: identity
        };
        component = shallow(<Dash {...props}>Testing dash component</Dash>);
    });
    it('renders without exploding', () => {
        expect(component).toMatchSnapshot();
    });
    it('renders children content', () => {
       expect(component.contains('Testing dash component')).toBe(true);
    });
    it('has a class of dash-wrapper', () => {
        expect(component.find('.dash-wrapper').length).toEqual(1);
    });
});