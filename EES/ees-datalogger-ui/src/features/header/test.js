import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '.';

describe('`Header`', () => {
    let component;
    beforeEach(() => {
        component = shallow(<Header />);
    });
    it('renders without exploding', () => {
        expect(component).toMatchSnapshot();
    });
    it('has a header', () => {
        expect(component.find('.header').length).toEqual(1);
    });
});