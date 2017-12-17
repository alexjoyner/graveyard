import React from 'react';
import { shallow } from 'enzyme';
import { Widget } from '.';

describe('`Widget`', () => {
    let component;
    beforeEach(() => {
        component = shallow(<Widget />);
    });
    it('reanders without exploding', () => {
        expect(component).toMatchSnapshot();
    });
});