import React, { FC } from 'react';
import { styled } from 'ro-component-library/utils/styled';

export type MinimalBackgroundProps = {
	children: FC;
};

const Background = styled('div', () => ({
	width: '100%',
	height: '100vh',
	background: 'url("https://nosidebar.com/images/benefits-of-minimalism.jpg")',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'contain'
}));

const MinimalBackground: FC<MinimalBackgroundProps> = ({ children }) => {
	return <Background>{children}</Background>;
};

export { MinimalBackground };
