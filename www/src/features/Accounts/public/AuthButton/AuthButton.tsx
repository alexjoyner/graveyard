import React, { useContext } from 'react';
import { connect } from 'react-redux';
import {
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter
} from 'ro-component-library/Modal';
import { ModalStateContainer } from '../../../../shared/utils/ModalStateContainer';
import { SignInButton } from '../../private/SignInButton/SignInButton';
import { SignInForm } from '../../private/SignInForm/SignInForm';
import { Credentials } from '../../types/accounts';
import { trySignIn, closeSignInModalAction, openSignInModalAction, signOut } from '../../ducks/accounts.duck';
import { StoreContext } from '../../../../shared/AppBuilder/storeContext';
import { SignOutButton } from '../../private/SignOutButton/SignOutButton';
// import { Action } from '../../../../shared/types';

const AuthButton = () => {
	const [state, dispatch] = useContext(StoreContext);
	const { isOpen } = state.Accounts.signInModal;
	const { token } = state.Accounts;
	const handleSubmit = (creds: Credentials) => {
		trySignIn(creds)(dispatch);
	}
	const handleOpenSignInModal = () => {
		dispatch(openSignInModalAction);
	}
	const handleCloseSignInModal = () => {
		dispatch(closeSignInModalAction);
	}
	const handleSignOut = () => {
		signOut()(dispatch);
	}
	return (
		<>
			{(!token) ? (
				<SignInButton onClick={handleOpenSignInModal} />
			) : (
					<SignOutButton onClick={handleSignOut} />
				)}
			<Modal onClose={handleCloseSignInModal} isOpen={isOpen}>
				<ModalHeader>Welcome!</ModalHeader>
				<ModalBody>
					<SignInForm onSubmit={handleSubmit} />
				</ModalBody>
				<ModalFooter>
					<br />
				</ModalFooter>
			</Modal>
		</>
	);
};

export { AuthButton };
