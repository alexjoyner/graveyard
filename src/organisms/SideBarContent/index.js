import React from 'react';
import { connect } from 'react-redux';
import { ListHeader, CenteredContent, ListItem, colors } from 'ro-component-library';
import { MultiSelectedChartsMenu } from '../MultiSelectedChartsMenu';
import { setNewGroup } from './actions';
import { leaveCurrentGroupPoints, getAllPoints } from '../GaugeBlockArray/actions';


let SideBarContent = (props) => (
    <div>
      <ListHeader>Groups</ListHeader>
      <CenteredContent>
        <ListItem 
            onClick={() => {
                leaveCurrentGroupPoints(props.points)(props.dispatch);
                getAllPoints(1)(props.dispatch);
            }}>
            All Points
        </ListItem>
        {props.groups.map((group) => {
            return (
                <ListItem 
                    key={group.id}
                    onClick={() => {
                        leaveCurrentGroupPoints(props.points)(props.dispatch);
                        setNewGroup(group)(props.dispatch);
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
