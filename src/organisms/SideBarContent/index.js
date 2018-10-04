import React from 'react';
import { connect } from 'react-redux';
import { ListHeader, CenteredContent, ListItem, colors } from 'ro-component-library';
import { MultiSelectedChartsMenu } from '../MultiSelectedChartsMenu';
import { setNewGroup } from './actions';
import { getAllPoints } from '../GaugeBlockArray/utils/gatAllPoints';
import { subscribeToNewPoints } from '../GaugeBlockArray/actions/subscribeToNewPoints';
import { removePoints } from '../GaugeBlockArray/actions/removePoints';


let SideBarContent = (props) => (
  <div>
    <ListHeader>Groups</ListHeader>
    <CenteredContent>
      <ListItem
        onClick={async () => {
          removePoints(props.points)(props.dispatch);
          const allPoints = await getAllPoints(1);
          subscribeToNewPoints(allPoints)(props.dispatch);
        }}>
        All Points
        </ListItem>
      {props.groups.map((group) => {
        return (
          <ListItem
            key={group.id}
            onClick={() => {
              removePoints(props.points)(props.dispatch);
              setNewGroup(group.id)(props.dispatch);
            }}>
            {group.name}
          </ListItem>
        )
      })}
    </CenteredContent>
    <MultiSelectedChartsMenu />
  </div>
)

const mapStateToProps = (state) => {
  return {
    ...state.SideBarContentReducer,
    ...state.GaugeBlockArrayReducer
  }
}

SideBarContent = connect(mapStateToProps, null)(SideBarContent);
export { SideBarContent };
