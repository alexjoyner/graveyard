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
import { trySignIn } from '../../ducks/accounts.duck';
import { StoreContext } from '../../../../shared/AppBuilder/storeContext';
// import { Action } from '../../../../shared/types';

const AuthButton = () => {
	const [state, dispatch] = useContext(StoreContext);
	const handleSubmit = (creds: Credentials) => {
		trySignIn(creds)(dispatch);
	}

	return (
		<ModalStateContainer>
			{({ open, close, isOpen }) => (
				<>
					<SignInButton onClick={open} />
					<Modal onClose={close} isOpen={isOpen}>
						<ModalHeader>Welcome!</ModalHeader>
						<ModalBody>
							<SignInForm onSubmit={handleSubmit} />
						</ModalBody>
						<ModalFooter>
							<br />
						</ModalFooter>
					</Modal>
				</>
			)}
		</ModalStateContainer>
	);
};

export { AuthButton };
