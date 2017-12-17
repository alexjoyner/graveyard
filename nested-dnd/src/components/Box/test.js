import React from 'react';
import {shallow} from 'enzyme';
import {Box} from '.';

describe('Box', () => {
    it('renders properly', () => {
        let props = {
            connectDragSource: jest.fn()
        };
        let component = shallow(<Box {...props}/>);
        expect(component).toMatchSnapshot();
    })
});