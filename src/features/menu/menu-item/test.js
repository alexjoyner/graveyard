import React from 'react';
import { shallow } from 'enzyme';
import { MenuItem } from '.';

describe('`MenuItem`', () => {
    let component;
    beforeEach(() => {
        const identity = el => el;
        const props = {
            text: 'Hello World',
            connectDragSource: identity
        };
        component = shallow(<MenuItem {...props}/>);
    });
    it('renders without exploding', () => {
        expect(component).toMatchSnapshot();
    });
    it('contains correct item text', () => {
        expect(component.contains('Hello World')).toBe(true);
    });
});