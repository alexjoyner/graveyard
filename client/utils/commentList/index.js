import React from 'react';

const CommentList = (props) => {
	console.log(props);
	return (
		<ul>
			{props.comments.map((comment, i) => <li key={i}>{comment}</li>)}
		</ul>
	)
};


export {CommentList};
