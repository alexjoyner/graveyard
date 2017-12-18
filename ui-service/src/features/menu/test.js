import React from 'react';
import { shallow } from 'enzyme';
import { Menu } from '.';

describe('`Menu`', () => {
    let component;
    beforeEach(() => {
        component = shallow(<Menu />);
    });
    it('reanders without exploding', () => {
        expect(component).toMatchSnapshot();
    });
});