import React from 'react';
import { connect } from 'react-redux';
import { Notification } from 'ro-component-library';

let DashNotification = (props) => {
    return (
    <Notification shown={props.shown} onClose={() => props.dispatch({type: 'HIDE_NOTIFICATION'})}>
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
