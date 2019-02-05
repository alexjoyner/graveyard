import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  ListItem, ListHeader, CenteredContent, Button, colors, toaster,
} from 'ro-component-library';
import { GoTrashcan } from 'react-icons/go';
import { removePoint as removePointAction } from './actions';
import { Points } from '../../propTypes';
import { buildGraph as buildGraphAction } from '../../organisms/ChartModal/actions';


export class TChartsSelected extends Component {
  handleStartBraphBuild() {
    const { multiSelectedPoints, buildGraph } = this.props;
    const points = Object.keys(multiSelectedPoints);
    if (points.length === 0) {
      return toaster().info('Please add at least one point', { autoHideDuration: 5000 });
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
};

/* istanbul ignore next */
const mapStateToProps = state => ({
  ...state.ChartsSelectedReducer,
});

const ChartsSelected = connect(mapStateToProps, {
  removePoint: removePointAction,
  buildGraph: buildGraphAction,
})(TChartsSelected);
export { ChartsSelected };
