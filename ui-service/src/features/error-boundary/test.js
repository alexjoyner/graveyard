import React from 'react';
import { shallow } from 'enzyme';
import { ErrorBoundary } from '.';

describe('`ErrorBoundary`', () => {
    let component;
    beforeEach(() => {
        component = shallow(<ErrorBoundary />);
    });
    it('reanders without exploding', () => {
        expect(component).toMatchSnapshot();
    });
});