import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListHeader, CenteredContent, ListItem } from 'ro-component-library';
import { MultiSelectedChartsMenu } from '../MultiSelectedChartsMenu';
import { changePointGroup } from './actions';

const BaseSideBarContent = props => (
  <div>
    <ListHeader>Groups</ListHeader>
    <CenteredContent>
      {props.groups.map(group => (
        <ListItem key={group.id} onClick={() => { props.changePointGroup(group.id); }} >
          {group.name}
        </ListItem>
        ))}
    </CenteredContent>
    <MultiSelectedChartsMenu />
  </div>
);
BaseSideBarContent.propTypes = {
  changePointGroup: PropTypes.func.isRequired,
  groups: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
};

const mapStateToProps = state => ({
  ...state.SideBarContentReducer,
});

const SideBarContent = connect(mapStateToProps, {
  changePointGroup,
})(BaseSideBarContent);
export { SideBarContent };
