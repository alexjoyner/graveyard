import React, { useEffect, useState, useContext } from 'react';
import { ListHeader } from 'ro-component-library/ListHeader';
import { ListItem } from 'ro-component-library/ListItem';
import { CenteredContent } from 'ro-component-library/CenteredContent';
import { getAllGroups } from '../utils/getAllGroups';
import { StoreContext } from '../../../shared/AppBuilder/storeContext';
import { changeGroup } from '../ducks/groups.duck';

type Group = {
  id: number,
  name: string,
}
const DefaultGroups: Group[] = [];

const GroupsMenu = ({ }) => {
  const dispatch = useContext(StoreContext)[1];
  const [groups, setGroups] = useState(DefaultGroups);
  const fetchGroups = async () => {
    const newGroups = await getAllGroups();
    const baseGroup = [{ id: 0, name: 'All Points' }];
    setGroups(baseGroup.concat(newGroups));
  };
  useEffect(() => {
    fetchGroups();
  }, []);
  return (
    <>
      <ListHeader>Groups</ListHeader>
      <CenteredContent>
        {groups.map(group => (
          <ListItem key={group.id} onClick={() => dispatch(changeGroup(group))}>
            {group.name}
          </ListItem>
        ))}
      </CenteredContent>
    </>
  );
};
// TGroupsMenu.propTypes = {
//   changePointGroup: PropTypes.func.isRequired,
//   groups: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     id: PropTypes.number.isRequired,
//   })).isRequired,
// };

// /* istanbul ignore next */
// const mapStateToProps = state => ({
//   ...state.GroupsMenuReducer,
// });

// const GroupsMenu = connect(mapStateToProps, {
//   changePointGroup,
//   setGroups: setGroupAction,
// })(TGroupsMenu);
export { GroupsMenu };
