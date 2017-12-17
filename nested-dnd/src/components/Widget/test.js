import React from 'react';
import { shallow } from 'enzyme';
import { Widget } from '.';

describe('`Widget`', () => {
    let component;
    beforeEach(() => {
        const props = {
            connectDropTarget: jest.fn()
        };
        component = shallow(<Widget {...props}/>);
    });
    it('reanders without exploding', () => {
        expect(component).toMatchSnapshot();
    });
});