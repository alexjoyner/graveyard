import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListItem } from 'ro-component-library/ListItem';
import { ListHeader } from 'ro-component-library/ListHeader';
import { CenteredContent } from 'ro-component-library/CenteredContent';
import { Button } from 'ro-component-library/Button';
import { Card } from 'ro-component-library/Card';
import { colors } from 'ro-component-library/colors';
import { toaster } from 'ro-component-library/Toast';
import { GoTrashcan } from 'react-icons/go';

export const GaugesSelected = ({
  multiSelectedPoints, multiDeselectPoint, buildGraph, removePoint,
}) => {
  const points = Object.keys(multiSelectedPoints);
  const handleStartBraphBuild = () => {
    if (points.length === 0) {
      return toaster().info('Please add at least one point', { autoHideDuration: 5000 });
    }
    return buildGraph(multiSelectedPoints);
  };

  return (points.length > 0) && (
    <Card style={{
      position: 'fixed',
      bottom: '10px',
      right: '10px',
      width: '30%',
      minWidth: '320px',
    }}
    >
      <ListHeader>Charts Selected:</ListHeader>
      <CenteredContent>
        {points.map(pointID => (
          <ListItem className="selected-point" key={pointID}>
            {multiSelectedPoints[pointID].name}
            <Button
              model="classic"
              className="remove-point"
              size="small"
              color="dark"
              onClick={() => {
                removePoint(pointID);
                multiDeselectPoint(pointID);
              }}
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
    </Card>
  );
};
