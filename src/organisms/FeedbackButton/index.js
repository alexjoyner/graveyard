import React, { Component } from 'react';
import { Button } from 'ro-component-library';

class FeedbackButton extends Component {
  goToFeedback() {
    window.location.href = 'http://feedback.voicir.com'
  }
  render() {
    return (
      <Button
        large
        primary
        style={{
          'position': 'absolute',
          'right': '3px',
          'marginTop': '3px'
        }}
        onClick={() => this.goToFeedback()}>
        Feedback
      </Button>
    )
  }
}

export { FeedbackButton };