import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Card } from 'ro-component-library/Card';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'ro-component-library/Modal';
import { Button } from 'ro-component-library/Button';
import { ModalStateContainer } from '../../utils/ModalStateContainer';
import { AccessCodeForm } from '.';


storiesOf('Molecules', module)
  .add('Access Code Modal', () => (
    <>
      <Card title="Basic Access Code Form">
        <AccessCodeForm onSubmit={action('Submit')} />
      </Card>
      <Card title="Modal Access Code Form">
        <ModalStateContainer>
          {({ open, close, isOpen }) => (
            <>
              <Button onClick={open}>Sign In!</Button>
              <Modal onClose={close} isOpen={isOpen}>
                <ModalHeader>Welcome!</ModalHeader>
                <ModalBody>
                  <AccessCodeForm onSubmit={action('Submit')} />
                </ModalBody>
                <ModalFooter>
                  <br />
                </ModalFooter>
              </Modal>
            </>
          )}
        </ModalStateContainer>
      </Card>
    </>
  ));
