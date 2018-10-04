import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hideNotification } from '../../actions/notification';

const Notification = ({ BaseComponent, name, ...props }) => (
  <BaseComponent shown={props[name].shown} onClose={() => hideNotification(name)(props.dispatch)}>
    {props[name].contents}
  </BaseComponent>
);
Notification.propTypes = {
  BaseComponent: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  ...state.NotificationReducer,
});

const BaseNotification = connect(mapStateToProps, null)(Notification);
export { BaseNotification };
