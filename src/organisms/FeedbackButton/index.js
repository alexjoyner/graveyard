import React from 'react';
import { Button } from 'ro-component-library';

const FeedbackButton = () => (
  <Button
    size="large"
    color="primary"
    style={{
      position: 'absolute',
      right: '3px',
      marginTop: '8px',
    }}
    onClick={() => {
      window.location.assign('http://feedback.voicir.com');
    }}
  >
    Feedback
  </Button>
);

export { FeedbackButton };
