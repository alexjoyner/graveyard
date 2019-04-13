import React, { useState } from 'react';
import { ModalStateContainer } from '../../../../shared/utils/ModalStateContainer';
import { HelpButton } from '../../private/HelpButton/HelpButton';
import { HelpDocsModal } from '../../private/HelpDocsModal/HelpDocsModal';


const TutorialButton = () => {
  const [hasViewedTutorial, setHasViewedTutorial] = useState(Boolean(localStorage.getItem('helpViewedOnce')));
  return (
    <ModalStateContainer>
      {({ open, close, isOpen }) => (
        <>
          <HelpButton
            showAttentionPopover={!hasViewedTutorial}
            onClick={() => {
              open();
              localStorage.setItem('helpViewedOnce', 'true');
              setHasViewedTutorial(true);
            }}
          />
          <HelpDocsModal
            isOpen={isOpen}
            onClose={close}
          />
        </>
      )}
    </ModalStateContainer>
  );
};

export { TutorialButton };