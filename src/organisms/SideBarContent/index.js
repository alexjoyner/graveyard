import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListHeader, CenteredContent, ListItem } from 'ro-component-library';
import { MultiSelectedChartsMenu } from '../MultiSelectedChartsMenu';
import { setNewGroup } from './actions';
import { getAllPoints } from '../GaugeBlockArray/utils/gatAllPoints';
import { subscribeToNewPoints } from '../GaugeBlockArray/actions/subscribeToNewPoints';
import { removePoints } from '../GaugeBlockArray/actions/removePoints';


const BaseSideBarContent = props => (
  <div>
    <ListHeader>Groups</ListHeader>
    <CenteredContent>
      <ListItem
        onClick={async () => {
          removePoints(props.points)(props.dispatch);
          const allPoints = await getAllPoints(1);
          subscribeToNewPoints(allPoints)(props.dispatch);
        }}
      >
        All Points
      </ListItem>
      {props.groups.map(group => (
        <ListItem
          key={group.id}
          onClick={() => {
              removePoints(props.points)(props.dispatch);
              setNewGroup(group.id)(props.dispatch);
            }}
        >
          {group.name}
        </ListItem>
        ))}
    </CenteredContent>
    <MultiSelectedChartsMenu />
  </div>
);
BaseSideBarContent.propTypes = {
  dispatch: PropTypes.func.isRequired,
  points: PropTypes.arrayof(PropTypes.number).isRequired,
  groups: PropTypes.arrayof(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
};

const mapStateToProps = state => ({
  ...state.SideBarContentReducer,
  ...state.GaugeBlockArrayReducer,
});

const SideBarContent = connect(mapStateToProps, null)(BaseSideBarContent);
export { SideBarContent };
