import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import WorkspaceList from './list';
import WorkspaceCreate from './create';

const WorkspaceLayout = ({ list }) =>
  <div className="workspace-layout">
    <div className="wrapper">
      <Tabs>
        <TabList>
          <Tab>Workspace List</Tab>
          <Tab>Create Workspace</Tab>
        </TabList>

        <TabPanel>
          <WorkspaceList list={list}/>
        </TabPanel>
        <TabPanel>
          <WorkspaceCreate />
        </TabPanel>
      </Tabs>
    </div>
  </div>

WorkspaceLayout.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object)
}

WorkspaceLayout.defaultProps = {
  list: [
    {
      name: 'JinYan Co., LTD',
      slug: 'jinyan'
    },
    {
      name: 'TestWorkspace',
      slug: 'testworkspace'
    }
  ]
}

export default WorkspaceLayout;
