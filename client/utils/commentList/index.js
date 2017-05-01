import React from 'react';

const commentList = (props) => {
	return (
		<div>
			{props.comments.map((comment, i) => <p key={i}>{comment}</p>)}
		</div>
	)
};


export {commentList};
