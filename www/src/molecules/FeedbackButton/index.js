import React from 'react';
import { Button } from 'ro-component-library/Button';
import { Go } from 'ro-component-library/Go';

const FeedbackButton = () => (
  <Go
    to="http://feedback.voicir.com"
    style={{
      position: 'absolute',
      right: '3px',
    }}
  >
    <Button color="primary" size="small">Feedback</Button>
  </Go>
);

export { FeedbackButton };
