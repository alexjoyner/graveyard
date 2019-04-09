import React from 'react';
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
import { trySignIn as trySignInAction } from '../../ducks/accounts.duck';
// import { Action } from '../../../../shared/types';

const TAuthButton = ({
	trySignIn
}: {
	trySignIn: (creds: Credentials) => void;
}) => {
	return (
		<ModalStateContainer>
			{({ open, close, isOpen }) => (
				<>
					<SignInButton onClick={open} />
					<Modal onClose={close} isOpen={isOpen}>
						<ModalHeader>Welcome!</ModalHeader>
						<ModalBody>
							<SignInForm onSubmit={trySignIn} />
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

const AuthButton = connect(
	null,
	{
		trySignIn: trySignInAction
	}
)(TAuthButton as any);

export { AuthButton };
