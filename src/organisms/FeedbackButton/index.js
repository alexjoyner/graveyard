import React, {Component} from 'react';
import {Button} from 'ro-component-library';
const Canny = window.Canny;
class FeedbackButton extends Component{
  goToFeedback(){
    Canny('identify', {
      appID: '5b9fe8c8c2bd95615ee7dbfa',
      user: {
        // Replace these values with the current user's data
        email: 'rosco9awj@gmail.com',
        name: 'Rosco P. Coltrane',
        id: 'x3215awesomesauce'
      },
    });
    window.location.href='http://feedback.voicir.com'
  }
  render(){
    return (
      <Button 
      large 
      primary 
      style={{
        'position': 'absolute',
        'right': '3px',
        'margin-top': '3px'
      }}
      onClick={() => this.goToFeedback()}>Feedback</Button>
    )
  }
}

export {FeedbackButton};