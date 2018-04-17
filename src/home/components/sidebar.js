import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from './dropdown';
import SidebarGroup from './sidebar-group';

const Sidebar = ({channels, directChannels, user, logout}) =>
  <div className="sidebar">
    <Dropdown label="Your Team"/>
    <div className="sidebar-content">
      <SidebarGroup
        groupName="channels"
        groupItems={channels}
      />
      <SidebarGroup
        groupName="direct messages"
        groupItems={directChannels}
      />
    </div>
    <Dropdown
      label={user.username}
      items={[
        {
          label: 'Log out',
          handler: logout
        }
      ]}
      arrowDir="up"
      showArrow
    />
  </div>

Sidebar.propTypes = {
  channels: PropTypes.arrayOf(PropTypes.object),
  directChannels: PropTypes.arrayOf(PropTypes.object),
  user: PropTypes.object,
  logout: PropTypes.func
}

Sidebar.defaultProps = {
  channels: [],
  directChannels: [],
  user: {},
  logout: () => {}
}

export default Sidebar;