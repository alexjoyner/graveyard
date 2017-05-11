import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-dom/test-utils';
import ReactDom from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import chaiJquery from 'chai-jquery';

// set up test environment to run like a browser in the command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = jquery(global.window);

// Fixes navigator is not defined
global.navigator = {
	userAgent: 'node.js'
};

// build 'renderComponent'helper that should render a giver react class
function renderComponent(ComponentClass, props, state, mockReducers){
	const componentInstance = TestUtils.renderIntoDocument(
		<Provider store={createStore(mockReducers, state)}>
			<ComponentClass {...props}/>
		</Provider>
	);

	return $(ReactDom.findDOMNode(componentInstance)); // produces html
}


// Build helper from simulating events
$.fn.simulate = function(eventName, value){
	if(value)
		this.val(value);
	TestUtils.Simulate[eventName](this[0]);
};


// Set up chai-jquery
chaiJquery(chai, chai.util, $);

export {renderComponent, expect};
