import React from 'react';
import {shallow} from 'enzyme';
import {Square} from './Square';

describe('Square', () => {
    let component;
    beforeEach(() => {
        component = shallow(<Square/>)
    });
    it('renders properly', () => {
        expect(component).toMatchSnapshot();
    })
});