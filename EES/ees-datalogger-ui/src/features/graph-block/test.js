import React from 'react';
import { shallow } from 'enzyme';
import { GraphBlock} from "./index";
describe('Feature/GraphBlock', () => {
    let component;
    beforeEach(() => {
        let props = {
            BlockID: 'block0',
            data: {
                type: 'test sensor'
            }
        };
        component = shallow(<GraphBlock {...props}/>);
    });
    it('renders without exploding', () => {
        expect(component).toMatchSnapshot();
    });
    describe('GraphBlock styles', () => {
       it('should have a class of .GraphBody', () => {
          expect(component.find('.GraphBody').length).toEqual(1);
       });
    });
    it('displays a graph', () => {
        expect(component.find('Graph').length).toEqual(1);
    });
    it('should contain a gauge the style gauge-block0', () => {
       expect(component.find('Graph').props().chartID).toEqual('gauge-block0');
    });
    it('should contain the name of sensor being graphed', () => {
        expect(component.contains('test sensor')).toBe(true);
    })
});
