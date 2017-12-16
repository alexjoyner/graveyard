import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('App root component', () => {
    it('should render without exploding', () => {
        let component = shallow(<App />);
        expect(component).toMatchSnapshot();
    })
});