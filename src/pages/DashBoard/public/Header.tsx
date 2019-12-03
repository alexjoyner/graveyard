import React, { useContext } from 'react';
import { Header as RoHeader, sideBarActions } from 'ro-component-library';
import { Block } from 'ro-component-library/Block';
import { GoThreeBars } from 'react-icons/go';
import { Button } from 'ro-component-library/Button';
import { useWindowSize } from '../../../shared/effects/useWindowSize';
import { FeaturesContext } from '../../../utils/AppBuilder/featuresContext';
import { StoreContext } from '../../../utils/AppBuilder/storeContext';

const ToggleBtn = () => (
	<Button
		color='primary'
		size='small'
		model='classic'
		onClick={() => sideBarActions().toggle()}
	>
		<GoThreeBars />
	</Button>
);

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
	return (
		<>
			<RoHeader color='dark'>
				{width > 800 ? null : <ToggleBtn />}
				<h1 style={logoStyles}>{username}</h1>
				<Block
					style={{
						position: 'absolute',
						right: '10px'
					}}
				>
					<DemoHeader />
				</Block>
			</RoHeader>
		</>
	);
};
