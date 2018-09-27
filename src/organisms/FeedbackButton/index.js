import React, { Component } from 'react';
import { Button } from 'ro-component-library';

const FeedbackButton = () => (
  <Button
    size="large"
    color="primary"
    style={{
      'position': 'absolute',
      'right': '3px',
      'marginTop': '3px'
    }}
    onClick={() => window.location.href = 'http://feedback.voicir.com'}>
    Feedback
  </Button>
)

export { FeedbackButton };