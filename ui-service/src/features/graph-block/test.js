import React from 'react';
import { shallow } from 'enzyme';
import { GraphBlock} from "./index";
describe('Feature/GraphBlock', () => {
    let component;
    beforeEach(() => {
        component = shallow(<GraphBlock />);
    });
    it('renders without exploding', () => {
        expect(component).toMatchSnapshot();
    });
    describe('GraphBlock styles', () => {
       it('should have a class of .GraphBody', () => {
          expect(component.find('.GraphBody').length).toEqual(1);
       });
    });
    it('displays two graphs', () => {
        expect(component.find('Graph').length).toEqual(1);
    });
});
