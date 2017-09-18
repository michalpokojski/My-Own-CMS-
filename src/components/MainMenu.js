import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

const MainMenu = (props) => (
  <Tabs>
    <Tab label="Posts" >
      <div>
      </div>
    </Tab>
    <Tab label="Users" >
      <div>
      </div>
    </Tab>
    <div style={{width: '25%'}} />
    <Tab onActive={ () => props.logOutUser()} label="Logout" />

  </Tabs>
);

export default MainMenu