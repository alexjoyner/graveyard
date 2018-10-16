import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListItem, ListHeader, CenteredContent, Button, colors } from 'ro-component-library';
import { GoTrashcan } from 'react-icons/lib/go';
import { removePoint } from './actions';
import { Points } from '../../propTypes';
import { buildGraph } from '../HistoricalGraphModal/actions';
import { showNotification } from '../../actions/notification';
import { TEST_NOTIFICATION } from '../Notifications';


export class BaseMultiSelectedChartsMenu extends Component {
  handleStartBraphBuild() {
    const points = Object.keys(this.props.multiSelectedPoints);
    if (points.length === 0) {
      return this.props.showNotification(TEST_NOTIFICATION, 'Please add at least one point');
    }
    this.props.buildGraph(this.props.multiSelectedPoints);
    return null;
  }
  render() {
    return (
      <div>
        <br />
        <ListHeader>Charts Selected:</ListHeader>
        <CenteredContent>
          {Object.keys(this.props.multiSelectedPoints).map(pointID => (
            <ListItem key={pointID}>
              {this.props.multiSelectedPoints[pointID].name}
              <Button
                size="small"
                color="dark"
                onClick={() => this.props.removePoint(pointID)}
              >
                <GoTrashcan size={20} color={colors.dangerLight} />
              </Button>
            </ListItem>
          ))}
          <ListItem
            color="primary"
            onClick={() => this.handleStartBraphBuild()}
          >
            Build Graph
          </ListItem>
        </CenteredContent>
      </div>
    );
  }
}
BaseMultiSelectedChartsMenu.propTypes = {
  removePoint: PropTypes.func.isRequired,
  buildGraph: PropTypes.func.isRequired,
  multiSelectedPoints: Points.isRequired,
  showNotification: PropTypes.func.isRequired,
};

/* istanbul ignore next */
const mapStateToProps = state => ({
  ...state.MultiSelectedChartsMenuReducer,
});

const MultiSelectedChartsMenu = connect(mapStateToProps, {
  removePoint,
  buildGraph,
  showNotification,
})(BaseMultiSelectedChartsMenu);
export { MultiSelectedChartsMenu };
