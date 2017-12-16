import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('App root component', () => {
    let component;
    beforeEach(() => {
        component = shallow(<App/>)
    });
    it('renders without exploding', () => {
        expect(component).toMatchSnapshot();
    });
    it('contains a knight component', () => {
        expect(component.find('Knight').exists()).toBe(true);
    })
});
