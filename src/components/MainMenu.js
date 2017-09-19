import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import Posts from './Posts'
import Users from './Users'

const MainMenu = (props) => (
  <Tabs>
    <Tab label="Posts">
      <Posts />
    </Tab>
    <Tab label="Users">
      <Users />
    </Tab>
    <div style={{width: '25%'}}/>
    <Tab onActive={() => props.logOutUser()} label="Logout"/>

  </Tabs>
);

export default MainMenu