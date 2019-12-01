import React, { useContext } from 'react';
import {
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter
} from 'ro-component-library/Modal';
import { ModalStateContainer } from '../../../utils/ModalStateContainer';
import { SignInButton } from '../private/SignInButton';
import { SignInForm } from '../private/SignInForm';
import { Credentials } from '../types/accounts';
import {
	trySignIn,
	closeSignInModalAction,
	openSignInModalAction,
	signOut
} from '../ducks/accounts.duck';
import { StoreContext } from '../../../utils/AppBuilder/storeContext';
import { SignOutButton } from '../private/SignOutButton';

const AuthButton = () => {
	const [state, dispatch] = useContext(StoreContext);
	const { isOpen } = state.Accounts.signInModal;
	const { token } = state.Accounts;
	const handleSubmit = (creds: Credentials) => {
		trySignIn(creds)(dispatch);
	};
	const handleOpenSignInModal = () => {
		dispatch(openSignInModalAction);
	};
	const handleCloseSignInModal = () => {
		dispatch(closeSignInModalAction);
	};
	const handleSignOut = () => {
		signOut()(dispatch);
	};
	return (
		<>
			{!token ? (
				<SignInButton onClick={handleOpenSignInModal} />
			) : (
				<SignOutButton onClick={handleSignOut} />
			)}
			<Modal onClose={handleCloseSignInModal} isOpen={isOpen}>
				<ModalHeader>Enter Credentials:</ModalHeader>
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
