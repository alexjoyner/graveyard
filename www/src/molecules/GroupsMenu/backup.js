import React from 'react';
import { ListHeader, CenteredContent, ListItem } from 'ro-component-library';

export const GroupsMenu = ({ groups, ...props }) => (
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
