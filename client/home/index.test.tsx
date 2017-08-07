import * as React from 'react';
import {expect} from 'chai';
import '../../test-setup';
import App from "./index";
import {shallow} from "enzyme";

describe('Home Index', () => {
    let component;
    beforeEach(() => {
        component = shallow(<App/>);
    });

    it('Should contain hello world', () => {
        expect(component).to.contain('Hello Worlds');
    })
});