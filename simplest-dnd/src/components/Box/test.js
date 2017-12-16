import React from 'react';
import {shallow} from 'enzyme';
import {Box} from '.';

describe('Box', () => {
    it('renders properly', () => {
        let component = shallow(<Box/>);
        expect(component).toMatchSnapshot();
    })
})