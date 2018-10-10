import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hideNotification } from '../../../../actions/notification';

export const Notification = ({ BaseComponent, name, ...props }) => (
  <BaseComponent shown={props[name].shown} onClose={() => props.hideNotification(name)}>
    {props[name].contents}
  </BaseComponent>
);
Notification.propTypes = {
  BaseComponent: PropTypes.func.isRequired,
  hideNotification: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  ...state.NotificationReducer,
});

const BaseNotification = connect(mapStateToProps, { hideNotification })(Notification);
export { BaseNotification };
