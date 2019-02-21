import React from 'react';
import { GoThreeBars } from 'react-icons/go';
import { Header as RoHeader, sideBarActions } from 'ro-component-library';
import { Button } from 'ro-component-library/Button';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'ro-component-library/Modal';
import { ModalStateContainer } from '../../utils/ModalStateContainer';
import { AccessCodeForm } from '../../molecules/AccessCodeForm';
import { useWindowSize } from '../../effects/useWindowSize';

const ToggleBtn = props => (
  <Button color="primary" size="small" {...props}>
    <GoThreeBars />
  </Button>
);

const logoStyles = {
  marginLeft: '10px',
  fontSize: '1.5em',
};

const Header = () => {
  const { width } = useWindowSize();
  return (
    <>
      <RoHeader color="dark">
        {(width > 800) ? null : <ToggleBtn model="classic" onClick={() => sideBarActions().toggle()} />}
        <h1 style={logoStyles}>OEE Master</h1>
        <ModalStateContainer>
          {({ open, close, isOpen }) => (
            <>
              <Button
                model="classic"
                color="primary"
                size="small"
                onClick={open}
                style={{
                  position: 'absolute',
                  right: '10px',
                }}
              >
                <span>Sign In!</span>
              </Button>
              <Modal onClose={close} isOpen={isOpen}>
                <ModalHeader>Welcome!</ModalHeader>
                <ModalBody>
                  <AccessCodeForm onSubmit={data => console.log('Submit', data)} />
                </ModalBody>
                <ModalFooter>
                  <br />
                </ModalFooter>
              </Modal>
            </>
          )}
        </ModalStateContainer>
      </RoHeader>
    </>
  );
};

export { Header };
