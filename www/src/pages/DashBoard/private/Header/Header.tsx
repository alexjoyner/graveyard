// import React from 'react';
// import { connect } from 'react-redux';
// import { GoThreeBars } from 'react-icons/go';
// import { Block } from 'ro-component-library/Block';
// import { Header as RoHeader, sideBarActions } from 'ro-component-library';
// import { Button } from 'ro-component-library/Button';
// import { useWindowSize } from '../../effects/useWindowSize';
// import { SignInModal } from '../SignInModal';
// import { TutorialModal } from '../TutorialModal';
// import { SignOutButton } from '../../molecules/SignOutButton';
// import { FeedbackButton } from '../../features/Feedback';

// const logoStyles = {
//   marginLeft: '10px',
//   fontSize: '1.5em',
// };

// const THeader = ({ user, token, dispatch }) => {
//   const { width } = useWindowSize();
//   const handleSignOut = () => {
//     dispatch({ type: 'SIGN_OUT' });
//   };
//   const SignedInBar = () => (
//     <Block
//       style={{
//         position: 'absolute',
//         right: '10px',
//       }}
//     >
//       {(width > 860) && (
//         <>
//           <FeedbackButton />
//           <TutorialModal />
//         </>
//       )}
//       <SignOutButton onClick={handleSignOut} />
//     </Block>
//   );
//   const SignedOutBar = () => (
//     <Block
//       style={{
//         position: 'absolute',
//         right: '10px',
//       }}
//     >
//       {(width > 860) && (
//         <>
//           <TutorialModal />
//         </>
//       )}
//       <SignInModal />
//     </Block>
//   );
//   return (
//     <>
//       <RoHeader color="dark">
//         {(width > 800) ? null : <ToggleBtn model="classic" onClick={() => sideBarActions().toggle()} />}
//         <h1 style={logoStyles}>{user.username}</h1>
//         {(token) ? <SignedInBar /> : <SignedOutBar />}
//       </RoHeader>
//     </>
//   );
// };

// const mapStateToProps = state => ({
//   ...state.UserReducer,
// });

// const Header = connect(mapStateToProps)(THeader);

// export { Header };
import React, { useContext } from 'react';
import { Header as RoHeader, sideBarActions } from 'ro-component-library';
import { DashFeaturesContext } from '../../DashBoard';
import { Block } from 'ro-component-library/Block';
import { GoThreeBars } from 'react-icons/go';
import { Button } from 'ro-component-library/Button';
import { useWindowSize } from '../../../../shared/effects/useWindowSize';

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
	const { Accounts } = useContext(DashFeaturesContext);
	const { AuthButton, AccountInfo } = Accounts;
	const { UserName } = AccountInfo;
	return (
		<>
			<RoHeader color='dark'>
				{width > 800 ? null : <ToggleBtn />}
				<UserName />
				<Block
					style={{
						position: 'absolute',
						right: '10px'
					}}
				>
					<AuthButton />
				</Block>
			</RoHeader>
		</>
	);
};
