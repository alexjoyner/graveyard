import React from 'react';
import {shallow} from 'enzyme';
import {Layout} from '.';
import {DashBody} from "../dash-body/index";

describe('layout feature', () => {
    let component;
    beforeEach(() => {
        component = shallow(<Layout/>);
    });
    it('renders without exploding', () => {
        expect(component.length).toEqual(1);
    });
    it('has a header', () => {
        expect(component.find('.header').length).toEqual(1);
    });
    it('has a dash body', () => {
        expect(component.find(DashBody).length).toEqual(1);
    });
});