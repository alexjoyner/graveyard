import React from 'react';
import {shallow} from 'enzyme';
import {Home} from './Home';

describe('layout feature', () => {
    let component;
    let mockHandleDashDrop = jest.fn();
    beforeEach(() => {
        let props = {
            handleDashDrop: mockHandleDashDrop,
            graphs: []
        };
        component = shallow(<Home {...props}/>);
    });
    it('renders without exploding', () => {
        expect(component).toMatchSnapshot();
    });
    it('has a Header', () => {
        expect(component.find('Header').length).toEqual(1);
    });
    it('has a Menu', () => {
        expect(component.find('Menu').length).toEqual(1);
    });
    it('contains a Dash', () => {
        expect(component.find('DropTarget(Dash)').length).toEqual(1);
    });
    it('has a Graph Block', () => {
        expect(component.find('GraphBlock').length).toEqual(0);
    });
    it('should be able to call drop event', () => {
        let DashComponent = component.find('DropTarget(Dash)');
        DashComponent.props().onDrop({type: 'test'});
        expect(component.state().graphs).toEqual([{type: 'test'}]);
    });
    it('should add a Graph Block a new sensor is dropped onto the dash', () => {
        let DashComponent = component.find('DropTarget(Dash)');
        DashComponent.props().onDrop({type: 'test'});
        component.update();
        expect(component.find('GraphBlock').length).toEqual(1);
    });
});