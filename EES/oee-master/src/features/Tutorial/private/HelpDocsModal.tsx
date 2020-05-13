import React, { FC } from 'react';
import {
  Modal,
  ModalBody,
} from 'ro-component-library/Modal';
import { useWindowSize } from '../../../shared/effects/useWindowSize';

type Props = {
  isOpen: boolean,
  onClose: () => void,

}
const HelpDocsModal: FC<Props> = ({ isOpen, onClose }) => {
  const { width } = useWindowSize();
  return (
    <Modal
      size="full"
      onClose={onClose}
      isOpen={isOpen}
    >
      <ModalBody
        style={{
          marginTop: '40px',
          height: '90%',
          textAlign: 'center',
        }}
      >
        {(width > 860) ? (
          <iframe
            style={{
              maxWidth: '864px',
              width: '100%',
              height: '100%',
              marginLeft: '50%',
              transform: 'translateX(-50%)',
              border: 'none',
            }}
            title="demo-tutorial"
            src="https://docs.google.com/document/d/e/2PACX-1vRrfIXZySpwRtr-e7AfZPAMng4A96OctVJ6kwklPCW9fASHgWYMQDfUVOKzDDlAHE_8nntiUxGhH-Vk/pub?embedded=true"
          />
        ) : <h1>To view a tutorial, please visit the web site on a desktop</h1>}
      </ModalBody>
    </Modal>
  )
}

export { HelpDocsModal };