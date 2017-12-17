import React from 'react';
import {shallow} from 'enzyme';
import {DropPool} from '.';


describe('Drop Pool', () => {
    let component;
    beforeEach(() => {
        const props = {
            connectDropTarget: el => el
        };
        component = shallow(<DropPool {...props}/>);
    });
    it('should render properly', () => {
        expect(component).toMatchSnapshot();
    });

});