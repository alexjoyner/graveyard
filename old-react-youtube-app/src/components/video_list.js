import React, {Component} from 'react';
import VideoListItem from './video_list_item'

const VideoList = (props) => {
	const videoItems = props.videos.map(function (video, i) {
		return (
			<VideoListItem
				onVideoSelect={props.onVideoSelect}
				key={i}
				video={video} />
		);
	})
	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	)
};

export default VideoList;