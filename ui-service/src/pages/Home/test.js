import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './Home';

describe('`Home`', () => {
    let component;
    beforeEach(() => {
        component = shallow(<Home />);
    });
    it('reanders without exploding', () => {
        expect(component).toMatchSnapshot();
    });
});