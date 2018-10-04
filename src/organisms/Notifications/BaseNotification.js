import React from 'react';
import { connect } from 'react-redux';
import { Notification } from 'ro-component-library';
import { hideNotification } from '../../actions/notification.js'; 

let BaseNotification = ({BaseComponent, name, ...props}) => {
  console.log(props);
  return (
    <BaseComponent shown={props[name].shown} onClose={() => hideNotification(name)(props.dispatch)}>
      {props[name].contents}
    </BaseComponent> 
  )
};
 
const mapStateToProps = (state) => {
  return {
    ...state.NotificationReducer
  }
}

BaseNotification = connect(mapStateToProps, null)(BaseNotification);
export { BaseNotification };
