import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyAa-08ys2-9XrHlBEEsiSiJEcw5eAWKYtU'


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null
		};
		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			console.log(videos);
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			})
		});
	}
	videoSearch(term){
		YTSearch({key: API_KEY, term: term}, (videos) => {
			console.log(videos);
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			})
		});
	}
	render() {
		const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300);
		return (
			<div>
				<SearchBar onSearchTermChange={term => videoSearch(term)}></SearchBar>
				<VideoDetail video={this.state.selectedVideo}></VideoDetail>
				<VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})}
						   videos={this.state.videos}></VideoList>
			</div>
		);
	}
}


ReactDOM.render(<App />, document.querySelector('.container'));