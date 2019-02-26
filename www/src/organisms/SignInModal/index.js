import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'ro-component-library/Modal';
import { toaster } from 'ro-component-library/Toast';
import { ModalStateContainer } from '../../utils/ModalStateContainer';
import { SignInForm } from '../../molecules/SignInForm';
import { SignInButton } from '../../molecules/SignInButton';
import { env } from '../../.env';

const TSignInModal = ({ dispatch }) => {
  const onSubmit = async (formData) => {
    try {
      const response = await fetch(`${env.serverAddr}/me/signIn`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.error) {
        return toaster().negative(data.error.message, {
          autoHideDuration: 5000,
        });
      }
      dispatch({ type: 'SET_USER', data });
      return null;
    } catch (e) {
      /* istanbul ignore next */
      throw new Error(e);
    }
  };

  return (
    <ModalStateContainer>
      {({ open, close, isOpen }) => (
        <>
          <SignInButton onClick={open} />
          <Modal onClose={close} isOpen={isOpen}>
            <ModalHeader>Welcome!</ModalHeader>
            <ModalBody>
              <SignInForm onSubmit={onSubmit} />
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
TSignInModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const SignInModal = connect()(TSignInModal);

export { SignInModal };
