import React, {Component} from 'react';

// const SearchBar = () => {
// 	return <input type="text"/>
// };
class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {term: ''};
	}

	render() {
		return (
			<div>
				<input value={this.state.term}
					   type="text"
					   onChange={event => this.onInputChange(event.target.value)}/>
				Value of input: {this.state.term}
			</div>
		)
	}
	onInputChange(term){
		this.setState({term})
		this.props.onSearchTermChange(term);
	}
}
export default SearchBar;