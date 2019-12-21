import React, { FC } from 'react';
import { Button } from 'ro-component-library/Button';
import { Go } from 'ro-component-library/Go';

const FeedbackButton: FC = () => (
  <Go
    to="http://feedback.voicir.com"
  >
    <Button
      size="compact"
    >
      <span>Feedback</span>
    </Button>
  </Go>
);

export { FeedbackButton };