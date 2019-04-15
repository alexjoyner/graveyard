import React, { useContext } from 'react';
import { Header as RoHeader, sideBarActions } from 'ro-component-library';
import { Block } from 'ro-component-library/Block';
import { GoThreeBars } from 'react-icons/go';
import { Button } from 'ro-component-library/Button';
import { useWindowSize } from '../../../shared/effects/useWindowSize';
import { FeaturesContext } from '../../../shared/AppBuilder/featuresContext';
import { StoreContext } from '../../../shared/AppBuilder/storeContext';

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
	const { Accounts, Feedback, Tutorial, Features } = useContext(FeaturesContext);
	const [state] = useContext(StoreContext);
	const { FeaturesButton } = Features;
	const { AuthButton } = Accounts;
	const { FeedbackButton } = Feedback;
	const { TutorialButton } = Tutorial;
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
					<FeaturesButton />
					<TutorialButton />
					{(state.Accounts.token) && <FeedbackButton />}
					<AuthButton />
				</Block>
			</RoHeader>
		</>
	);
};
