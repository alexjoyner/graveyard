/*
* Our containers are the glue that holds our app together.  There should be a MINIMAL
* amount of pretty components in our app.  It should essentially manage passing our data from
* our store to each of our components. It is a container for the page we are on. Containers are
* not pretty. They just hold stuff and give you stuff. You decorate the outside of containers with
* different components of stuff to make it look nice...  Paint, Stickers, magnets, lights, horns, maps,
* usb drives, nudes, etc.  I don't care what you put on your container. I'm not telling you how to live
* your life... OK? Kapeesh? GOOD.
* */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {preOrderApp} from '../../../js/actions/index';
import {DemoUI} from '../../ui/Demo';
/* Containers should not have styles
* NO!!! require('_.sass)*/

class DemoContainer extends Component {
	constructor(props){
		super(props);
		this.state = {};
	}
	render() {
		return (
			/*Our return function MUST only return one element*/
			<DemoUI props={this.props}/>
		);
	}
}
/*
* A container essentially has two functions to manage data flow:
* - mapStateToProps(): manages getting data from store into our container
* - mapDispatchToProps(): manages handling callback when a user makes an actions
* */



/* mapStateToProps() is a super easy function that people
* make over complicated.  It just takes what is in our store
* and passes it to our container through this.props "Our containers properties"*/
function mapStateToProps(state) {
	return {
		config: state.config
	};
}

/*
* Map dispatch to props just bundles up all the actions that this state will
* need and passes them through this.props
* */
function mapDispatchToProps(dispatch){
	return bindActionCreators({
		preOrderApp: preOrderApp
	}, dispatch);
}

/* When we export just a component as it's name it is just a component
* ex: export default DemoContainer;
* When we add in connect, and connect our component to the mapStateToProps function,
* this is what gives our component the steroids to become the super hero container.
* */
export const Demo = connect(mapStateToProps, mapDispatchToProps)(DemoContainer);
