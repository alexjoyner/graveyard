import React from 'react';
import {renderComponent, expect} from './test_helper';
import {combineReducers} from 'redux';

let testVal = 0;
const testComponent = (props) => {
	return (
		<div>
			<h1>TESTING</h1>
			<textarea/>
			<button onClick={() => testVal = 30}>test btn</button>
		</div>
	)
};
const test_reducer = () => {
	return {
		testData: true
	}
};
const mockReducers = combineReducers({
	test_reducer
});

describe('Test Helper', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(testComponent, {}, {}, mockReducers);
	});
	it('Should create a component', () => {
		expect(component).to.contain('TESTING');
	});
	it('Shouldn\'t have trouble simulating a click', () => {
		component.find('button').simulate('click', 0);
		expect(testVal).to.equal(30);
	});
	it('should allow for text input', () => {
		let textArea = component.find('textarea');
		textArea.simulate('change', 'test comment');
		expect(textArea).to.have.value('test comment');
	});
});
