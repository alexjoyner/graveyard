import React, { FC } from 'react';

export type PostProps = {
	children: FC;
};

const Post: FC<PostProps> = () => {
	return <h1>TimeLine Post</h1>;
};

export { Post };
