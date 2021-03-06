import React from 'react';
require('./_.sass');
export default ({tags}) => {
	if(!tags || tags.length === 0)
		return <div></div>;
	return (
		<div id="ro-tag-cell">
			{tags.map(tag => {
				return (
					<h4 key={'tag'+tag._id}><span className="tag mt-btn-info text center">
							{tag.tag_name}
					</span></h4>
				)
			})}
		</div>
	);
}