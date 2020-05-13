import React, { FC } from 'react';
import { styled } from 'ro-component-library/utils/styled';

export type MinimalBackgroundProps = {
	children: FC;
};

const Background = styled('div', () => ({
	minHeight: '100%',
	minWidth: '1024px',
	width: '100%',
	height: 'auto',
	position: 'fixed',
	top: '0',
	left: '0',
	background:
		'url("https://nosidebar.com/images/benefits-of-minimalism.jpg") no-repeat center center fixed',
	backgroundSize: 'cover'
}));

const MinimalBackground: FC<MinimalBackgroundProps> = ({ children }) => {
	return <Background>{children}</Background>;
};

export { MinimalBackground };
