import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  ListItem, ListHeader, CenteredContent, Button, colors,
} from 'ro-component-library';
import { GoTrashcan } from 'react-icons/go';
import { removePoint as removePointAction } from './actions';
import { Points } from '../../propTypes';
import { buildGraph as buildGraphAction } from '../../organisms/ChartModal/actions';
import { showNotification as showNotificationAction } from '../../actions/notification';
import { TEST_NOTIFICATION } from '../../organisms/Notifications';


export class TChartsSelected extends Component {
  handleStartBraphBuild() {
    const { multiSelectedPoints, showNotification, buildGraph } = this.props;
    const points = Object.keys(multiSelectedPoints);
    if (points.length === 0) {
      return showNotification(TEST_NOTIFICATION, 'Please add at least one point');
    }
    buildGraph(multiSelectedPoints);
    return null;
  }

  render() {
    const { multiSelectedPoints, removePoint } = this.props;
    return (
      <div>
        <br />
        <ListHeader>Charts Selected:</ListHeader>
        <CenteredContent>
          {Object.keys(multiSelectedPoints).map(pointID => (
            <ListItem key={pointID}>
              {multiSelectedPoints[pointID].name}
              <Button
                size="small"
                color="dark"
                onClick={() => removePoint(pointID)}
              >
                <GoTrashcan size={20} color={colors.dangerLight} />
              </Button>
            </ListItem>
          ))}
          <ListItem
            color="primary"
            onClick={() => this.handleStartBraphBuild()}
          >
            <span>Build Graph</span>
          </ListItem>
        </CenteredContent>
      </div>
    );
  }
}
TChartsSelected.propTypes = {
  removePoint: PropTypes.func.isRequired,
  buildGraph: PropTypes.func.isRequired,
  multiSelectedPoints: Points.isRequired,
  showNotification: PropTypes.func.isRequired,
};

/* istanbul ignore next */
const mapStateToProps = state => ({
  ...state.ChartsSelectedReducer,
});

const ChartsSelected = connect(mapStateToProps, {
  removePoint: removePointAction,
  buildGraph: buildGraphAction,
  showNotification: showNotificationAction,
})(TChartsSelected);
export { ChartsSelected };
