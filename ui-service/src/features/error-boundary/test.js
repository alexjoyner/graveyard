import React from 'react';
import {mount} from 'enzyme';
import {ErrorBoundary} from '.';

describe('`ErrorBoundary`', () => {
    let component;
    beforeEach(() => {
        component = mount(<ErrorBoundary><h4>Hello</h4></ErrorBoundary>);
    });
    it('renders without exploding', () => {
        expect(component).toMatchSnapshot();
    });
    it('renders an h4 if there is no error', () => {
        expect(component.find('h4').exists()).toBe(true);
    });
    describe('When there is an error', () => {
        it('should render an h1 if there is an error', () => {
            component.setState({hasError: true});
            expect(component.find('h1').exists()).toBe(true);
        })
    })
});