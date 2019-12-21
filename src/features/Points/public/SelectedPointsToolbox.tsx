import React, { FC } from 'react';
import { ListItem } from 'ro-component-library/ListItem';
import { ListHeader } from 'ro-component-library/ListHeader';
import { CenteredContent } from 'ro-component-library/CenteredContent';
import { Button } from 'ro-component-library/Button';
import { Card } from 'ro-component-library/Card';

import { PointsObject, PointID } from '../../../shared/types/oee-master/points';
import { IconType } from 'react-icons/lib/iconBase';

type PerPointTool = {
  onClick: (pointID: PointID) => void,
  color: string,
  Icon: IconType,
  iconColor: string,
  renderCondition?: Boolean,
}
type GroupTool = {
  onClick: () => void,
  color: string,
  name: string,
  renderCondition?: boolean,
}

export type SelectedPointsToolboxProps = {
  selectedPoints: PointsObject,
  perPointTools: PerPointTool[],
  groupTools: GroupTool[],
  renderCondition?: boolean,
}
const SelectedPointsToolbox: FC<SelectedPointsToolboxProps> = ({ selectedPoints, perPointTools, groupTools }) => {
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
        {points.map((pointID) => (
          <ListItem className="selected-point" key={pointID}>
            {selectedPoints[pointID].name}
            {perPointTools.map((Tool) => {
              let shouldRender = (Tool.renderCondition !== undefined) ? (
                Tool.renderCondition
              ) : true;
              return (
                <React.Fragment key={`${Tool}`}>
                  {(shouldRender) ? (
                    <Button
                      key={Tool}
                      model="classic"
                      size="small"
                      color={Tool.color}
                      onClick={() => Tool.onClick(pointID)}
                    >
                      <Tool.Icon size={20} color={Tool.iconColor} />
                    </Button>
                  ) : null}
                </React.Fragment>
              )
            })}
          </ListItem>
        ))}
        {groupTools.map((Tool) => {
          let shouldRender = (Tool.renderCondition !== undefined) ? (
            Tool.renderCondition
          ) : true;
          return (
            <React.Fragment key={`${Tool}`}>
              {(shouldRender) ? (
                <ListItem
                  color={Tool.color}
                  onClick={Tool.onClick}
                >
                  <span>{Tool.name}</span>
                </ListItem>
              ) : null}
            </React.Fragment>
          )
        })}
      </CenteredContent>
    </Card>
  ) : null;
};

export { SelectedPointsToolbox };