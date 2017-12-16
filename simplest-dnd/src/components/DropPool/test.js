import React from 'react';
import {shallow} from 'enzyme';
import {DropPool} from '.';


describe('Drop Pool', () => {
    let component;
    beforeEach(() => {
        component = shallow(<DropPool/>);
    });
    it('should render properly', () => {
        expect(component).toMatchSnapshot();
    })
});