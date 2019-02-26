import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListHeader } from 'ro-component-library/ListHeader';
import { ListItem } from 'ro-component-library/ListItem';
import { CenteredContent } from 'ro-component-library/CenteredContent';
import { changePointGroup, setGroups as setGroupAction } from './actions';
import { getGroups } from './utils/getGroups';

export const TGroupsMenu = ({ groups, setGroups, ...props }) => {
  const fetchGroups = async () => {
    const newGroups = await getGroups();
    setGroups(newGroups);
  };
  useEffect(() => {
    fetchGroups();
  }, []);
  return (
    <>
      <ListHeader>Groups</ListHeader>
      <CenteredContent>
        {groups.map(group => (
          <ListItem key={group.id} onClick={() => { props.changePointGroup(group.id); }}>
            {group.name}
          </ListItem>
        ))}
      </CenteredContent>
    </>
  );
};
TGroupsMenu.propTypes = {
  changePointGroup: PropTypes.func.isRequired,
  groups: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
};

/* istanbul ignore next */
const mapStateToProps = state => ({
  ...state.GroupsMenuReducer,
});

const GroupsMenu = connect(mapStateToProps, {
  changePointGroup,
  setGroups: setGroupAction,
})(TGroupsMenu);
export { GroupsMenu };
