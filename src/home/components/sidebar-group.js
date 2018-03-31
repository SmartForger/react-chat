import React from 'react';
import Ionicon from 'react-ionicons';

const SidebarGroup = ({ groupName, groupItems }) =>
  <div className="sidebar-group">
    <div className="group-name">
      <span className="label">{groupName}</span>
      <Ionicon icon="ios-add-circle-outline" fontSize="1.2em" color="white"/>
    </div>
    <div className="group-list">
      {groupItems.map(item =>
        <div key={item.id} className="item">{item.label}</div>
      )}
    </div>
  </div>

export default SidebarGroup;
