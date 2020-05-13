import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchPosts} from '../../../js/actions/index';
require('./_.sass');

class MainSearchBar extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return (
			<input type="text"
				   placeholder={props.placeholder || 'test'} />
		);
	}
}


export default connect(null, null)(MainSearchBar)