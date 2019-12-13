import React, { useContext, useState } from 'react';
import { Header as RoHeader, sideBarActions } from 'ro-component-library';
import { Block } from 'ro-component-library/Block';
import { GoThreeBars } from 'react-icons/go';
import { useWindowSize } from '../../../shared/effects/useWindowSize';
import { FeaturesContext } from '../../../utils/AppBuilder/featuresContext';
import { StoreContext } from '../../../utils/AppBuilder/storeContext';
import { Typography } from '@material-ui/core';

const logoStyles = {
	marginLeft: '10px',
	fontSize: '1.5em'
};

export const Header = () => {
	const { width } = useWindowSize();
	const { Demo } = useContext(FeaturesContext);
	const [state] = useContext(StoreContext);
	const { DemoHeader } = Demo;
	const { username } = state.Accounts.user;
	const { contents } = state.Body;

	return (
		<>
			<RoHeader color='dark'>
				<Block
					style={{
						position: 'absolute',
						left: '10px'
					}}
				>
					<Typography variant="h5" component="h1">
						{contents}
					</Typography>
				</Block>
			</RoHeader>
		</>
	);
};
