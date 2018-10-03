import React from 'react';
import { connect } from 'react-redux';
import { Notification } from 'ro-component-library';
import { hideNotification } from './actions';

let Notification = (props) => {
  return (
    <Notification shown={props.shown} onClose={() => hideNotification()(props.dispatch)}>
      {props.contents}
    </Notification>
  )
};

const mapStateToProps = (state) => {
  return {
    ...state.NotificationReducer
  }
}

Notification = connect(mapStateToProps, null)(Notification);
export { Notification };
