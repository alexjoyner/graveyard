import React from 'react';
import {shallow} from 'enzyme';
import {DropArea} from '.';


describe('Drop Pool', () => {
    let component;
    beforeEach(() => {
        const props = {
            connectDropTarget: el => el,
            items: []
        };
        component = shallow(<DropArea {...props}/>);
    });
    it('should render properly', () => {
        expect(component).toMatchSnapshot();
    });

});