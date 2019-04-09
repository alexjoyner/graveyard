import React, { FC } from 'react';

export const NullComp: FC<any> = () => null;
export const NullRenderProps: FC<any> = ({ children }) => (
	<div>{children()}</div>
);
