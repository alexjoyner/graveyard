import React from 'react';
import {shallow} from 'enzyme';
import {Layout} from '.';
import {GraphBlock} from "../graph-block/index";

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
        expect(component.find(GraphBlock).length).toEqual(1);
    });
});