import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  ListItem, ListHeader, CenteredContent, Button, colors, toaster,
} from 'ro-component-library';
import { GoTrashcan } from 'react-icons/go';
import { removePoint as removePointAction } from './actions';
import { Points } from '../../propTypes';
import { buildGraph as buildGraphAction } from '../../organisms/ChartModal/actions';


export const TChartsSelected = ({ multiSelectedPoints, buildGraph, removePoint }) => {
  const handleStartBraphBuild = () => {
    const points = Object.keys(multiSelectedPoints);
    if (points.length === 0) {
      return toaster().info('Please add at least one point', { autoHideDuration: 5000 });
    }
    return buildGraph(multiSelectedPoints);
  };

  return (
    <>
      <br />
      <ListHeader>Charts Selected:</ListHeader>
      <CenteredContent>
        {Object.keys(multiSelectedPoints).map(pointID => (
          <ListItem className="selected-point" key={pointID}>
            {multiSelectedPoints[pointID].name}
            <Button
              className="remove-point"
              size="small"
              color="dark"
              onClick={() => removePoint(pointID)}
            >
              <GoTrashcan size={20} color={colors.dangerLight} />
            </Button>
          </ListItem>
        ))}
        <ListItem
          className="build-graph"
          color="primary"
          onClick={handleStartBraphBuild}
        >
          <span>Build Graph</span>
        </ListItem>
      </CenteredContent>
    </>
  );
};
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
