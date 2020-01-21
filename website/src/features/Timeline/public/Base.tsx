import React, { FC } from 'react';

export type BaseProps = {
	children: FC;
};

const Base: FC<BaseProps> = () => {
	return <h1>TimeLine Base</h1>;
};

export { Base };
