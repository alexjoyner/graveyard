import React, { FC } from 'react';
import { ListItem } from 'ro-component-library/ListItem';
import { ListHeader } from 'ro-component-library/ListHeader';
import { CenteredContent } from 'ro-component-library/CenteredContent';
import { Button } from 'ro-component-library/Button';
import { Card } from 'ro-component-library/Card';
// import { colors } from 'ro-component-library/colors';
import { toaster } from 'ro-component-library/Toast';
import { GoTrashcan } from 'react-icons/go';

import { PointsObject } from '../../../../shared/types/oee-master/points';

export type SelectedPointsToolboxProps = {
  selectedPoints: PointsObject
}
const SelectedPointsToolbox: FC<SelectedPointsToolboxProps> = ({ selectedPoints }) => {
  const points = Object.keys(selectedPoints);
  return (points.length > 0) ? (
    <Card style={{
      position: 'fixed',
      bottom: '10px',
      right: '10px',
      width: '30%',
      minWidth: '320px',
    }}
    >
      <ListHeader>Points Selected:</ListHeader>
      <CenteredContent>
        {points.map(pointID => (
          <ListItem className="selected-point" key={pointID}>
            {selectedPoints[pointID].name}
            {/* <Button
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
            </Button> */}
          </ListItem>
        ))}
        {/* <ListItem
          className="build-graph"
          color="primary"
          onClick={handleStartBraphBuild}
        >
          <span>Build Graph</span>
        </ListItem> */}
      </CenteredContent>
    </Card>
  ) : null;
};

export { SelectedPointsToolbox };