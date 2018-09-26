import React from 'react';
import { connect } from 'react-redux';
import { Notification } from 'ro-component-library';
import { hideNotification } from './actions';

let DashNotification = (props) => {
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

DashNotification = connect(mapStateToProps, null)(DashNotification);
export { DashNotification };
